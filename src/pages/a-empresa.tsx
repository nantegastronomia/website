import type { HeadFC, PageProps } from "gatsby";
import React from "react";
import ZapButton from "ui/components/zapbutton/ZapButton";
import { H1 } from "ui/typo";
import Layout from "../ui/components/layout";

import { Base, Container, SubTit, Titulo } from "../ui/containers";

export const Head: HeadFC = () => <title>Nantê Gastronomia</title>;

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Base style={{ backgroundColor: "#FFF8EB", minHeight: "78.2vh" }}>
        <Container>
          <Titulo>
            <H1 as={"h2"} color={"y2"}>
              A Empresa
            </H1>
            <SubTit>
              O Nantê nasceu 12 anos atrás, atendendo exclusivamente a uma
              grande empresa do mercado de eventos sociais no Rio de Janeiro, o
              que tomava 100% da nossa disponibilidade.
            </SubTit>
            <SubTit>
              Crescemos, nos estruturamos ainda mais e, enfim, tomamos a decisão
              de ir para o mercado formal, afinal, sempre fomos reconhecidos
              pela qualidade da nossa entrega e não fazia sentido algum nos
              limitarmos a um único cliente.
            </SubTit>
            <SubTit>Foi que o que fizemos!</SubTit>
            <SubTit>
              Levar comida boa, gostosa e com segurança para todo esse Brasil
              tem sido um saboroso desafio, uma jornada intensa, mas muito
              gratificante, pois alimentar pessoas é algo de fato encantador.
            </SubTit>
            <SubTit>
              Convidamos você a vir junto com a gente fazer parte dessa história
              de sucesso e voarmos voos ainda mais altos, levando tudo de melhor
              por onde passar.
            </SubTit>
            <SubTit>Vamos nessa?!</SubTit>
            <SubTit>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  //   width: "100%",
                }}
              >
                <ZapButton />
                <p style={{ textAlign: "center" }}>
                  E-mail: sabor@nante.com.br
                </p>
              </div>
            </SubTit>
          </Titulo>
        </Container>
      </Base>
    </Layout>
  );
};

export default IndexPage;
