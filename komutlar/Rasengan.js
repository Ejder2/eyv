const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {
  let role = "758419125667364875"
  if (!message.member.roles.find('id', role)) return message.channel.send('Bu Jutsuyu Kullanabilmek İçin <@&'+role+'> Olmalısın!'); {
}
    if (!message.guild) {
    const ozelmesajuyari = new Discord.RichEmbed()
    .setColor('BLUE')
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Eğlence Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.sendEmbed(ozelmesajuyari); }
    if (message.channel.type !== 'dm') {
      const sunucubilgi = new Discord.RichEmbed()
    .setAuthor(message.author.username + " Rasengan attı 40HP vurdu.")
    .setColor('BLUE')
    .setTimestamp()
    .setDescription('')
        .setImage(`https://media.tenor.com/images/ace9aee363b182b4d7e493215897ed53/tenor.gif`)
    return message.channel.send(sunucubilgi);
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['fuutonrasenshuriken', "FuutonRasenShuriken"],
  permLevel: 0
};

exports.help = {
  name: 'Fuuton-Rasen-Shuriken',
  description: 'Polisi Arar (ciddiye almayın)',
  usage: 'polisiara'
};