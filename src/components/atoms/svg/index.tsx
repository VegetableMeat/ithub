import React from "react";
import { makeStyles } from "@material-ui/styles";

type Props = {
  className?: string;
  image: object;
};

const Svg: React.FC<Props> = (props) => {
  const { className, image } = props;
  const useStyles = makeStyles(() => ({
    langImage: {
      width: "50px",
    },
  }));
  const classes = useStyles();
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
      data-prefix="fab"
      data-icon={image.dataIcon}
      className={className === void 0 ? classes.langImage : className}
      role="img"
      viewBox={`0 0 ${image.viewBox}`}
    >
      <path fill="currentColor" d={image.path} />
    </svg>
  );
};

export default Svg;
