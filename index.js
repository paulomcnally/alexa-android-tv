/* eslint-disable no-console */
const Webhook = require('jovo-framework').WebhookVerified;
const { app } = require('./app/app.js');

if (app.isWebhook()) {
  const port = process.env.PORT || 3000;
  Webhook.listen(port, () => {
    console.log(`Example server listening on port ${port}!`);
  });
  Webhook.post('/webhook', (req, res) => {
    app.handleWebhook(req, res);
  });
}

exports.handler = (event, context, callback) => {
  app.handleLambda(event, context, callback);
};
