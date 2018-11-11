import { Router } from 'express';
import Web3 from 'web3';
import config from './../config.json';
import validate from 'express-validation';
import validation from './validation/transaction';
import logger from './../lib/logger';

const walletRouter = Router();
let web3 = new Web3(new Web3.providers.HttpProvider(config.providerUrl || "http://localhost:8545"));
/**
 * create a new Ethereum wallet
 * @return address,privateKey
 * }
 */
walletRouter.get('/createWallet', (req, res) => {
    res.status(200).json(web3.eth.accounts.create())
});

/**
 * Get the balance of an Ethereum address
 * @param :param - ETH address
 * @return balance
 */
walletRouter.get('/getBalance/:param', (req, res) => {
    const address = req.params.param;
    web3.eth.getBalance(address).then((balance) => {
        const result = web3.utils.fromWei(balance, 'ether');
        logger.info("Balance requested for " + address + ", Balance = " + result);
        res.status(200).json({balance: result})
    }).catch(error => {
        logger.error("RequestID  : " + req.requestId + " Error : " + error);
        res.status(500).json({error: "Error occurred. Event Id : " + req.requestId})
    });
});

/**
 *  Creates a transaction to send ETH from one address to another
 *  @param  {privateKey, destination, amount}
 *  @return receipt
 */
walletRouter.post('/transaction', validate(validation), (req, res) => {
    const {privateKey, destination, amount} = req.body;
    web3.eth.accounts.signTransaction({
        to: destination,
        gas: 2000000,
        value: web3.utils.fromWei(amount, 'wei')
    }, privateKey).then((data) => {
        web3.eth.sendSignedTransaction(data.rawTransaction, (error, receipt) => {
            if (error) {
                logger.error("RequestID  : " + req.requestId + " Error : " + error);
                res.status(500).json({error: "Error occurred. Event Id : " + req.requestId})
            } else {
                logger.info("ETH " + amount + " transferred to " + destination);
                res.status(200).json({receipt})
            }
        })
    }).catch(error => {
        logger.error("RequestID  : " + req.requestId + " Error : " + error);
        res.status(500).json({error: "Error occurred. Event Id : " + req.requestId})
    })
});
export default walletRouter;