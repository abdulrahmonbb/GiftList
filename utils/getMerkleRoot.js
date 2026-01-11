const MerkleTree = require('./MerkleTree');
const niceList = require('./niceList.json');

const merkleTree = new MerkleTree(niceList);
const root = merkleTree.getRoot();

console.log('Merkle Root:', root);