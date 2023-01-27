import Bg from "images/bg-lotus.jpg";
import { styled } from "stitches.config";
import { ContainerCenter } from "ui/containers";

export const Base = styled("div", {
  paddingX: "$6",
  paddingY: "8rem",
  // backgroundColor: "#FFF8EB",
});

export const Container = styled(ContainerCenter, {
  alignItems: "center",
  gap: "$8",
  flexDirection: "column",
});

export const Titulo = styled("div", {
  width: "100%",
  textAlign: "center",
});
export const SubTit = styled("div", { marginTop: "$2" });
export const BoxServices = styled("div", {
  display: "flex",
  width: "100%",
  gap: "$6",
  justifyContent: "center",

  "@xs": { flexDirection: "column" },
  "@md": { flexDirection: "row" },
});
export const CardService = styled("div", {
  maxWidth: "30%",
  display: "flex",
  flexDirection: "column",
  gap: "$2",

  "@xs": { width: "100%", maxWidth: "100%" },
  "@md": { width: "100%", maxWidth: "30%" },
});
export const IconBox = styled("div", {
  display: "flex",
  gap: "$2",
  alignItems: "start",
});

export const BoxButton = styled("div", { width: "100%", textAlign: "center" });
