const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {
  let role = "757929453623050371"
  if (!message.member.roles.find('id', role)) return message.channel.send('Bu Jutsuyu Kullanabilmek İçin <@&'+role+'> Kullanıcısı Olmalısın!'); {
}
    if (!message.guild) {
    const ozelmesajuyari = new Discord.RichEmbed()
    .setColor('WHİTE')
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Eğlence Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.sendEmbed(ozelmesajuyari); }
    if (message.channel.type !== 'dm') {
      const sunucubilgi = new Discord.RichEmbed()
    .setAuthor(message.author.username + " Fuuton Rasen Shuriken attı 40HP vurdu.")
    .setColor('WHİTE')
    .setTimestamp()
    .setDescription('')
        .setImage(`https://media.giphy.com/media/YD8BdrZl0aXpS/giphy.gif`)
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