
const Discord = require('discord.js');
const db = require("wio.db")

exports.run = async(client, message, args) => {

let pingmesaj;
let pingdurum;

let mesaj;
  let mesajdurum;
if(Date.now() - message.createdAt < 100){
mesaj = ":red_circle:"
mesajdurum = "#ff0000"
}
if(Date.now() - message.createdAt < 60){
mesaj = ":yellow_circle:"
mesajdurum = "#ffff00"
}
if(Date.now() - message.createdAt < 30){
mesaj = ":green_circle: "
mesajdurum = "#66ff00"
}
if(Date.now() - message.createdAt > 100){
mesaj = ":red_circle:"
mesajdurum = "#ff0000"
}

if(Date.now() - message.createdAt > 60){
mesaj = ":yellow_circle:"
mesajdurum = "#ffff00"
}
if(Date.now() - message.createdAt > 150){
mesaj = ":red_circle:"
mesajdurum = "#ff0000"
}
if(Date.now() - message.createdAt > 250){
mesaj = ":red_circle:"
mesajdurum = "#ff0000"
}
if(Date.now() - message.createdAt > 500){
mesaj = ":white_circle: "
mesajdurum = "#66ff00"
}
if(Date.now() - message.createdAt > 1000){
mesaj = ":white_circle: "
mesajdurum = "#66ff00"
}
/*for(var emojilers in client.emojiler){
let emojis = client.emojis.get(emojilers)
}*/
if(client.ping < 100){
pingmesaj = ":red_circle:"
pingdurum = "#ff0000"
}
if(client.ping < 60){
pingmesaj = ":yellow_circle:"
pingdurum = "#ffff00"
}
if(client.ping < 30){
pingmesaj = ":green_circle: "
pingdurum = "#66ff00"
}
if(client.ping > 100){
pingmesaj = ":red_circle:"
pingdurum = "#ff0000"
}

if(client.ping > 60){
pingmesaj = ":yellow_circle:"
pingdurum = "#ffff00"
}
if(client.ping > 150){
pingmesaj = ":red_circle:"
pingdurum = "#ff0000"
}
if(client.ping > 250){
pingmesaj = ":red_circle:"
pingdurum = "#ff0000"
}
if(client.ping > 500){
pingmesaj = ":white_circle: "
pingdurum = "#66ff00"
}
if(client.ping > 1000){
pingmesaj = ":white_circle: "
pingdurum = "#66ff00"
}
const embed = new Discord.RichEmbed()
.setAuthor(message.author.username + " Adlı kullanıcı tarafından istendi.",message.author.avatarURL)
.setThumbnail(client.user.avatarURL)
.setDescription(`Gecikme: ${client.ping.toFixed(2)+ "ms"} ${pingmesaj}\n\nMesaj Gecikmesi: ${(Date.now() - message.createdAt).toFixed(2)+ "ms"} ${mesaj}`)
.setColor(pingdurum)
.setFooter(client.user.username, client.user.avatarURL)
message.channel.send(embed)

}


  

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'ping',
};