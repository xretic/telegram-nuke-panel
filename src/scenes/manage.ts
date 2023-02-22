import { Scenes, Markup } from "telegraf";
import Nuker from "../libs/Nuker";
import { CustomContext } from "../types/context";

let guildNuker: Nuker;

export const manage = new Scenes.BaseScene<CustomContext>("manage")
	.enter((ctx) => {
		ctx.reply(
			"Вы успешно вошли в панель управления\n\n" +
				`Бот: ${ctx.scene.session.state.client.user.tag}\n` +
				`Сервер: ${ctx.scene.session.state.guild.name}`,
			Markup.inlineKeyboard([
				[Markup.button.callback("📤 Выйти с панели", "exit")],
				[Markup.button.callback("Бан участников", "banMembers")],
				[Markup.button.callback("Удаление каналов", "channelsRemove")],
				[Markup.button.callback("Флуд каналами", "channelsFlood")],
				[Markup.button.callback("Флуд евриваном", "everyoneFlood")],
				[Markup.button.callback("Удаление ролей", "removeRoles")],
				[Markup.button.callback("Флуд ролями", "rolesFlood")],
			])
		);

		guildNuker = new Nuker(ctx.scene.session.state.guild);
	})
	.action("exit", (ctx) => {
		ctx.scene.session.state.client.destroy();
		ctx.scene.enter("start");
	})
	.action("banMembers", () => {
		guildNuker.banMembers();
	})
	.action("channelsRemove", () => {
		guildNuker.removeChannels();
	})
	.action("channelsFlood", () => {
		guildNuker.channelsFlood();
	})
	.action("everyoneFlood", () => {
		guildNuker.everyoneFlood();
	})
	.action("removeRoles", () => {
		guildNuker.removeRoles();
	})
	.action("rolesFlood", () => {
		guildNuker.rolesFlood();
	});
