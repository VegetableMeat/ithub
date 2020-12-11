import React from "react";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import { Home, FeaturedPlayList, MenuBook } from "@material-ui/icons";
import { makeStyles } from "@material-ui/styles";
import styles from "./style.module.css";

const useStyles = makeStyles({
  bottomNavigation: {
    backgroundColor: "transparent",
    marginBottom: "20px",
  },
  bottomNavigationAction: {
    fontWeight: "bold",
    color: "var(--navigation-unfocus);",
    "&.Mui-selected": {
      color: "var(--navigation-focus);",
    },
  },
});

const Navigation: React.FC = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState("home");

  const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation
      className={classes.bottomNavigation}
      value={value}
      onChange={handleChange}
    >
      <BottomNavigationAction
        className={classes.bottomNavigationAction}
        label="Home"
        value="home"
        icon={<Home />}
      />
      <BottomNavigationAction
        className={classes.bottomNavigationAction}
        label="Recommend"
        value="recommend"
        icon={<FeaturedPlayList />}
      />
      <BottomNavigationAction
        className={classes.bottomNavigationAction}
        label="Popular"
        value="popular"
        icon={<MenuBook />}
      />
    </BottomNavigation>
  );
};

export default Navigation;
