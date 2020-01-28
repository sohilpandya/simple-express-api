exports.handler = function(event, context, callback) {

    console.log('youre in lambda /actions')

    console.log({ params: event.queryStringParameters, event })
    callback(null, {
        statusCode: 200,
        body: 'In Actions!'
    });
}