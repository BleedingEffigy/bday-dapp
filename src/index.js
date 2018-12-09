import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Web3 from 'web3';

import { Drizzle, generateStore } from "drizzle";
import EtherGift from "./contracts/EtherGift.json";

const options = { contracts: [EtherGift] };

const drizzleStore = generateStore(options);
const drizzle = new Drizzle(options, drizzleStore);

let web3 = window.web3;
// Is there is an injected web3 instance?
if (typeof web3 !== 'undefined') {
  App.web3Provider = web3.currentProvider;
  web3 = new Web3(web3.currentProvider);
} else {
  // If no injected web3 instance is detected, fallback to Ganache.
  App.web3Provider = new web3.providers.HttpProvider('http://127.0.0.1:8545');
  web3 = new Web3(App.web3Provider);
}


ReactDOM.render(<App drizzle={drizzle} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
