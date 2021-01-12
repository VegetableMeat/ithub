import type { Tag } from "@/models/tag/entity";

export type User = {
	id: string;
	user_id?: string;
	name: string;
	icon_link?: string;
	github_link?: string;
	twitter_link?: string;
	user_text?: string;
	follow_count: number;
	follower_count: number;
	post_count: number;
	comment_count: number;
	follow_tags: Tag[];
	is_you: boolean;
	created_at: string;
};
