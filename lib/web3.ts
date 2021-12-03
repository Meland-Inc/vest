import detectEthereumProvider from '@metamask/detect-provider';
import Web3 from 'web3';
import { provider } from 'web3-core';
import { Web3Provider } from '@ethersproject/providers';

let web3Provider: Web3Provider;

export const getWeb3Provider = async function(): Promise<Web3Provider | undefined> {
	if (!web3Provider) {
		const provider = (await detectEthereumProvider()) as provider;
		if (!provider) {
			return;
		}
		const web3 = new Web3();
		web3.setProvider(provider);
		await (window as any).ethereum.enable();

		// @ts-ignore
		web3Provider = new Web3Provider(web3.currentProvider, 'any');
	}
	return web3Provider;
};

export const addNetwork = async (web3Provider: Web3Provider, needNetworkId: string) => {
	return web3Provider.send('wallet_addEthereumChain', [
		{
			chainId: needNetworkId,
			chainName: '(mumbai)BSC',
			nativeCurrency: {
				name: 'BSC Token',
				symbol: 'BNB',
				decimals: 18
			},
			rpcUrls: [ 'https://speedy-nodes-nyc.moralis.io/036db9847a8d6409b3dbcddc/polygon/mumbai' ],
			blockExplorerUrls: [ 'https://mumbai.polygonscan.com' ]
		}
	]);
};

export const switchToNetwork = async (web3Provider: Web3Provider, needNetworkId: string) => {
    const network = await web3Provider.getNetwork();

	if (network.chainId === parseInt(needNetworkId, 16)) {
		return;
	}

	try {
		const tx = await web3Provider.send('wallet_switchEthereumChain', [
			{
				chainId: needNetworkId
			}
		]);
		return tx;
	} catch (error) {
		await addNetwork(web3Provider, needNetworkId);
	}
	return web3Provider.send('wallet_switchEthereumChain', [
		{
			chainId: needNetworkId
		}
	]);
};

export const watchAsset = async (MELDAddress: string, web3Provider: Web3Provider) => {
	return web3Provider.send('wallet_watchAsset', {
		// @ts-ignore
		type: 'ERC20',
		options: {
			address: MELDAddress,
			symbol: 'MELD',
			decimals: 18
		}
	});
};
