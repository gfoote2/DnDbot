const Discord = require("discord.js");

const client = new Discord.Client();

const config = require("./config.json");

const text = require("./text.json");


let spell = new Map();

spell.set("acid splash", text.acidsplash);


client.on("message", (message) => {

  if (!message.author.bot){

    for (let inquiry of spell.keys()){
      if (message.content.toLowerCase().startsWith("!find " + inquiry)){
        message.channel.send(spell.get(inquiry));
      }
}
}
});



client.login(config.token);
