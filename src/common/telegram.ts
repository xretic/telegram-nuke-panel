import { Telegraf, session, Scenes } from "telegraf";
import { CustomContext } from "../types/context";
import scenes from "../scenes/index";
import commandParser from "../utils/commandParser";

require("dotenv").config();

export const telegramClient = new Telegraf<CustomContext>(
	process.env.TELEGRAM_TOKEN
);

export const telegram = async () => {
	const stage = new Scenes.Stage<CustomContext>(scenes);

	telegramClient.use(session());
	telegramClient.use(stage.middleware());

	telegramClient.start((ctx) => ctx.scene.enter("start"));

	await commandParser();

	telegramClient.launch().then(() => console.log("Telegram connected!"));

	process.once("SIGINT", () => telegramClient.stop("SIGINT"));
	process.once("SIGTERM", () => telegramClient.stop("SIGTERM"));
};

export type Command = {
	name: string;
	collect: (ctx: CustomContext) => Promise<void>;
};
