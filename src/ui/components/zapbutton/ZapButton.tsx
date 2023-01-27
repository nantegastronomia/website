import React from "react";
import { Base, ContainerCenter, IconTel, Text } from "./style";
React;

import { BsWhatsapp } from "react-icons/bs";

const ZapButton = () => {
  return (
    <ContainerCenter>
      <a href="https://wa.me/552123914422" target={"_blank"}>
        <Base>
          <IconTel>
            <p style={{ marginRight: 10 }}>Entre em Contato: </p>
            <BsWhatsapp size={20} />
            <Text>(21) 2391-4422</Text>
          </IconTel>
        </Base>
      </a>
    </ContainerCenter>
  );
};

export default ZapButton;
