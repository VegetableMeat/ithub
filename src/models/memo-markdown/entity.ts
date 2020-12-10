import type { User } from "@/models/user/entity";
import type { Tag } from "@/models/tag/entity";

export type MemoMarkdown = {
	id: number;
	user: User;
	memo_title: string;
	tags: Tag[];
	favorite_count: number;
	comment_count: number;
	created_at: string;
	markdown: string;
};
