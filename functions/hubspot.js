const axios = require("axios");
const _ = require("lodash");

exports.handler = function(event, context, callback) {
    console.log("youre in lambda ");

    const { pipeline, dealname, dealstage } = event.queryStringParameters;
    const pipelineURI = `https://api.hubapi.com/crm-pipelines/v1/pipelines/deals?hapikey=${process.env.HAPI_KEY}`;
    const getPipelineStages = axios.get(pipelineURI).then(res => {
        console.log({ res: res.data.results, pipeline, dealname, dealstage });

        const currentPipeline = res.data.results.filter((i) => i.label === pipeline)[0]

        console.log(currentPipeline)
        return callback(null, {
            statusCode: 200,
            body: JSON.stringify({
                results: [{
                    objectId: 245,
                    title: `${event.queryStringParameters.dealname}`,
                    link: "http://example.com/1",
                    created: "2016-09-15",
                    priority: "HIGH",
                    project: "API",
                    reported_by: "msmith@hubspot.com",
                    description: "Customer reported that the APIs are just running too fast. This is causing a problem in that they're so happy.",
                    reporter_type: "Account Manager",
                    status: "In Progress",
                    ticket_type: "Bug",
                    updated: "2016-09-28",
                    actions: [{
                            type: "CONFIRMATION_ACTION_HOOK",
                            httpMethod: "GET",
                            uri: "https://hopeful-golick-30e6f5.netlify.com/.netlify/functions/action",
                            label: "Move To Next Stage",
                            associatedObjectProperties: [
                                "dealname",
                                "dealstage",
                                "hs_object_id"
                            ],
                            confirmationMessage: "Are you sure you want to run example action?",
                            confirmButtonText: "Yes",
                            cancelButtonText: "No"
                        },
                        {
                            type: "IFRAME",
                            width: 890,
                            height: 748,
                            uri: "https://example.com/iframe-contents",
                            label: "Test iFrame",
                            associatedObjectProperties: []
                        }
                    ]
                }],
                primaryAction: {
                    type: "IFRAME",
                    width: 890,
                    height: 748,
                    uri: "https://bat-staging.trussle.com/application/87c6b07f-97e8-44a4-bf40-19c5e28e7e84",
                    label: "Submission"
                },
                secondaryActions: [{
                    type: "IFRAME",
                    width: 890,
                    height: 748,
                    uri: "https://bat-staging.trussle.com/edit/87c6b07f-97e8-44a4-bf40-19c5e28e7e84",
                    label: "Edit Customer Data"
                }]
            })
        });
    });
};