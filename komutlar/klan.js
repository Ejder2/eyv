const Discord = require('discord.js');



var klan = [
  "Uchiha",
  "Uzumaki",
  "Hyuga",
  "Namikaze",
  "Hatake",
  "Sarutobi",
  "Outsuki",
  "Senju"
];

module.exports.run = async (bot, message, args) => {
  message.channel.send(message.author.toString() + " Klan : " + (klan[Math.floor(Math.random() * klan.length)]));
  message.member.addRole('763684295565901824');
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["Klan"],
  permLevel: 0
};

exports.help = {
  name: 'klan',
  kategori: 'eğlence',
  description: 'Rastgele Klan belirler',
  usage: 'klan'
};

