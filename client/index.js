const axios = require('axios')
const niceList = require('../utils/niceList.json')
const MerkleTree = require('../utils/MerkleTree')

const serverUrl = 'http://localhost:1225'

async function main() {
    const tree = new MerkleTree(niceList)
    const name = 'pablo'
    const index = niceList.findIndex((n) => n === name)
    const proof = tree.getProof(index)

    const { data: gift } = await axios.post(`${serverUrl}/gift`, {
        proof,
        name,
    })

    console.log({ gift })
}

main()
