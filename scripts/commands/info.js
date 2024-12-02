module.exports.config = {
    name: "admin",
    version: "1.0.0",
    permission: 0,
    credits: "nayan",
    prefix: true,
    description: "",
    category: "prefix",
    usages: "",
    cooldowns: 5,
    dependencies: 
	{
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};
module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
const time = process.uptime(),
		hours = Math.floor(time / (60 * 60)),
		minutes = Math.floor((time % (60 * 60)) / 60),
		seconds = Math.floor(time % 60);
const moment = require("moment-timezone");
var juswa = moment.tz("Asia/Dhaka").format("『D/MM/YYYY』 【hh:mm:ss】");
  
var callback = () => api.sendMessage({body:`
--------------------------------------------
𝐍𝐚𝐦𝐞       : 𝐌𝐨𝐡𝐚𝐦𝐦𝐚𝐝 𝐒𝐚𝐤𝐢𝐛
𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 : 𝐒 𝐀 𝐊 𝐈 𝐁 ツ
𝐑𝐞𝐥𝐢𝐠𝐢𝐨𝐧   : 𝐈𝐬𝐥𝐚𝐦
𝐏𝐞𝐫𝐦𝐚𝐧𝐞𝐧𝐭 𝐀𝐝𝐝𝐫𝐞𝐬𝐬: 𝐔𝐥𝐥𝐚𝐩𝐚𝐫𝐚, 𝐒𝐢𝐫𝐚𝐣𝐠𝐚𝐧𝐣, 𝐁𝐚𝐧𝐠𝐥𝐚𝐝𝐞𝐬𝐡.
𝐂𝐮𝐫𝐫𝐞𝐧𝐭 𝐀𝐝𝐝𝐫𝐞𝐬𝐬: 𝐔𝐥𝐥𝐚𝐩𝐚𝐫𝐚, 𝐒𝐢𝐫𝐚𝐣𝐠𝐚𝐧𝐣, 𝐁𝐚𝐧𝐠𝐥𝐚𝐝𝐞𝐬𝐡.
𝐆𝐞𝐧𝐝𝐞𝐫.   : 𝐌𝐚𝐥𝐞
𝐀𝐠𝐞           : 𝟏𝟖+
𝐑𝐞𝐥𝐚𝐭𝐢𝐨𝐧𝐬𝐡𝐢𝐩 : 𝐒𝐢𝐧𝐠𝐥𝐞
𝐖𝐨𝐫𝐤        : 𝐒𝐭𝐮𝐝𝐞𝐧𝐭
𝐆𝐦𝐚𝐢𝐥       : torbapsakibbro@gmail.com
𝐖𝐡𝐚𝐭𝐬𝐀𝐩𝐩: wa.me/+8801765051219
𝐓𝐞𝐥𝐞𝐠𝐫𝐚𝐦  : t.me/SecondJohnnySins
𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐋𝐢𝐧𝐤 : https://www.facebook.com/2ndJohnnySins`,attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID, () => 
    fs.unlinkSync(__dirname + "/cache/1.png"));  
      return request(encodeURI(`https://scontent.fdac20-1.fna.fbcdn.net/v/t39.30808-6/469187779_872090618468063_7724636613957278083_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEzefPr1hNPKTyqfvi1gmnrH3KkphMSHugfcqSmExIe6L_1q3V0oaCSb_EC8YVbzh34gvKZGk_xoZfwb0YdZNuv&_nc_ohc=-BoEh5c9upEQ7kNvgHlUKje&_nc_zt=23&_nc_ht=scontent.fdac20-1.fna&_nc_gid=AvdQN_cD7sb3IMHnhKfCtqq&oh=00_AYBA7t1XyUTFFHuKSegSEOn3W77N7I5yUUzk9_byZBP_7Q&oe=67539E7B`)).pipe(
fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());
   };
