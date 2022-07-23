import { Button, Col, Container, Row } from "react-bootstrap";

import "./styles.scss";
import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import { FaBeer } from 'react-icons/fa';
import { BiArrowToBottom } from 'react-icons/bi';

import bubble from "../../assets/bubble1.png"



const ConnectWallet = (props) => {

    //const [wallet, setWalletData] = props.variables;

    var addr = "";
    //Store wallet details
    const [data, setData] = props.variables;

    const [connected, setConnected] = useState(false);

    useEffect(() => {
        console.log("address: ", data.address)
    }, [data])

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

    return (
        <div className="container">
            <Container fluid="true" className="connectWalletModule">
                <Col lg={2} className="connectWalletContainer " md={{ span: 2 }}>
                    <Row md={10} xs={1} lg={1}>
                        {
                            connected
                                ?
                                <div>
                                    <p className="font-m font-strawberry">Address: {data.address.substring(0, 5) + "..." + data.address.substring(36, 40)}</p>
                                    <p className="font-m font-strawberry">Balance: {round(data.Balance, 2)}</p>
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
                            connected
                                ? <div></div>
                                :
                                <div className="connectButtonSizing">
                                    <Button variant="dark" className="connectButtonContent" onClick={btnHandler} size="lg">CONNECT WALLET</Button>
                                </div>
                        }

                    </Row>
                </Col>

            </Container>
        </div>
    );
};

export default ConnectWallet;
