import { atom } from "recoil";
import type { User } from "@/models/user/entity";
import type { Follows } from "@/models/follows/entity";

export const userState = atom<User>({
	key: "user",
	default: null,
});

export const followingState = atom<Follows[]>({
	key: "follows",
	default: null,
});
