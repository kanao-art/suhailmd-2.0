const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "true"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_02_36_12_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAyMTYsXG4gICAgICAgIDczLFxuICAgICAgICAxMyxcbiAgICAgICAgMTA1LFxuICAgICAgICAzMCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMDAsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTgzLFxuICAgICAgICAxMzQsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTc4LFxuICAgICAgICA2NixcbiAgICAgICAgOTQsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNzAsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjIsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTQ5LFxuICAgICAgICA1OCxcbiAgICAgICAgNjgsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTc1LFxuICAgICAgICA4MCxcbiAgICAgICAgNCxcbiAgICAgICAgMzUsXG4gICAgICAgIDg5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTM5LFxuICAgICAgICAyNDEsXG4gICAgICAgIDM5LFxuICAgICAgICAxMCxcbiAgICAgICAgODgsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTM3LFxuICAgICAgICA5MCxcbiAgICAgICAgNDUsXG4gICAgICAgIDksXG4gICAgICAgIDExOCxcbiAgICAgICAgMTA0LFxuICAgICAgICA1MixcbiAgICAgICAgNTgsXG4gICAgICAgIDcyLFxuICAgICAgICAxNjcsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxODMsXG4gICAgICAgIDM4LFxuICAgICAgICAyMyxcbiAgICAgICAgMjE2LFxuICAgICAgICAyNDYsXG4gICAgICAgIDQ4LFxuICAgICAgICAzMixcbiAgICAgICAgMTQwLFxuICAgICAgICA4MCxcbiAgICAgICAgNjEsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMTYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTMwLFxuICAgICAgICAzLFxuICAgICAgICAyNDQsXG4gICAgICAgIDExNixcbiAgICAgICAgMjgsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTE4LFxuICAgICAgICA3NixcbiAgICAgICAgMjUxLFxuICAgICAgICA3MixcbiAgICAgICAgNixcbiAgICAgICAgMSxcbiAgICAgICAgMTQ4LFxuICAgICAgICA5NSxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMzUsXG4gICAgICAgIDc5LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTY1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDY0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDg4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMDUsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjMsXG4gICAgICAgIDYsXG4gICAgICAgIDI3LFxuICAgICAgICA3LFxuICAgICAgICA4NCxcbiAgICAgICAgMTk2LFxuICAgICAgICA0MyxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNDQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTYsXG4gICAgICAgIDg2LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjQwLFxuICAgICAgICAxOTgsXG4gICAgICAgIDkzLFxuICAgICAgICA2NCxcbiAgICAgICAgNTUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjEwLFxuICAgICAgICA3OSxcbiAgICAgICAgNTEsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNTAsXG4gICAgICAgIDY5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NixcbiAgICAgICAgMjUxLFxuICAgICAgICAyMTIsXG4gICAgICAgIDcyLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE1MixcbiAgICAgICAgNDMsXG4gICAgICAgIDY0LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMTcsXG4gICAgICAgIDIzMixcbiAgICAgICAgNzQsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTMsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNDQsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMDQsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTExLFxuICAgICAgICAxMjksXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTgsXG4gICAgICAgIDIyNSxcbiAgICAgICAgOCxcbiAgICAgICAgNjhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTksXG4gICAgICAgIDk0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTg4LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE5LFxuICAgICAgICAxMCxcbiAgICAgICAgMTU1LFxuICAgICAgICA5MyxcbiAgICAgICAgMTAxLFxuICAgICAgICA1NyxcbiAgICAgICAgMTE3LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNzUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgOCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTksXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgOTIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMzQsXG4gICAgICAgIDEwMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxMjFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgNDVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2LFxuICAgICAgICAxNDAsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTQsXG4gICAgICAgIDE4NixcbiAgICAgICAgMyxcbiAgICAgICAgMTEyLFxuICAgICAgICA2NCxcbiAgICAgICAgNTEsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNjMsXG4gICAgICAgIDQ3LFxuICAgICAgICA1MCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTU1LFxuICAgICAgICA1LFxuICAgICAgICA5MyxcbiAgICAgICAgMjEyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDQwLFxuICAgICAgICAxNzcsXG4gICAgICAgIDk2LFxuICAgICAgICAxMSxcbiAgICAgICAgODcsXG4gICAgICAgIDUsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTUsXG4gICAgICAgIDMyLFxuICAgICAgICA1MSxcbiAgICAgICAgOTgsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMjksXG4gICAgICAgIDE4OSxcbiAgICAgICAgOTAsXG4gICAgICAgIDYsXG4gICAgICAgIDQwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDg0LFxuICAgICAgICAxMTcsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNixcbiAgICAgICAgMjEwLFxuICAgICAgICA2OCxcbiAgICAgICAgNzUsXG4gICAgICAgIDE5MSxcbiAgICAgICAgOTksXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTY3LFxuICAgICAgICA5NyxcbiAgICAgICAgOSxcbiAgICAgICAgMTAsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNixcbiAgICAgICAgMTEsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDMyLFxuICAgICAgICAyMDQsXG4gICAgICAgIDM1LFxuICAgICAgICAxNDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDg1LFxuICBcImFkdlNlY3JldEtleVwiOiBcIjVRRXRpUi9LM1pQZlJCL1o3OW1BUy9SYnFBanVwbXlzRlhZREpnYXB4ZUE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjRSYXgzdTRiUmZTOURqR3FpMl9sVmdcIixcbiAgXCJwaG9uZUlkXCI6IFwiMzFiNTUyODQtYjJiMS00Mjc3LWI3NzgtZmQ1N2RkYjYyMTYzXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDk1LFxuICAgICAgMTIzLFxuICAgICAgMTU3LFxuICAgICAgMTk0LFxuICAgICAgMyxcbiAgICAgIDE1NCxcbiAgICAgIDE4MixcbiAgICAgIDcyLFxuICAgICAgMTE4LFxuICAgICAgNixcbiAgICAgIDEwMCxcbiAgICAgIDk2LFxuICAgICAgMjI5LFxuICAgICAgMTAxLFxuICAgICAgMTksXG4gICAgICA2NCxcbiAgICAgIDExMSxcbiAgICAgIDE4NCxcbiAgICAgIDE3LFxuICAgICAgNjBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIyMSxcbiAgICAgIDI0NixcbiAgICAgIDE0NSxcbiAgICAgIDE3MSxcbiAgICAgIDUsXG4gICAgICA1MCxcbiAgICAgIDEwNixcbiAgICAgIDIwNixcbiAgICAgIDIxMixcbiAgICAgIDUzLFxuICAgICAgMjUxLFxuICAgICAgMTMsXG4gICAgICAxMTMsXG4gICAgICAzMSxcbiAgICAgIDg0LFxuICAgICAgOTUsXG4gICAgICAzMCxcbiAgICAgIDQ2LFxuICAgICAgMTM2LFxuICAgICAgMjE5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTXVBb1M0UXBzaTl1d1lZQ2lBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJxQXpiQjVacGorcU1PN0E5eXR3MXNSWUlPell3UElKZzNSNXB2R2k2MkhZPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlovVzgvc1EyZU1SOHNpTVk1MDRVanlnY3JidnR6b0plbWowdy9tcldDaTdaNjNYZEdMRjhCSEtFUGRQanFBTDZWbmx2MWdSZkJlS3Q3ZzdNT3VsQWpnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInRwbEJ6eWxKL3pacG5MUmMvQTRkVHNqWldpTVRzMFE1ZWtoNFErcktyY1RFU0RWREJBbWpHVDR1RFBjT0pWY0xVUXRPczFveGtwRmNxVkd5MlBIYmh3PT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiNTA5MzM2NDI3NjA6MTdAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE0MTU0MTIwMDg4NzkwMzoxN0BsaWRcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjUwOTMzNjQyNzYwOjE3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDExOFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiaXBob25lXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzUzNTMzODYsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFFYlVcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUViSi5qc29uIjogIntcImtleURhdGFcIjpcImpQMEdsdzJLOHJUSFJGVHEzWTEvUHJzZW0vSSt2cXRvd1BlbkJJRUprdWc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6OTcwMDk3MzksXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlsxLDBdfSxcInRpbWVzdGFtcFwiOlwiMTczMjg4OTAzNjY3NVwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUViSy5qc29uIjogIntcImtleURhdGFcIjpcIktPREJVcjFGTjdUdktIWGJBWmxraS9KdVJuQ3YzVkh6eURsaEE2MHcvMFk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6OTcwMDk3MzksXCJjdXJyZW50SW5kZXhcIjoyLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTczMjg5MDg4OTM2NVwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUViTC5qc29uIjogIntcImtleURhdGFcIjpcIldpVnBJQy9pL0hPSXg2SWdQbm9uTk84bGFNTEpWUXJvbm4zSUhxeVN0Zzg9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6OTcwMDk3MzksXCJjdXJyZW50SW5kZXhcIjozLFwiZGV2aWNlSW5kZXhlc1wiOlsxLDBdfSxcInRpbWVzdGFtcFwiOlwiMTczMjg5MTI4Mzk4NlwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUViTS5qc29uIjogIntcImtleURhdGFcIjpcImZhaTdIaS80Zm9nVzNYMkVRaXI1SVBMeU9qc2lFYTdqVnJDRXJ6b3d1ZlU9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6OTcwMDk3MzksXCJjdXJyZW50SW5kZXhcIjo0LFwiZGV2aWNlSW5kZXhlc1wiOlsxLDBdfSxcInRpbWVzdGFtcFwiOlwiMTczMjg5MTU1Njc0NFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUViTi5qc29uIjogIntcImtleURhdGFcIjpcImtSVDMyOVBya3Z0S1RSb1p5dEoxdC9mY2k2RStBZzhDMkhTYjAxN2N5eW89XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6OTcwMDk3MzksXCJjdXJyZW50SW5kZXhcIjo2LFwiZGV2aWNlSW5kZXhlc1wiOlswLDUsMV19LFwidGltZXN0YW1wXCI6XCIxNzMyODkyMjAwMDU0XCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRWJPLmpzb24iOiAie1wia2V5RGF0YVwiOlwiaVZ4a0I5NEswZUJWditZWkxUcUozZytWM2tkTkhYWlZjTzFhVEZVY3V1WT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo5NzAwOTczOSxcImN1cnJlbnRJbmRleFwiOjcsXCJkZXZpY2VJbmRleGVzXCI6WzAsNywxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzI5MDM3MjExODZcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFFYlEuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJxNmFOejZIdDVMZHRRL0xlb21RcUpRdlFEVEo5cjVjR3hJVFFmdkxUREFvPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjk3MDA5NzM5LFwiY3VycmVudEluZGV4XCI6OSxcImRldmljZUluZGV4ZXNcIjpbNyw4LDksMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzI5MTAwNjYwNDVcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFFYlIuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCIwVU5hOG5iWjE2QUFTcldvcEYyNDNHTWRYcmlCSUNLaVpZakhUM0lqMEhBPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjk3MDA5NzM5LFwiY3VycmVudEluZGV4XCI6OSxcImRldmljZUluZGV4ZXNcIjpbOCw3LDksMF19LFwidGltZXN0YW1wXCI6XCIxNzMyOTEwMDY3MDczXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRWJULmpzb24iOiAie1wia2V5RGF0YVwiOlwicmRVdGZLa3NYd0JYNVpHWFZYRkFWTmdkb2hWbWdSZmJ2MjV5Y0NuM00vcz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo5NzAwOTczOSxcImN1cnJlbnRJbmRleFwiOjksXCJkZXZpY2VJbmRleGVzXCI6WzAsNyw4LDldfSxcInRpbWVzdGFtcFwiOlwiMTczMjkxMDA3MzE0M1wifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUViVS5qc29uIjogIntcImtleURhdGFcIjpcIjFDSlB2ZmRKQ3VJQVFycjc4ditxYUp1WU1iV0Y2N0NxSE12b3kxc3liK0k9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6OTcwMDk3MzksXCJjdXJyZW50SW5kZXhcIjo5LFwiZGV2aWNlSW5kZXhlc1wiOls4LDksMF19LFwidGltZXN0YW1wXCI6XCIxNzMyOTEwMDc0MjcyXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "🥷🌹🍷𝙂𝙤𝙙𝙙𝙚𝙨𝙨 𝙉𝙚𝙯𝙪𝙠𝙤",
  packname: process.env.PACK_NAME || "🥷❤️𝙂𝙤𝙙𝙙𝙚𝙨𝙨 𝙉𝙚𝙯𝙪𝙠𝙤👻🍷❤️",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
