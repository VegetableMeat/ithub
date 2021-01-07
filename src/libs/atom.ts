import { atom } from "recoil";
import type { User } from "@/models/user/entity";

export const userState = atom<User>({
	key: "user",
	default: null,
});
