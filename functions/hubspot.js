exports.handler = function(event, context, callback) {

    console.log('youre in lambda ')
    callback(null, {
        statusCode: 200,
        body: JSON.stringify({
            "results": {
                "applicationId": 211393,
                "title": "Testing Hubspot Sandbox App",
                "associatedHubSpotObjectTypes": [
                    "DEAL"
                ],
            },
        })
    });
}