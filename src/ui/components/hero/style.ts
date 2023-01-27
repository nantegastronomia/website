import { calculateImageSizes } from "gatsby-plugin-image/dist/src/image-utils";
import { styled } from "stitches.config";
import Bg from "./hero2.jpg";

export const Base = styled("div", {
  width: "100%",
  paddingX: "$6",

  display: "flex",
  //   alignItems: "center",
  backgroundImage: `url(${Bg})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "bottom",

  "@xs": { paddingY: "$9" },
  "@md": { paddingY: "8rem" },
});

export const Container = styled("section", {
  display: "flex",
  width: "100%",
  maxWidth: "$6",
  margin: "0 auto",
});
export const BoxText = styled("div", {
  display: "flex",
  flexDirection: "column",
  width: "100%",
  gap: "$3",

  "@xs": { width: "100%", textAlign: "center", justifyContent: "center" },
  "@md": { width: "75%", textAlign: "left", justifyContent: "start" },
});
