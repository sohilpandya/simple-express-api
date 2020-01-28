exports.handler = function(event, context, callback) {

    console.log('youre in lambda ')

    console.log({ params: event.queryStringParameters, event })
    callback(null, {
        statusCode: 200,
        body: JSON.stringify({
            "results": [{
                "objectId": 245,
                "title": `${event.queryStringParameters.dealname}`,
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
                "actions": [{
                    "type": "CONFIRMATION_ACTION_HOOK",
                    "httpMethod": "GET",
                    "uri": "https://hopeful-golick-30e6f5.netlify.com/.netlify/functions/action",
                    "label": "Example action",
                    "confirmationMessage": "Are you sure you want to run example action?",
                    "confirmButtonText": "Yes",
                    "cancelButtonText": "No"
                }]
            }]
        })
    });
}