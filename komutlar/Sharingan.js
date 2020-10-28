const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {
  let role = "757930581588705341"
  if (!message.member.roles.find('id', role)) return message.channel.send('Bu Doujutsuyu Kullanabilmek İçin <@&'+role+'> A Sahip Olmalısın!'); {
}
    if (!message.guild) {
    const ozelmesajuyari = new Discord.RichEmbed()
    .setColor('RED')
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Eğlence Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.sendEmbed(ozelmesajuyari); }
    if (message.channel.type !== 'dm') {
      const sunucubilgi = new Discord.RichEmbed()
    .setAuthor(message.author.username + " Sharingan'ı açdı.")
    .setColor('RED')
    .setTimestamp()
    .setDescription('')
        .setImage(`https://cdn.discordapp.com/attachments/719084333880705074/719580980045938788/fa75e3a5714192a840c3ebc121952e45.gif`)
    return message.channel.send(sunucubilgi);
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['sharingan'],
  permLevel: 0
};

exports.help = {
  name: 'Sharingan',
  description: 'Polisi Arar (ciddiye almayın)',
  usage: 'polisiara'
};