import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { getWeb3Provider, switchToNetwork, watchAsset } from '../lib/web3';
import { VestPool__factory } from '../contracts';
import { useState, useCallback, useMemo, useEffect } from 'react';
import ReactLoading from 'react-loading';
import { Web3Provider } from '@ethersproject/providers';
import { Button, InputGroup, FormControl, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BigNumber } from '@ethersproject/bignumber';
import { formatEther } from '@ethersproject/units';
import logo from "../resources/logo@2x.png";
import Moment from 'moment';
import ThankYouLater from '../lib/ThankYouLater';
import { gql, GraphQLClient } from 'graphql-request';

const MELDAddress = '0xf8aE4Ef55628aacFb9Bd6E777b0F5D35C173F624'.toLowerCase();
const VestAddress = '0xb4939DDfd7425FaE040A42BBb5220756973Fc329'.toLowerCase();

const gqlClient = new GraphQLClient("https://api.thegraph.com/subgraphs/name/hongjianghuang/melandvest");

const styleSpan = {
  width: "10vw",
  justifyContent: "flex-end"
};

const Home: NextPage<{
  networkId: string,
}> = (props) => {
  const [account, setAccount] = useState('');
  const [loading, setLoading] = useState(false);
  const [provider, setProvider] = useState<Web3Provider | null | undefined>(undefined);
  const [vestings, setVestings] = useState<{
    vestingId: BigNumber;
    beneficiary: string;
    amount: BigNumber;
    releaseTime: Date;
    released: boolean;
  }[]>([]);
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const timer = window.setInterval(() => {
      setNow(new Date());
    }, 1000);

    return () => window.clearInterval(timer);
  });

  const [vcInfo, setVcInfo] = useState<{
    amount: BigNumber;
    cliffMonth: BigNumber;
    vestingMonth: BigNumber;
    unlockTGE: BigNumber;
    beneficiary: string;
    timeOfTGE: Date;
    recived: boolean;
  }>();

  useEffect(() => {
    getWeb3Provider().then(provider => {
      if (provider) {
        setProvider(provider);
      } else {
        setProvider(null);
      }
    });
  }, [1]);

  const reciveVc = useCallback(async () => {
    if (!provider) {
      return;
    }
    try {
      const vestPool = VestPool__factory.connect(VestAddress, provider.getSigner());
      const tx = await vestPool.reviceTGE();
      setLoading(true);
      await tx.wait();
      await initVesting(vcInfo!.beneficiary);

      // ????????????????????????
      try {
        await watchAsset(MELDAddress, provider);
      } catch (e) {

      }

      setVcInfo({ ...vcInfo!, recived: true });
      setLoading(false);
    } catch (error) {
      window.alert(JSON.stringify(error));
    }
  }, [provider, vcInfo]);

  const reciveVest = useCallback(async (vestId: BigNumber) => {
    if (!provider) {
      return;
    }
    const promiseTimeout = () => {
      return new Promise(resolve => {
          setTimeout(() => {
              resolve(true);
          }, 3000);
      });
   }
    const vestPool = VestPool__factory.connect(VestAddress, provider.getSigner());
    const tx = await vestPool.release(vestId);
    await tx.wait();
    // wait for 3 seconds
    // idnexer async
    await promiseTimeout();
    await initVesting(account);
  }, [provider, vcInfo, account]);

  const vvvv = useMemo(() => {
    if (vcInfo && !vcInfo.recived) {
      const statusInfo = `[${vcInfo.amount.gt(0) ? '*' : ' '}]Normal [ ]Dumping [${vcInfo.amount.eq(0) ? '*' : ' '}]Uninvested`;

      return (
        <>
          <InputGroup className="mb-3">
            <InputGroup.Text style={styleSpan}>vc status:</InputGroup.Text>
            <FormControl aria-label="amount" value={statusInfo} disabled />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Text style={styleSpan}>amount total:</InputGroup.Text>
            <FormControl aria-label="amount" value={formatEther(vcInfo.amount)} disabled />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Text style={styleSpan}>cliff month:</InputGroup.Text>
            <FormControl aria-label="amount" value={`${vcInfo.cliffMonth.toNumber()} month`} disabled />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Text style={styleSpan}>vesting month:</InputGroup.Text>
            <FormControl aria-label="amount" value={`${vcInfo.vestingMonth.toNumber()} month`} disabled />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Text style={styleSpan}>unlock TGE:</InputGroup.Text>
            <FormControl aria-label="amount" value={`${vcInfo.unlockTGE.toNumber()}%`} disabled />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Text style={styleSpan}>TGE Time:</InputGroup.Text>
            <FormControl aria-label="amount" value={
              vcInfo.amount.gt(0) ? Moment(vcInfo.timeOfTGE).format('YYYY-MM-DD HH:mm:ss') : '-'
            } disabled />
          </InputGroup>
          <InputGroup className="mb-3">
            {
              vcInfo.amount.eq(0) && <Button disabled onClick={reciveVc} variant="primary">not found vc info</Button>
            }
            {
              !vcInfo.amount.eq(0) && (vcInfo.timeOfTGE > now) && <Button disabled onClick={reciveVc} variant="primary">
                {Moment(now).to(vcInfo.timeOfTGE, true)}
              </Button>
            }
            {
              !vcInfo.amount.eq(0) && (vcInfo.timeOfTGE < now) && <Button onClick={reciveVc} variant="primary">recive TGE and start vesting</Button>
            }
          </InputGroup>
        </>
      )
    }

    return (
      <>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Unlock time</th>
              <th>amount</th>
              <th>unlocked</th>
            </tr>
          </thead>
          <tbody>
            {vestings.map((v, k) => {
              return (
                <tr key={k}>
                  <td style={{
                    width: "200px"
                  }}>UTC {Moment.utc(v.releaseTime).format("YYYY/MM/DD HH:mm:ss")}</td>
                  <td>{formatEther(v.amount)}</td>
                  <td>
                    {v.released && <span>released</span>}
                    {!v.released && <Button disabled={v.releaseTime > now} onClick={() => reciveVest(v.vestingId)} variant="primary">unlock</Button>}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </Table>
      </>
    );

  }, [vcInfo, vestings, now]);

  const vest = useMemo(() => {
    if (!provider) {
      return;
    }

    return (
      <>
        <InputGroup className="mb-3">
          <InputGroup.Text style={styleSpan}>wallet address:</InputGroup.Text>
          <FormControl aria-label="address" value={account} disabled />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Text style={styleSpan}>chain:</InputGroup.Text>
          <FormControl aria-label="chain" value={parseInt(props.networkId, 16)} disabled />
        </InputGroup>
        {vvvv}
      </>
    )
  }, [account, vcInfo, now]);

  const initVestInfo = async (_account: string) => {
    if (!provider) {
      return;
    }

    const vestPool = VestPool__factory.connect(VestAddress, provider.getSigner());
    const vc = await vestPool.vcmap(_account);

    setVcInfo({
      recived: vc.recived,
      amount: vc.amount,
      cliffMonth: vc.cliffMonth,
      vestingMonth: vc.vestingMonth,
      unlockTGE: vc.unlockTGE,
      beneficiary: vc.beneficiary,
      timeOfTGE: new Date(vc.timeOfTGE.toNumber() * 1000),
    });

    if (vc.recived) {
      await initVesting(_account);
    }
  }

  const initVesting = async (_account: string) => {
    if (!provider) {
      return;
    }
    const vcVestings: {
      id: string,
      amount: string,
      beneficiary: string,
      releaseTime: string,
      released: boolean
    }[] = await gqlClient.request(gql`
    query getVcVesting($id: Bytes!) {
      vcVestings(first: 100, where: { beneficiary: $id }) {
       id
       amount
       beneficiary
       releaseTime
       released
     }
    }
    `, { id: _account }).then(res => res.vcVestings);

    // @ts-ignore
    const rvs = vcVestings.map(v => {
      return {
        vestingId: BigNumber.from(v.id),
        beneficiary: v.beneficiary,
        amount: BigNumber.from(v.amount),
        releaseTime: new Date(parseInt(v.releaseTime) * 1000),
        released: v.released
      }
    });
    setVestings(rvs);
  }

  const connectWallet = useCallback(async () => {
    if (!provider) {
      console.warn("provider of undefined");
      return;
    }

    await switchToNetwork(provider, props.networkId);

    const coinbases = await provider.listAccounts();

    setAccount(coinbases[0]);

    await initVestInfo(coinbases[0]);
  }, [provider]);

  const gotoMetamaskInsallser = () => {
    window.open("https://metamask.io/");
  };

  const renderConnectWallet = useMemo(() => {
    if (provider === undefined) {
      return (
        <ReactLoading height={'20%'} type="spokes" color="#ccc" width={'20%'} />
      );
    }

    if (provider === null) {
      return (
        <Button onClick={gotoMetamaskInsallser} variant="primary">please install metamask</Button>
      )
    }

    return (
      <Button onClick={connectWallet} variant="primary">Connect wallet</Button>
    );
  }, [provider]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Meland.ai(MELD) vest</title>
        <meta name="description" content="Meland.ai vesting dashboard" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.he}>
        <img className={styles.logo} src={logo.src} />
      </div>

      <ThankYouLater />

      {
        loading
        && <div style={{
          position: "absolute",
          top: '50%',
          left: '50%',
          width: "100px",
          height: "100px",
          transform: "translate(-50%, -50%)",
          zIndex: 1001
        }}>
          <ReactLoading height={'100%'} type="spokes" color="#ccc" width={'100%'} />
        </div>
      }

      <main className={styles.main}>
        {!account && renderConnectWallet}
        {account && vest}
      </main>

      <footer className={styles.footer}>
        <a
          href="https://meland.ai"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Meland.ai
        </a>
      </footer>
    </div>
  )
}

export async function getStaticProps() {
  const { ...clientWhiteList } = process.env;

  return {
    props: {
      ...clientWhiteList
    }
  }
}

export default Home
