import type { Tag } from "@/models/tag/entity";

export type Follows = {
	id: string;
	user_id?: string;
	name: string;
	icon_link?: string;
};
