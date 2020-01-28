exports.handler = function(event, context, callback) {
    callback(null, {
        statusCode: 200,
        body: {
            "results": {
                "applicationId": 211393,
                "title": "Testing Hubspot Sandbox App",
                "associatedHubSpotObjectTypes": [
                    "DEAL"
                ],
            },
        }
    });
}