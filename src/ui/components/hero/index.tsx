import React from "react";
import { ButtonLink } from "ui/buttons";
import { H1, H2 } from "ui/typo";
import { Base, BoxText, Container } from "./style";

export default function Hero() {
  return (
    <Base>
      <Container>
        <BoxText>
          <H1 as={"h2"} color={"w"} bold={"s"}>
            FEIRAS, CONGRESSOS,
            <br /> CORPORATIVOS <br />E GRANDES PÚBLICOS
          </H1>
          <H2 as={"h3"} color={"w"} bold={"n"}>
            Somos especialistas em atender grandes demandas com carinho,
            sofisticação e sabor inigualável! Se o seu objetivo é impactar
            positivamente seus convidados, é com a gente que você precisa falar.
          </H2>
          <ButtonLink to={"/servicos"}>CONHEÇA NOSSOS SERVIÇOS</ButtonLink>
        </BoxText>
      </Container>
    </Base>
  );
}
