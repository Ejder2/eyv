const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {
  let role = "757931477706080347"
  if (!message.member.roles.find('id', role)) return message.channel.send('Bu Jutsuyu Kullanabilmek İçin <@&'+role+'> A Sahip Olmalısın!'); {
}
    if (!message.guild) {
    const ozelmesajuyari = new Discord.RichEmbed()
    .setColor('PURPLE')
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Eğlence Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.sendEmbed(ozelmesajuyari); }
    if (message.channel.type !== 'dm') {
      const sunucubilgi = new Discord.RichEmbed()
    .setAuthor(message.author.username + " Chibaku Tensei attı 30hp vurdu.")
    .setColor('PURPLE')
    .setTimestamp()
    .setDescription('')
        .setImage(`https://thumbs.gfycat.com/AcrobaticWholeLarva-max-1mb.gif`)
    return message.channel.send(sunucubilgi);
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['chibakutensei'],
  permLevel: 0
};

exports.help = {
  name: 'Chibaku-Tensei',
  description: 'Polisi Arar (ciddiye almayın)',
  usage: 'polisiara'
};