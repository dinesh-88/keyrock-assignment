Keyrock Code Challenge Part 1
==================================
Create 3 below APIs:

1. /api/createWallet [GET] 
    -  Generates a new Ethereum wallet and return and object with the private key and the public ETH address
2. /api/getBalance/:param [GET]
    - Get the balance of an ethereum address
3. /api/transaction  [POST] 
    - Creates a transaction to send ETH from one address to another
    - Request Body 
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
```
Example 
1. /api/createWallet [GET] 
    - URL: http://localhost:8080/api/createWallet
    - Responce: 
           ```{
            "address": "0x4f6E6Dd1Bf40753C3410817671a7a955b8146861",
            "privateKey": "0x21979477e934e7696a2129e2af9c204ff646f1ab23e9ab355a938a36e343803e"
            }```
2. /api/getBalance/:param [GET]   
    - URL : `http://localhost:8080/api/getBalance/0x4f6E6Dd1Bf40753C3410817671a7a955b8146861`
    - Responce:    
            ```{
            "balance": "18.749752998999899996"
            }   ```
3. /api/transaction  [POST]             
    - URL : `http://localhost:8080/api/transaction`
    - Request Body : 
                    ```{
                      "privateKey":"0x21979477e934e7696a2129e2af9c204ff646f1ab23e9ab355a938a36e343803e",
                      "destination":"0x68b92D431Fd99052515C31A0c60Db057608bBCF9",
                      "amount":"100000"
                    }```
    - Responce : 
               ```{
               "receipt": "0x485ad33b8826c7f1859fa03e2eaf61f7a3e2168a25b0dd3e3dac3d9431779618"
               }```        