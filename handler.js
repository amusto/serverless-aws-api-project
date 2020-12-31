'use strict';

module.exports.hello = async event => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless v1.0! Your function executed successfully!',
        input: event,
      },
      null,
      2
    ),
  };
};

module.exports.cfc = async event => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless v1.0! Your CFC function executed successfully! Shane, in this case we are actually returning values from a AWS Lambda function but the API route could just as easily be pointed to a CFC hosted on a CF Server as a Rest API or Web Service I suppose.',
        input: event,
      },
      null,
      2
    ),
  };
};
