const express = require('express')
const app = express()
const port = 8811

app.get('/', (req, res) => res.send('Hello World!'))
app.get('/hubspot', (req, res) => {

    console.log('/hubspot called')

    return res.json({
        "results": {
            "applicationId": 211393,
            "title": "Testing Hubspot Sandbox App",
            "associatedHubSpotObjectTypes": [
                "DEAL"
            ],
        },
    })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))