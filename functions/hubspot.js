exports.handler = function(event, context, callback) {

    console.log('youre in lambda ')
    callback(null, {
        statusCode: 200,
        body: JSON.stringify({
            "results": [{
                "objectId": 245,
                "title": "API-22: APIs working too fast",
                "link": "http://example.com/1",
                "created": "2016-09-15",
                "priority": "HIGH",
                "project": "API",
                "reported_by": "msmith@hubspot.com",
                "description": "Customer reported that the APIs are just running too fast. This is causing a problem in that they're so happy.",
                "reporter_type": "Account Manager",
                "status": "In Progress",
                "ticket_type": "Bug",
                "updated": "2016-09-28",
                "actions": []
            }]
        })
    });
}