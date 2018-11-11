Keyrock Code Challenge Part 1
==================================
Create 3 below APIs:

1. /createWallet [GET] 
    -  Generates a new Ethereum wallet and return and object with the private key and the public ETH address
2. /getBalance/:param [GET]
    - Get the balance of an ethereum address
3. /transaction  [POST] 
    - Creates a transaction to send ETH from one address to another
    - Body 
        - privateKey : string
        - destination: string
        - amount : sting (wei)
              

Getting Started
---------------

```sh
# clone it
git https://github.com/dinesh-88/keyrock-assignment.git
cd keyrock-assignment

# Install dependencies
npm install

# Start  server:
npm start
