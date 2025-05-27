//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "frediezra60@gmail.com";
global.location = "Nairobi,KENYA.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Dar es salaam";
global.github = process.env.GITHUB || "https://github.com/Frecyber/Frecyber-md";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaihcQv84Om8LP59fO3f";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaihcQv84Om8LP59fO3f";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/1d4a42b28790d0f7a7195.jpg";
global.devs = "254758443111";
global.sudo = process.env.SUDO || "254778620961";
global.owner = process.env.OWNER_NUMBER || "254758443111";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "composing";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://rb.gy/3keql8";

global.SESSION_ID =
  process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkY2dG9DNEQwamtSOC8waEZVMkkwc1hLVGxuOHpSM2J4UDU5N3JMaHlFWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZE1jQnJnNGtnWFFqMkZqY3l2c2d1emRUS2c2ZUZhNDNnV25tQjYvWEtWYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVSm14NEFJZUV5RVhDdFg0MTFhWDc3R2ZVTWRDblMwYW1yV1ZLdXphN0g0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFME8rYW5Tamcvcm5OaGVaTmdKb3IzUmNndlU5ajlzZmZFdW8rejhLc3kwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNHTXJPeVhENFdmNkpCOTlrU1l3N3FGbFBUazJKdDROVno4L1FmVWEybUE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImJEeWx3T3BydW0weWF2VHExTEZyUXVqanNPMUMxYzg0SDl0RTZjQWE0Unc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUhFN1gvYXFENUk5eEdxc2llaEQ3THorWExYanJZTXEyQXRDZWFrT0xYdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieEJ2emh5U1JjSG4wdy9kUlRsRTFKY1B6TTh5UzRKbzhYdzRDQUZNWGNWMD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldaR1h3NEJxWVB4Y1YxWlZVbUx1Qm95VUhrSXUyYW5sZFNrdTl4dzdvV1FZRlF2Tmg1Yk16TVdZSitFeTZkMStLa29DOTJOTjlROVdmZ3J4d0F5c2hnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MzEsImFkdlNlY3JldEtleSI6Im8vNHV6TC81WGt2WGhSamd6NXM3aVFFNzlsYnlDUjZ6VG1ZNnRGVnB2UkE9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjU0NzU4NDQzMTExQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjUyRDMxOEZDQkVFNUVDMjJBQzc5OTk3NzM0MjkwOEU5In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NDgzMjIyNTV9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IkE4MlF2WjN5U2l5Zmg0MnhsV1hxWWciLCJwaG9uZUlkIjoiYmJjOGIyYjItZWNkNy00YTRjLWIwMDUtMGI1YWQ3ZTI3M2U5IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJtWWN1dXFaMmdMQ3ZtTVNLM1VqWkkvM1UwOD0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJIS2pieG1CZzFpYjZROWppeHQ4cy9iU3E2OXM9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiRlJFREVaUkEiLCJtZSI6eyJpZCI6IjI1NDc1ODQ0MzExMTozM0BzLndoYXRzYXBwLm5ldCIsImxpZCI6IjExNzQ4MDgyNzY1ODI1MDozM0BsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ01MUjhva0VFTCtQMWNFR0dCZ2dBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IjhSN0JnS3hidk9ON0dualNWWFJjTnNFM0N6Q0ZsMWhnbWQ1OE9Ha3pSbGM9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkdxSTJJeDByNENQWUxVSlE2eGlISG5hVDB4YTI4VVk0OERkdHRRc2tVY0F2K2FOSVZjWm5qRUJUSGg1Q0RONzhCcythQXhIOTZFeGJOTHArWVQzQ0FBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiIrWVRSNGJmYStabHJ3TEtSVWQ3YTA2REZtZi9JMHArRVlYRUlxSGk0QzJyYlFySkFJMFN5ZlJ4OEhyTlFPcVEwdmNuTDVuVGk4d0w1R1A4akU1U2lpZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI1NDc1ODQ0MzExMTozM0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJmRWV3WUNzVzd6amV4cDQwbFYwWERiQk53c3doWmRZWUpuZWZEaHBNMFpYIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQVVJRWc9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NDgzMjIyNTIsImxhc3RQcm9wSGFzaCI6IjJWNzdxVSIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBTDg3In0="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || "/",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "✞︎★Ꭿ☼︎ℒ☼︎ℒ✩ℰ✫ℕ♫☠︎︎ I༙S༙ W༙A༙T༙C༙H༙I༙N༙G༙ Y༙O༙YU༙ 👀",
  author: process.env.PACK_AUTHER || "✞︎★Ꭿ☼︎ℒ☼︎ℒ✩ℰ✫ℕ♫☠︎︎",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "FRECYBER-𝐌𝐃",
  ownername: process.env.OWNER_NAME || "✞︎★Ꭿ☼︎ℒ☼︎ℒ✩ℰ✫ℕ♫☠︎︎",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-MLNkacQOWsMSwtBZZf0XT3BlbkFJqfgJYOOkiikW5Y4ynpM5",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "FRECYBER").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
