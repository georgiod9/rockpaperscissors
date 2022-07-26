import { Button, Col, Container, Row } from "react-bootstrap";

import "./styles.scss";
import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import { Ropsten, useEtherBalance, useEthers } from "@usedapp/core";
import { formatEther } from '@ethersproject/units';


import { FaBeer } from 'react-icons/fa';
import { BiArrowToBottom } from 'react-icons/bi';
import bubble from "../../assets/bubble1.png"

import { Rinkeby, Kovan, Mainnet } from "@usedapp/core";



const ConnectWallet = (props) => {

    const { activateBrowserWallet, account, deactivate } = useEthers()
    const rinkebyBalance = useEtherBalance(account, { chainId: Rinkeby.chainId })
    const kovanBalance = useEtherBalance(account, { chainId: Kovan.chainId })
    const mainnetBalance = useEtherBalance(account, { chainId: Mainnet.chainId })
    const ropstenBalance = useEtherBalance(account, {chainId: Ropsten.chainId })


    //const [wallet, setWalletData] = props.variables;

    var addr = "";
    //Store wallet details
    const [data, setData] = props.variables;
    const showModalSection = props.showModalSection;
    const setIsWalletList = props.setIsWalletList;

    const [connected, setConnected] = useState(false);

    useEffect(() => {
        console.log("address: ", data.address)
    }, [data])

    //Uncomment below, and use "btnhandler" instead of "activateBrowserWallet" 
    //for connecting wallet with ethers.js instead of usedapp
    /*
    const btnHandler = () => {
        const provider = new ethers.providers.Web3Provider(window.ethereum)

        if (window.ethereum) {
            console.log("Connecting wallet...");
            window.ethereum
                .request({ method: "eth_requestAccounts" })
                .then((res) => accountChangeHandler(res[0]));
        } else {
            alert("Install Metamask extension!");
        }

    };


    const accountChangeHandler = (account) => {
        console.log("Entered account change handler")

        window.ethereum
            .request({
                method: "eth_getBalance",
                params: [account, "latest"]
            })
            .then((balance) => {
                setTimeout(() => {
                    setData({
                        address: account,
                        Balance: ethers.utils.formatEther(balance),
                    });
                    setConnected(true);
                }, 500);
            });

    };


    function round(value, decimals) {
        return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals);
    }

    */
    return (
        <div className="container">

            <Container fluid="true" className="connectWalletModule">
                <Col lg={2} className="connectWalletContainer " md={{ span: 2 }}>
                    <Row md={10} xs={1} lg={1}>
                        {
                            account
                                ?
                                <div>
                                    <p className="font-m font-strawberry">Address: {account.substring(0, 5) + "..." + account.substring(36, 40)}</p>
                                    <p className="font-m font-strawberry">Balance: </p>
                                    {
                                        rinkebyBalance &&
                                        <div className="bal">
                                            <h4>Rinkeby Balance</h4>
                                            {formatEther(rinkebyBalance)}
                                        </div>
                                    }
                                    {
                                        ropstenBalance &&
                                        <div className="bal">
                                            <h4>Ropsten Balance</h4>
                                            {formatEther(ropstenBalance)}
                                        </div>
                                    }
                                    {
                                        kovanBalance &&
                                        <div className="bal" >
                                            <h4>Kovan Balance</h4>
                                            {formatEther(kovanBalance)}
                                        </div>
                                    }
                                    {
                                        mainnetBalance &&
                                        <div className="bal">
                                            <h4>Mainnet Balance</h4>
                                            {formatEther(mainnetBalance)}
                                        </div>
                                    }
                                </div>
                                :
                                <div>
                                    <p className="font-m font-strawberry">Connect wallet to get started.</p>
                                    <div className="arrowIconSizing">
                                        <BiArrowToBottom size={50} />
                                    </div>
                                </div>
                        }

                    </Row>
                    <Row md={10}>
                        {
                            account
                                ? <div></div>
                                :
                                <div className="connectButtonSizing">
                                    <Button variant="dark" className="connectButtonContent" onClick={activateBrowserWallet} size="lg">CONNECT WALLET</Button>
                                </div>
                        }

                    </Row>
                </Col>

            </Container>
        </div>
    );
};

export default ConnectWallet;
