module.exports = {
	/* The token of your Discord Bot */
	token: "ODgwMTg1ODkwNjA4MTIzOTA0.YSam_Q.Mzj0aHrBjz4FYqHPCkUt1krw1CQ",
	/* For the support server */
	support: {
		id: "814873626800685138", // The ID of the support server
		logs: "860364760175869962", // And the ID of the logs channel of your server (new servers for example)
	},
	/* Dashboard configuration */
	dashboard: {
		enabled: true, // whether the dashboard is enabled or not
		secret: "dpul3p0OyEm-HCmUW4nQr4ETBtalaq3g", // Your discord client secret
		baseURL: "https://dashboard.lomacarrullo.tk", // The base URl of the dashboard
		logs: "860364760175869962", // The channel ID of logs
		port: 8080, // Dashboard port
		expressSessionPassword: "2209Eadr2209", // Express session password (it can be what you want)
		failureURL: "https://lomacarrullo.tk" // url on which users will be redirected if they click the cancel button (discord authentication)
	},
	mongoDB: "mongodb+srv://Eduardo2209:2209Eadr@cluster0.rakoe.mongodb.net/Macarrullo?retryWrites=true&w=majority", // The URl of the mongodb database
	prefix: "*", // The default prefix for the bot
	/* For the embeds (embeded messages) */
	embed: {
		color: "#0091fc", // The default color for the embeds
		footer: "Lo macarrullo | El bolis lo ma duro" // And the default footer for the embeds
	},
	/* Bot's owner informations */
	owner: {
		id: "447114673616191488", // The ID of the bot's owner
		name: "Eduardo12🎅#2209" // And the name of the bot's owner
	},
	/* DBL votes webhook (optional) */
	votes: {
		port: 5000, // The port for the server
		password: "", // The webhook auth that you have defined on discordbots.org
		channel: "" // The ID of the channel that in you want the votes logs
	},
	/* The API keys that are required for certain commands */
	apiKeys: {
		// BLAGUE.XYZ: https://blague.xyz/
		blagueXYZ: "",
		// FORTNITE TRN: https://fortnitetracker.com/site-api
		fortniteTRN: "",
		// FORTNITE FNBR: https://fnbr.co/api/docs
		fortniteFNBR: "",
		// DBL: https://discordbots.org/api/docs#mybots
		dbl: "",
		// AMETHYSTE: https://api.amethyste.moe
		amethyste: "2387cc4b0fbd506ae271c620d9f52112b81bae502fd8e9e7314418c6d39668d8c1dd91bd22a63e596187f7e3cdf57bc27f0f878a58ccf6a88c4fbac42be2e54c",
	},
	/* The others utils links */
	others: {
		github: "https://github.com/eduardo1095450", // Founder's github account
		donate: "" // Donate link
	},
	/* The Bot status */
	status: [
		{
			name: "@lo macarrullo en 1 servidor",
			type: "WATCHING"
		},
		{
			name: "a Jan masturbarse",
			type: "WATCHING"
		},
		{
			name: "a Pamela que ta buenisima😍😍",
			type: "WATCHING"
		},
		{
			name: "porno",
			type: "WATCHING"
		},
		{
			name: "a la menol de chino",
			type: "WATCHING"
		}

	]
};
