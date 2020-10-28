const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {
  let role = "757930404320772148"
  if (!message.member.roles.find('id', role)) return message.channel.send('Bu Doujutsuyu Kullanabilmek İçin <@&'+role+'> a Sahip Olmalısın!'); {
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
    .setAuthor(message.author.username + " Byakugan'ı açdı.")
    .setColor('WHİTE')
    .setTimestamp()
    .setDescription('')
        .setImage(`https://cdn.discordapp.com/attachments/703295587843571822/729677839577776128/200.gif`)
    return message.channel.send(sunucubilgi);
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['byakugan'],
  permLevel: 0
};

exports.help = {
  name: 'Byakugan',
  description: 'Polisi Arar (ciddiye almayın)',
  usage: 'polisiara'
};