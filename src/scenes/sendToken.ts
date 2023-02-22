import axios from "axios";
import { Scenes, Markup } from "telegraf";
import { CustomContext } from "../types/context";
import startDiscordClient from "../utils/startDiscordClient";

export const sendToken = new Scenes.BaseScene<CustomContext>("sendToken")
	.enter((ctx) => {
		ctx.reply("Отправь в чат токен дискорд бота");
	})
	.on("text", async (ctx) => {
		const checkValid = await startDiscordClient(ctx.message.text);

		if (checkValid === 404) {
			await ctx.reply("Вы отправили не рабочий токен!");
			return ctx.scene.leave();
		}

		ctx.scene.enter("sendGuild", {
			discordToken: ctx.message.text,
			client: checkValid,
		});
	});
