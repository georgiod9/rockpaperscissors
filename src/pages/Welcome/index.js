import { Button, Col, Container, Row } from "react-bootstrap";

import "./styles.scss";
import React, { useState } from "react";

import Bubbles from "../../components/Bubbles";
import ConnectWallet from '../../components/ConnectWallet';

import { useEthers, useGasPrice } from "@usedapp/core";
import { DAppProvider, Rinkeby, Kovan, Mainnet, useEtherBalance } from "@usedapp/core";
import { getDefaultProvider } from 'ethers';
import Wall from "../../components/Wallet";


const Welcome = ({ isWalletList, setIsWalletList, dueNFTPayment }) => {
    const [data, setData] = useState({
        address: "",
        Balance: null,
    });

    return (
        <div className="welcomeContainer">
            <div className="bubblesContainer">
                <Bubbles />
            </div>
            <div className="titleContainer">
                <h1>Rock, Paper, Scissors</h1>

            </div>
            <div className="welcomeCard ">
                <div className="connectWalletContainer ">
                    <ConnectWallet
                        variables={[data, setData]}
                        isWalletList={setIsWalletList}

                    />

                </div>
            </div>

        </div>
    );
};

export default Welcome;
