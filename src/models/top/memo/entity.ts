export type Memo = {
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  memo: {
    title: string;
    icon: string;
    user_name: string;
    user_id: string;
    update_time: string;
    favorite: number;
  };
};
