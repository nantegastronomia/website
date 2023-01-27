import type { HeadFC, PageProps } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import ZapButton from "ui/components/zapbutton/ZapButton";
import { H1, H2 } from "ui/typo";
import Layout from "../../ui/components/layout";

import {
  Desktop,
  Foto,
  Mobile,
  Servico,
  Side,
  Texto,
} from "../../ui/components/servicos/style";
import { Base, Container, SubTit, Titulo } from "../../ui/containers";

export const Head: HeadFC = () => <title>Nantê Gastronomia</title>;

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Base style={{ backgroundColor: "#FFF8EB" }}>
        <Container>
          <Titulo>
            <H1 as={"h2"} color={"y2"}>
              Nossos Serviços
            </H1>
            <SubTit>
              Nossos serviços abrangem um leque muito grande de possibilidades,
              e nos permite realizar os mais variados tipos de eventos. Dos mais
              formais, como casamentos, até um coffee break para recepcionar
              seus convidados. Confira!
            </SubTit>
          </Titulo>

          <Mobile>
            <Servico>
              <Side>
                <Foto>
                  <StaticImage src={"./corporativo.jpg"} alt="servico" />
                </Foto>
              </Side>
              <Side>
                <Texto>
                  <H2 color={"y2"}>Eventos Corporativos</H2>
                  <p>
                    Um evento empresarial bem sucedido reflete positivamente no
                    posicionamento da imagem da sua empresa, o que exige ainda
                    mais cuidado e responsabilidade ao escolher o serviço de
                    buffet que irá ser contratado. Cuidamos de cada detalhe,
                    oferecendo alta gastronomia aos seus convidados, sempre
                    levando em consideração os valores da empresa, o público
                    presente e os objetivos da ocasião, compreendendo as suas
                    necessidades específicas.
                  </p>
                </Texto>
              </Side>
            </Servico>
            <Servico>
              <Side>
                <Foto>
                  <StaticImage src={"./casamento.jpg"} alt="servico" />
                </Foto>
              </Side>
              <Side>
                <Texto>
                  <H2 color={"y2"}>Casamentos, 15 anos e formaturas</H2>
                  <p>
                    Realizar um sonho exige muita dedicação. São muitos meses de
                    planejamento, grande investimento e também muitas emoções
                    envolvidas na busca dos fornecedores perfeitos. Ser o
                    anfitrião da festa é sempre uma grande responsabilidade.
                    Conquistar o reconhecimento do atendimento primoroso, da
                    belíssima apresentação dos pratos e por sabores incríveis
                    foi um desafio de muito trabalho e dedicação até alcançar o
                    delicioso sucesso. São 12 anos à frente dos melhores eventos
                    sociais, com a elaboração de deliciosos menus e em
                    diferentes formatos.
                  </p>
                </Texto>
              </Side>
            </Servico>
            <Servico>
              <Side>
                <Foto>
                  <StaticImage src={"./stand.jpg"} alt="servico" />
                </Foto>
              </Side>
              <Side>
                <Texto>
                  <H2 color={"y2"}>Stands, Feiras, Congressos e Exposições</H2>
                  <p>
                    As feiras e exposições funcionam como vitrine de uma
                    empresa, as quais utilizam esses eventos como ferramenta de
                    marketing para posicionar seus negócios e ao mesmo tempo
                    gerar leads. E nada como um excelente buffet, com comidas
                    gostosas e de fácil manuseio para contribuir na experiência
                    do cliente com seu stand e torná-lo ainda mais atrativo.
                  </p>
                </Texto>
              </Side>
            </Servico>
            <Servico>
              <Side>
                <Foto>
                  <StaticImage src={"./reveillon.jpg"} alt="servico" />
                </Foto>
              </Side>
              <Side>
                <Texto>
                  <H2 color={"y2"}>Réveillon, Camarotes e Área Vip</H2>
                  <p>
                    Nos momentos de alegria e descontração, com alta demanda de
                    público, é necessário que tudo seja minuciosamente pensado
                    para que o volume de atendimento de alimentos e bebidas seja
                    suprido, sem deixar que o nível de qualidade seja impactado
                    pela velocidade da execução. Ter um parceiro robusto e
                    estruturado é fundamental para sucesso do seu evento,
                    visando a fidelidade na compra de ingressos de eventos
                    futuros.
                  </p>
                </Texto>
              </Side>
            </Servico>
            <Servico>
              <Side>
                <Foto>
                  <StaticImage src={"./coffee.jpg"} alt="servico" />
                </Foto>
              </Side>
              <Side>
                <Texto>
                  <H2 color={"y2"}>Coffee Break</H2>
                  <p>
                    A recepção para palestrantes, participantes de congressos,
                    cursos, é sempre melhor com um coffee break corporativo. Os
                    convidados se sentem bem acolhidos, e a qualidade oferecida
                    no coffee break corporativo contribui para a imagem do
                    evento e, por consequência, diretamente para imagem da sua
                    empresa.
                  </p>
                </Texto>
              </Side>
            </Servico>
          </Mobile>

          <Desktop>
            <Servico>
              <Side>
                <Foto>
                  <StaticImage src={"./corporativo.jpg"} alt="servico" />
                </Foto>
              </Side>
              <Side>
                <Texto align={"left"}>
                  <H2 color={"y2"}>Eventos Corporativos</H2>
                  <p>
                    Um evento empresarial bem sucedido reflete positivamente no
                    posicionamento da imagem da sua empresa, o que exige ainda
                    mais cuidado e responsabilidade ao escolher o serviço de
                    buffet que irá ser contratado. Cuidamos de cada detalhe,
                    oferecendo alta gastronomia aos seus convidados, sempre
                    levando em consideração os valores da empresa, o público
                    presente e os objetivos da ocasião, compreendendo as suas
                    necessidades específicas.
                  </p>
                </Texto>
              </Side>
            </Servico>
            <Servico>
              <Side>
                <Texto align={"right"}>
                  <H2 color={"y2"}>Casamentos, 15 anos e formaturas</H2>
                  <p>
                    Realizar um sonho exige muita dedicação. São muitos meses de
                    planejamento, grande investimento e também muitas emoções
                    envolvidas na busca dos fornecedores perfeitos. Ser o
                    anfitrião da festa é sempre uma grande responsabilidade.
                    Conquistar o reconhecimento do atendimento primoroso, da
                    belíssima apresentação dos pratos e por sabores incríveis
                    foi um desafio de muito trabalho e dedicação até alcançar o
                    delicioso sucesso. São 12 anos à frente dos melhores eventos
                    sociais, com a elaboração de deliciosos menus e em
                    diferentes formatos.
                  </p>
                </Texto>
              </Side>
              <Side>
                <Foto>
                  <StaticImage src={"./casamento.jpg"} alt="servico" />
                </Foto>
              </Side>
            </Servico>
            <Servico>
              <Side>
                <Foto>
                  <StaticImage src={"./stand.jpg"} alt="servico" />
                </Foto>
              </Side>
              <Side>
                <Texto align={"left"}>
                  <H2 color={"y2"}>Stands, Feiras, Congressos e Exposições</H2>
                  <p>
                    As feiras e exposições funcionam como vitrine de uma
                    empresa, as quais utilizam esses eventos como ferramenta de
                    marketing para posicionar seus negócios e ao mesmo tempo
                    gerar leads. E nada como um excelente buffet, com comidas
                    gostosas e de fácil manuseio para contribuir na experiência
                    do cliente com seu stand e torná-lo ainda mais atrativo.
                  </p>
                </Texto>
              </Side>
            </Servico>
            <Servico>
              <Side>
                <Texto align={"right"}>
                  <H2 color={"y2"}>Réveillon, Camarotes e Área Vip</H2>
                  <p>
                    Nos momentos de alegria e descontração, com alta demanda de
                    público, é necessário que tudo seja minuciosamente pensado
                    para que o volume de atendimento de alimentos e bebidas seja
                    suprido, sem deixar que o nível de qualidade seja impactado
                    pela velocidade da execução. Ter um parceiro robusto e
                    estruturado é fundamental para sucesso do seu evento,
                    visando a fidelidade na compra de ingressos de eventos
                    futuros.
                  </p>
                </Texto>
              </Side>
              <Side>
                <Foto>
                  <StaticImage src={"./reveillon.jpg"} alt="servico" />
                </Foto>
              </Side>
            </Servico>
            <Servico>
              <Side>
                <Foto>
                  <StaticImage src={"./coffee.jpg"} alt="servico" />
                </Foto>
              </Side>
              <Side>
                <Texto align={"left"}>
                  <H2 color={"y2"}>Coffee Break</H2>
                  <p>
                    A recepção para palestrantes, participantes de congressos,
                    cursos, é sempre melhor com um coffee break corporativo. Os
                    convidados se sentem bem acolhidos, e a qualidade oferecida
                    no coffee break corporativo contribui para a imagem do
                    evento e, por consequência, diretamente para imagem da sua
                    empresa.
                  </p>
                </Texto>
              </Side>
            </Servico>
          </Desktop>

          <ZapButton />
        </Container>
      </Base>
    </Layout>
  );
};

export default IndexPage;
