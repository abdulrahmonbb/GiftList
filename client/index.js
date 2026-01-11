const axios = require('axios');
const niceList = require('../utils/niceList.json');
const MerkleTree = require('../utils/MerkleTree');

const serverUrl = 'http://localhost:1225';
const merkelTree = new MerkleTree(niceList);

async function main() {
  // TODO: how do we prove to the server we're on the nice list?
  const name = niceList[0];
  const index = niceList.indexOf(name);

  try {
    const proof = await merkelTree.getProof(index);
    const { data: gift } = await axios.post(`${serverUrl}/gift`, {
      // TODO: add request body parameters here!
      proof,
      left: name
    });
    console.log({ gift });
  } catch (error) {
    console.log(error.message);
  }
}

main();