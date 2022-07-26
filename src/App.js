import './App.scss';
import Homepage from './pages/Welcome';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


import React from 'react'
import ReactDOM from 'react-dom'

import { DAppProvider, Ropsten, Rinkeby, Kovan, Mainnet, useEtherBalance } from "@usedapp/core";
import { getDefaultProvider } from 'ethers';



function App() {
  const [isWalletList, setIsWalletList] = React.useState(false);

  console.log("APPKEY: ", process.env.REACT_APP_INFURA_KEY)
  const config = {
    networks: [Rinkeby, Ropsten, Mainnet, Kovan],
    readOnlyChainId: [Rinkeby.chainId],
    readOnlyUrls: {
      [Mainnet.chainId]: getDefaultProvider('mainnet'),
      [Rinkeby.chainId]: `https://rinkeby.infura.io/v3/` + process.env.REACT_APP_INFURA_KEY,
      [Kovan.chainId]: `https://kovan.infura.io/v3/` + process.env.REACT_APP_INFURA_KEY,
      [Ropsten.chainId]: 'https://ropsten.infura.io/v3/' + process.env.REACT_APP_INFURA_KEY,
    },
    notifications: {
      expirationPeriod: 1000, //milliseconds
      checkInterval: 1000, // milliseconds
    }
  }

  return (

    <DAppProvider config={config}>
      <Router>
        <div className="App">
          <Routes>
            <Route exact path='/' element={
              <Homepage
                isWalletList={isWalletList}
                setIsWalletList={setIsWalletList}
              />
            }></Route>
          </Routes>
        </div>
      </Router>
    </DAppProvider>

  );
}

export default App;
