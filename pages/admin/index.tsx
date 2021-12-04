import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import { getWeb3Provider, switchToNetwork } from '../../lib/web3';
import { VestPool__factory, MELD__factory } from '../../contracts';
import { useState, useCallback, useMemo, useEffect } from 'react';
import ReactLoading from 'react-loading';
import { Web3Provider } from '@ethersproject/providers';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BigNumber } from '@ethersproject/bignumber';
import { formatEther } from '@ethersproject/units';
import logo from "../../resources/logo@2x.png";

const MELDAddress = '0x62C7500B45d39ec64030FE44acB9a1037f1F127D'.toLowerCase();
const VestAddress = '0x672B0fbc33158E0ad04ae7197A76c8d67708b7AB'.toLowerCase();

const styleSpan = {
  width: "10vw",
  justifyContent: "flex-end"
};

const Admin: NextPage<{
  networkId: string,
}> = (props) => {
  const [account, setAccount] = useState('');
  const [b, setB] = useState<BigNumber>(BigNumber.from(0));
  const [rb, setRB] = useState<BigNumber>(BigNumber.from(0));
  const [loading, setLoading] = useState(false);
  const [provider, setProvider] = useState<Web3Provider | null | undefined>(undefined);

  useEffect(() => {
    getWeb3Provider().then(provider => {
      if (provider) {
        setProvider(provider);
      } else {
        setProvider(null);
      }
    });
  }, [1]);

  const connectWallet = useCallback(async () => {
    if (!provider) {
      console.warn("provider of undefined");
      return;
    }

    await switchToNetwork(provider, props.networkId);

    const coinbases = await provider.listAccounts();

    const vestPool = VestPool__factory.connect(VestAddress, provider.getSigner());
    const gmRole = await vestPool.GM_ROLE();

    const isGM = await vestPool.hasRole(gmRole, coinbases[0]);

    if (!isGM) {
        window.alert("please login gm account");
        return;
    }

    const MELDI = MELD__factory.connect(MELDAddress, provider.getSigner());

    const rb = await vestPool.viewTokenToVest();
    const b = await MELDI.balanceOf(VestAddress);

    
    setRB(rb);
    setB(b);
    setAccount(coinbases[0]);

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
        {account && (
          <>
            <div>余额: {formatEther(b)}</div>
            <div>需要金额: {formatEther(rb)}</div>
          </>
        )}
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

export default Admin