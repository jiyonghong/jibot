// index.js

'use strict';

const JiBot = require('./lib/bot');

if (!process.env.JIBOT_ENV_TOKEN) {
  console.error('You have to set env variable JIBOT_ENV_TOKEN');
  process.exit(1);
}

const token = process.env.JIBOT_ENV_TOKEN;
const name = 'jibot';

let bot = new JiBot({
  token: token,
  name: name
});

bot.run();
