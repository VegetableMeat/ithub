import React from "react";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import {
  Home,
  FeaturedPlayList,
  LocalOffer,
  MenuBook,
} from "@material-ui/icons";
import styles from "./style.module.css";

const useStyles = makeStyles(() => ({
  navigationNoneTransition: {
    transition: "font-size 0s, opacity 0s",
    transitionDelay: "0s",
  },
}));

const Navigation: React.FC = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState("home");

  const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation
      value={value}
      onChange={handleChange}
      className={
        `${styles.navigation} ` + `${classes.navigationNoneTransition}`
      }
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
