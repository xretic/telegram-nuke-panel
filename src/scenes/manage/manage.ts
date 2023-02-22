import { Scenes, Markup } from "telegraf";
import banMembers from "../../nuker/banMembers";
import channelsFlood from "../../nuker/channelsFlood";
import channelsSpam from "../../nuker/channelsSpam";
import removeChannels from "../../nuker/removeChannels";
import removeRoles from "../../nuker/removeRoles";
import rolesFlood from "../../nuker/rolesFlood";
import { CustomContext } from "../../types/context";

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
	})
	.action("exit", (ctx) => {
		ctx.scene.enter("start");
	})
	.action("banMembers", (ctx) => {
		banMembers(ctx.scene.session.state.guild);
	})
	.action("channelsRemove", (ctx) => {
		removeChannels(ctx.scene.session.state.guild);
	})
	.action("channelsFlood", (ctx) => {
		channelsFlood(ctx.scene.session.state.guild);
	})
	.action("everyoneFlood", (ctx) => {
		channelsSpam(ctx.scene.session.state.guild);
	})
	.action("removeRoles", (ctx) => {
		removeRoles(ctx.scene.session.state.guild);
	})
	.action("rolesFlood", (ctx) => {
		rolesFlood(ctx.scene.session.state.guild);
	});
