import { Scenes, Markup } from "telegraf";
import { CustomContext } from "../../types/context";

export const sendGuild = new Scenes.BaseScene<CustomContext>("sendGuild")
	.enter((ctx) => {
		ctx.reply("Отправь в чат айди сервера");
	})
	.on("text", (ctx) => {
		const guild = ctx.scene.session.state.client.guilds.cache.get(
			ctx.message.text
		);

		if (!guild) {
			ctx.reply("Такого сервера нет в списке бота!");
			return ctx.scene.leave();
		}

		ctx.scene.enter("manage", {
			discordToken: ctx.scene.session.state.discordToken,
			client: ctx.scene.session.state.client,
			guild: guild,
		});
	});
