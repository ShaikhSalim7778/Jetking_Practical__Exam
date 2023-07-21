const fs = require('fs');
const solc = require('solc');

const contractPath = './SimpleStorage.sol';
const contractSource = fs.readFileSync(contractPath, 'utf8');

const input = {
    language: 'Solidity',
    sources: {
        'SimpleStorage.sol': {
            content: contractSource,
        },
    },
    settings: {
        outtputSelection: {
            '*': {
                '*':['*'],
            },
        },
    },
},

const output = JSON.parse(solc.compile(JSON.stringify(input))):

const contractName = 'SimpleStorage';
const abi = output.contracts['SimpleStorage.sol'][contractName].abi;
const bytecode = output.contracts[SimpleStorage.sol][contractName].evm.bytecode.object:

const outputFolder = './output/';
fs.mkdirSync(outputFolder, { recursive: true});
fs.writeFileSync('${outputFolder}${contractName}.abi.json',JSON.stringify(abi)):
fs.writeFileSync('${outputFolder}${contractName}.bytecode.json',JSON.stringify(bytecode));

console.log('ABI and Byte Code generated successfully!'):
