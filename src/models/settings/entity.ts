import type { Tag } from "@/models/tag/entity";

export type Settings = {
  user_id: string;
  icon_link: string;
  name: string;
  user_text: string;
  belongs: string;
  belongs_?: string;
  follow_tags: Tag[];
};
