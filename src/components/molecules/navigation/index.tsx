import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import { Home, FeaturedPlayList, MenuBook } from "@material-ui/icons";
import { makeStyles } from "@material-ui/styles";

type Props = {
  query: string;
};

const useStyles = makeStyles({
  bottomNavigation: {
    backgroundColor: "transparent",
    marginBottom: "20px",
    height: "60px",
  },
  bottomNavigationAction: {
    fontWeight: "bold",
    color: "var(--navigation-unfocus);",
    "&.Mui-selected": {
      color: "var(--navigation-focus);",
    },
  },
});

const Navigation: React.FC<Props> = (props) => {
  const router = useRouter();
  let { query } = props;
  if (query === void 0 || query === "") query = "home";
  const classes = useStyles();
  const [naviQuery, setNaviQuery] = React.useState<string>(query);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
    setNaviQuery(newValue);
    if (newValue === "home") {
      router.push({ pathname: "/", query: { navi: "" } }, { pathname: "/" });
    } else {
      router.push({ pathname: "/", query: { navi: newValue } });
    }
  };
  return (
    <BottomNavigation
      className={classes.bottomNavigation}
      value={naviQuery}
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
