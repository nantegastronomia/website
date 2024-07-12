import type { HeadFC, PageProps } from "gatsby";
import React from "react";
import Cheff from "ui/components/cheff";
import Clientes from "ui/components/clientes";
import Hero from "ui/components/hero";
import Pilares from "ui/components/pilares";
import ZapButton from "ui/components/zapbutton/ZapButton";
import Layout from "../ui/components/layout";

export const Head: HeadFC = () => <title>Nantê Gastronomia </title>;




const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Hero />
      <Cheff />
      {/* <Clientes /> */}
      <Pilares />
      <ZapButton />
    </Layout>
  );
};

export default IndexPage;
