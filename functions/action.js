const axios = require("axios");

exports.handler = function(event, context, callback) {
  const id = event.queryStringParameters.associatedObjectId;
  const uri = `https://api.hubapi.com/deals/v1/deal/${id}?hapikey=${process.env.HAPI_KEY}`;

  console.log(`youre in lambda /actions, ${uri}`);

<<<<<<< HEAD
  axios({
    url: uri,
    method: "put",
    headers: {
      "Content-Type": "application/json"
    },
    data: {
      properties: [
        {
          name: "dealstage",
          value: "838999"
        }
      ]
    }
  })
    .then(res => {
      res.statusCode === 200
        ? callback(null, {
            statusCode: 200,
            body: JSON.stringify({
              message: "Successful GET request"
            })
          })
        : callback(null, {
            statusCode: 400,
            body: JSON.stringify({
              message: "FAILURE"
            })
          });
    })
    .catch(err => console.log(err));
};
=======

    const id = event.queryStringParameters.associatedObjectId
    const uri = `https://api.hubapi.com/deals/v1/deal/${id}?hapikey=${process.env.HAPI_KEY}`

    console.log(`youre in lambda /actions, ${uri}`)

    axios({
            url: uri,
            method: "put",
            headers: {
                "Content-Type": "application/json"
            },
            data: {
                properties: [{
                    name: "dealstage",
                    value: "838999"
                }]
            }
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
        .catch(err => console.log(err))
}
>>>>>>> f7e5b89d6f37385ec34ef07ad0c555b10aae4679
