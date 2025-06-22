//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   𝗤𝗨𝗘𝗘𝗡-𝗔𝗡𝗝𝗨 𝗫ᴾᴿᴼ 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：5.0.0                                                       //
//
//
//░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ░█████╗░███╗░░██╗░░░░░██╗██╗░░░██╗  ██╗░░██╗██████╗░██████╗░░█████╗░
//██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░██║░░░░░██║██║░░░██║  ╚██╗██╔╝██╔══██╗██╔══██╗██╔══██╗
//██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔██╗██║░░░░░██║██║░░░██║  ░╚███╔╝░██████╔╝██████╔╝██║░░██║
//╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══██║██║╚████║██╗░░██║██║░░░██║  ░██╔██╗░██╔═══╝░██╔══██╗██║░░██║
//░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ██║░░██║██║░╚███║╚█████╔╝╚██████╔╝  ██╔╝╚██╗██║░░░░░██║░░██║╚█████╔╝
//░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░░╚═════╝░  ╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ
//  * @version      : 5.0
//  * @author       : Janith Rashmika
//  * @youtube      : https://www.youtube.com/@gamingrash2006
//  * @description  : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ, A Multi-functional WhatsApp bot created by Janith Rashmika.
//*
//*
//Base by Janith Rashmika
//GitHub: @Mrrashmika
//WhatsApp: +94717775628
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@gamingrash2006
//   * Created By GitHub: Mrrashmika
//   * Credit To Janith Rashmika
//   * © 2025 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ-V4.
// ⛥┌┤
// */

const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID:
    process.env.SESSION_ID ||
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUt6L0pyQTIxUnh0ZGgweElSZ2xEeklHMTdmTzRUMWloeFF5c0UvaEpFTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNXpQOUJOL05mYjBXUHFnZEFMYWRIbmUvaU9kYkhudnUrQTY1K29ZS0hqRT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTUER5blJEZUVXamxGRWwvUmxZTFlQTWhDQ3IweFlxK1JDK2cwR0p3NDB3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJSlh6TzBlMk9LMXJRWmZJTUpXYmZ1a0h1Y3FQSVlsZmFwR3BKdGtscFJFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZLdUx3bDArc3NJSUF4WGduUHV4UXFuajBJcUZJczZIYS85WlBXYk8xVVk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjQyb2c1eGRaRnhEWnpzd05jR1JjL21TSk1yTzJxWm9nZlg5QWxDNDQwek09In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0g5OXM5L0xEc2hSOVlaNjIxb3VFdzV2aVZYYmpRNktoTGdMQzkyQlZWVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTnpNSlRTYUtrMW5YUGUxTFdmNzRlWitLNnB6ejJsRS93bHpaQTRqS1dXND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdJOXpPOHh3a2x6eGlZSlJHY2t4UmhsMGV1QVQvV28rcHFMVW50cXlhUDJZVkFjcWE3Vnd1dURBYnB1QlBTUVNUNnpkZVdPaXplaERiTkc5c3J6MGdBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTYwLCJhZHZTZWNyZXRLZXkiOiJHRG9UNXd0bWxSY1Z0dzdKc1IwZ21WWkZxazZSMVVOQUdBaFZzR2x0SEFNPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJ5bHp6Q2xIVFJzdVI2T01oWElLMFNnIiwicGhvbmVJZCI6IjkyOTNhNDAxLWY0MGQtNGRiMS1hMzA5LWU0ZDVhOTQyOTk4ZCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0TTh5NnRDaElJaFd6SDAxMVhrYkF0bXJ4U2c9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMjVOYVc1Y2VkUFkwYWFoZjlLbWJZSEJTUElJPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6Ijg4RDU1TFQ0IiwibWUiOnsiaWQiOiI5NDcwMjE3NTM1MDoyM0BzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLwnZSw8J2UnvCdlLDwnZSl8J2UpvCdlKYgXCI6KSIsImxpZCI6IjExNjE2MjE4ODgzNzAyNDoyM0BsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0t5Z3l0QURFTjI1M3NJR0dBSWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Ik8wbWVrUzZoZGRlSVEybGJ5ZEJySmJwRUJHc3hYTlhYNnFkcmV3WXVXMEU9IiwiYWNjb3VudFNpZ25hdHVyZSI6Ii9jZjNKdzAyWlVTWUU1YW1LZG9WcUxDZXRTdE14UnZQUzY1S2g5TFZhUDJtZXNEcmd3NXZsbktZbXUyV1dndmszYlBrbk1iRjMvWWJvRkdWODZBNEFRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJISnFScFlUd3ZZOEkxLzMwZE13QUQwbGNzTHNNVEhuWHpsbjI1dElvTFpnbXhRdzk4aU96ZlZzeXBYTnhCZnFrWEV0azlHS1RBNEg3ZmRqcnI3dlVpQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0NzAyMTc1MzUwOjIzQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlR0Sm5wRXVvWFhYaUVOcFc4blFheVc2UkFSck1WelYxK3FuYTNzR0xsdEIifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBa0lCUT09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1MDU3MjI2NiwibGFzdFByb3BIYXNoIjoiMUs0aEg0In0=",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "+940702175350",
  PASSWORD: 
    process.env.PASSWORD || "Bot1234",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94717775628", "94758775628"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};
