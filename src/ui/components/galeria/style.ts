import { styled } from "stitches.config";

export const GaleriaVideo = styled("div", {
  display: "flex",
  flexWrap: "wrap",
  gap: "$2",
  justifyContent: "center",
});
export const Video = styled("video", {
  "@xs": { flexDirection: "column", width: "100%" },
  "@sm": { flexDirection: "column", width: "49%" },
  "@lg": { flexDirection: "column", width: "32.3%" },
  //   width: "49%",
});
