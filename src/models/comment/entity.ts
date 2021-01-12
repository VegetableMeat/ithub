import type { User } from "@/models/user/entity";

export type Comment = {
	id: string;
	user: User;
	comment: string;
	created_at: string;
};
