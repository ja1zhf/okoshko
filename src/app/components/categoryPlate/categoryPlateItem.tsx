import { Fragment } from "react";
import {
  CategoryPlateDescription,
  CategoryPlateLink,
  CategoryPlateTitle,
} from "./style";

interface Props {
  category: CategoryType;
}

const CategoryPlateItem = (props: Props) => {
  const { category } = props;

  return (
    <CategoryPlateLink
      href={`/search${category.href}`}
      $url={category.backgroundSrc}
    >
      <CategoryPlateTitle>{category.title}</CategoryPlateTitle>
      <CategoryPlateDescription>
        {category.description.split("\n").map((line, index) => (
          <Fragment key={index}>
            {line}
            <br />
          </Fragment>
        ))}
      </CategoryPlateDescription>
    </CategoryPlateLink>
  );
};

export default CategoryPlateItem;
