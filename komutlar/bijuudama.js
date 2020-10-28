const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {
  let role = "758418617963511819"
  if (!message.member.roles.find('id', role)) return message.channel.send('Bu Jutsuyu Kullanabilmek İçin <@&'+role+'> Olmalısın!'); {
}
    if (!message.guild) {
    const ozelmesajuyari = new Discord.RichEmbed()
    .setColor('BLACK')
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Eğlence Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.sendEmbed(ozelmesajuyari); }
    if (message.channel.type !== 'dm') {
      const sunucubilgi = new Discord.RichEmbed()
    .setAuthor(message.author.username + " Bijuu Dama attı 100HP vurdu.")
    .setColor('BLACK')
    .setTimestamp()
    .setDescription('')
        .setImage(`https://i.makeagif.com/media/12-26-2013/AIpNq8.gif`)
    return message.channel.send(sunucubilgi);
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['Bijuu-Dama', "bijuudama"],
  permLevel: 0
};

exports.help = {
  name: 'BijuuDama',
  description: 'Polisi Arar (ciddiye almayın)',
  usage: 'polisiara'
};