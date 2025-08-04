require('dotenv').config();
const { Client, IntentsBitField } = require('discord.js');
const mongoose = require('mongoose');
const eventHandler = require('./handlers/eventHandler');

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});

let status = [
  {
    name: 'Zppqr',
    type: ActivityType.Streaming,
    url: 'https://www.youtube.com/@zppqrr',
  },
  {
    name: 'Custom Status 1',
  },
  {
    name: 'Custom Status 2',
    type: ActivityType.Watching,
  },
  {
    name: 'Custom Status 3',
    type: ActivityType.Listening,
  },
];

(async () => {
  try {
    mongoose.set('strictQuery', false);
    await mongoose.connect(process.env.MONGODB_URI, { keepAlive: true });
    console.log('Connected to DB.');

    eventHandler(client);
  } catch (error) {
    console.log(`Error: ${error}`);
  }
})();

client.login(process.env.TOKEN);
