const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const keep_alive = require('./keep_alive.js')
const lol = require('./config.json')
const server = require('./index.js')
const prefix = lol.prefix
const path = lol.path
const token = lol.token
const http = require('http')
const fs = require('fs')
const data = require('./data.json')
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", message => {
if (message.content.startsWith(prefix + "backup")) {
var zipdir = require('zip-dir');
var buffer = zipdir('lol');
zipdir(path);
zipdir(path, { saveTo: 'backup.zip' })
const stat = fs.statSync("backup.zip")
const size = stat.size
message.channel.send({
	embed: {
	color: 0x0099ff,
	title: "Finished!",
	fields: [
	{
		name: "Size:",
		value: size,
		inline: true,
	},
	{
		name: "Download",
		value: "[Download](http://localhost:3333/)",
		inline: true,
	}
	]
}
});
}
});
client.login(token);