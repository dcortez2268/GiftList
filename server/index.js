const express = require('express')
const verifyProof = require('../utils/verifyProof')

const port = 1225

const app = express()
app.use(express.json())

// TODO: hardcode a merkle root here representing the whole nice list
// paste the hex string in here, without the 0x prefix
const MERKLE_ROOT =
    '7fc72342e2ba33182c6de7d5d1b671aa85286f35787829cd731287808ce049f3'

app.post('/gift', (req, res) => {
    // grab the parameters from the front-end here
    const { proof, name } = req.body

    // TODO: prove that a name is in the list
    const isInTheList = verifyProof(proof, name, MERKLE_ROOT)
    if (isInTheList) {
        res.send('You got a toy robot!')
    } else {
        res.send('You are not on the list :(')
    }
})

app.listen(port, () => {
    console.log(`Listening on port ${port}!`)
})
