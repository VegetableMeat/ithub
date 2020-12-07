import React from "react";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import {
  Home,
  FeaturedPlayList,
  LocalOffer,
  MenuBook,
} from "@material-ui/icons";
import styles from "./style.module.css";

const Navigation: React.FC = () => {
  const [value, setValue] = React.useState("home");

  const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation
      value={value}
      onChange={handleChange}
      className={styles.navigation}
    >
      <BottomNavigationAction label="ホーム" value="home" icon={<Home />} />
      <BottomNavigationAction
        label="おすすめ"
        value="recommend"
        icon={<FeaturedPlayList />}
      />
      <BottomNavigationAction
        label="人気タグ"
        value="tag"
        icon={<LocalOffer />}
      />
      <BottomNavigationAction
        label="人気備忘録"
        value="memo"
        icon={<MenuBook />}
      />
    </BottomNavigation>
  );
};

export default Navigation;
