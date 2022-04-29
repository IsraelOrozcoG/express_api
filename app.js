const express = require('express')

const app = express()

app.use(express.json())

const port = 3000

app.get('/v1/explorers', (req,res) => {
    console.log(`Api Explorers GET ALL requests ${new Date()}`)

    const explorer1 ={id: 1, name: "Carlo1"}
    const explorer2 ={id: 1, name: "Carlo2"}
    const explorer3 ={id: 1, name: "Carlo3"}
    const explorer4 ={id: 1, name: "Carlo4"}
    const explorer5 ={id: 1, name: "Carlo5"}
    const explorers=[explorer1, explorer2, explorer3, explorer4]
    res.status(200).json(explorers)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

