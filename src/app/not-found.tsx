import Link from "next/link";
import { NotFoundBackLink, NotFoundTitle, PageDiv } from "./styles/style";

const NotFound = () => {
  return (
    <PageDiv>
      <NotFoundTitle>Страница не найдена</NotFoundTitle>
      <NotFoundBackLink href="/">
        Вернуться на главную страницу
      </NotFoundBackLink>
    </PageDiv>
  );
};

export default NotFound;
