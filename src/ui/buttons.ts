import { Link } from "gatsby";
import { styled } from "stitches.config";

export const ButtonLink = styled(Link, {
  color: "white",
  backgroundColor: "$yellow200",
  fontWeight: "$2",
  paddingX: "$3",
  paddingY: "$2",
  border: 0,
  fontSize: "$1",
  borderRadius: "$xs",
  transition: "0.2s",
  alignSelf: "flex-start",
  textDecoration: "none",
  cursor: "pointer",

  "&:hover": { backgroundColor: "$yellow100" },

  variants: {
    color: {
      y1: { color: "$yellow100" },
      y2: { color: "$yellow200" },
    },
  },

  "@xs": { alignSelf: "auto" },

  "@md": { alignSelf: "flex-start" },
});
