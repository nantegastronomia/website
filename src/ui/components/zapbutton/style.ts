import { styled } from "stitches.config";

export const ContainerCenter = styled("section", {
  maxWidth: "$6",
  margin: "0 auto",
  display: "flex",
  width: "100%",
  justifyContent: "center",
  paddingY: "30px",
});
export const Base = styled("a", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: "$1  ",
  paddingX: "$6",
  paddingY: "$2",
  backgroundColor: "#25D366",
  borderRadius: "8px",
  color: "white",
});

export const IconTel = styled("div", {
  display: "flex",
  gap: "$1",
  alignItems: "center",
  fontWeight: "bold",
});

export const Text = styled("div", {});
