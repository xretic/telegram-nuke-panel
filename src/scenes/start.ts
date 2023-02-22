import { Scenes, Markup } from "telegraf";
import { CustomContext } from "../types/context";

export const start = new Scenes.BaseScene<CustomContext>("start")
	.enter((ctx) => {
		ctx.reply(
			"Привет! Я бот для краша серверов.\nМой создатель: https://github.com/xretic",
			Markup.keyboard(["🧨 Крашнуть сервер"])
		);
	})
	.hears("🧨 Крашнуть сервер", (ctx) => ctx.scene.enter("sendToken"));
