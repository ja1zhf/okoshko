"use client";

import {
  FooterBlockDiv,
  FooterDiv,
  FooterLineDiv,
  FooterLink,
  FooterText,
} from "./style";

const FooterItem = () => {
  return (
    <FooterDiv>
      <FooterBlockDiv>
        <FooterLink href="#">О сервисе</FooterLink>
        <FooterLink href="/become-a-master">Как стать мастером</FooterLink>
        <FooterLink href="#">Вопросы и ответы</FooterLink>
        <FooterLink href="#">Реклама</FooterLink>
      </FooterBlockDiv>
      <FooterLineDiv />
      <FooterBlockDiv>
        <FooterLink href="#">Пользовательское соглашение</FooterLink>
        <FooterText>© 2024 «Окошко»</FooterText>
      </FooterBlockDiv>
    </FooterDiv>
  );
};

export default FooterItem;
