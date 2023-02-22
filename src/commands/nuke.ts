import { Command } from "../common/telegram";
import { CustomContext } from "../types/context";

export const execute: Command = {
	name: "nuke",
	collect: async (ctx: CustomContext): Promise<void> => {
		await ctx.scene.enter("sendToken");
	},
};
