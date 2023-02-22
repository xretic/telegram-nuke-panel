import { Context, Scenes } from "telegraf";
import { Guild, Client } from "discord.js";

export interface CustomSession extends Scenes.SceneSessionData {
	state?: {
		discordToken?: string;
		client?: Client;
		guild?: Guild;
	};
}

export interface CustomContext extends Context {
	scene: Scenes.SceneContextScene<CustomContext, CustomSession>;
}
