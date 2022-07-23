import { Button, Col, Container, Row } from "react-bootstrap";

import "./styles.scss";
import React, { useState } from "react";

import Bubbles from "../../components/Bubbles";
import ConnectWallet from '../../components/ConnectWallet';

const Welcome = () => {

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
                    <ConnectWallet variables={[data, setData]}/>

                </div>
            </div>

        </div>
    );
};

export default Welcome;
