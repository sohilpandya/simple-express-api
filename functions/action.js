const axios = require('axios')

exports.handler = function(event, context, callback) {

    console.log('youre in lambda /actions')


    const id = event.queryStringParameters.associatedObjectId
    const uri = `https://api.hubapi.com/deals/v1/deal/${id}?hapikey=${process.env.HAPI_KEY}`
        // need to make a call to https://api.hubapi.com/deals/v1/deal/1292767896?hapikey=61bce155-c17a-49aa-adab-e062ca9c13a3

    axios.put(uri, {
            body: JSON.stringify({
                "properties": [{
                    "name": "dealstage",
                    "value": "838999"
                }]
            })
        })
        .then((res) => {
            res.statusCode === 200 ?
                callback(null, {
                    statusCode: 200,
                    body: JSON.stringify({
                        "message": "Successful GET request"
                    })
                }) :
                callback(null, {
                    statusCode: 400,
                    body: JSON.stringify({
                        "message": "FAILURE"
                    })
                })
        })
}