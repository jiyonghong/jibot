// bot.js

'use strict';

const fs = require('fs');
const path = require('path');

// const SQLite = require('sqlite3').verbose();
const Bot = require('slackbots');

class JiBot extends Bot {
  constructor(settings) {
    super(settings);
    this.settings = settings;
    this.settings.name = this.settings.name || 'jibot';

    this.user = null;
    this.db = null;
  }

  run() {
    this.on('start', this._onStart);
    this.on('message', this._onMessage);
  }

  _onStart() {
    this._loadBotUser();
  }

  _loadBotUser() {
    this.user = this.users.filter(user => user.name === this.name)[0];
  }

  _onMessage(message) {
    switch(message.type) {
      case 'message':
        this._sendMessage(message);
      case 'user_typing':
      default:
        break;
    }
  }

  _getChannelById(channelId) {
    return this.channels.filter(item => item.id === channelId)[0];
  }

  _getUserByName(name) {
    return this.users.filter(user => user.name === name)[0];
  }

  _sendMessage(message) {
    if (message.user === 'U0FJK29FW' || message.text.indexOf('U0FJK29FW') > -1) {
      let channel = this._getChannelById(message.channel);
      if (random(20)) {
        this.postMessageToChannel(channel.name, '장준하는 천하에서 제일 나쁜 놈입니다.');
      }
    }
  }
}

function random(rate) {
  return Math.floor(Math.random() * rate) + 1 === Math.floor(Math.random() * rate) + 1;
}

module.exports = JiBot;
