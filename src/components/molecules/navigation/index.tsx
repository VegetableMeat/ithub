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
      <BottomNavigationAction label="Home" value="home" icon={<Home />} />
      <BottomNavigationAction
        label="Recommend"
        value="recommend"
        icon={<FeaturedPlayList />}
      />
      {/* <BottomNavigationAction
        label="人気タグ"
        value="tag"
        icon={<LocalOffer />}
      /> */}
      <BottomNavigationAction
        label="Popular"
        value="popular"
        icon={<MenuBook />}
      />
    </BottomNavigation>
  );
};

export default Navigation;
