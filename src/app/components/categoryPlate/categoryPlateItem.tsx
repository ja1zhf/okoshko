import { Fragment } from "react";
import {
  CategoryPlateDescription,
  CategoryPlateLink,
  CategoryPlateTitle,
} from "./style";
import { useRouter } from "next/navigation";

interface Props {
  category: CategoryType;
}

const CategoryPlateItem = (props: Props) => {
  const { category } = props;

  const router = useRouter();

  return (
    <CategoryPlateLink
      onClick={() => router.push(`/search${category.href}`)}
      $url={category.backgroundSrc}
      whileTap={{ scale: 1.1 }}
      whileHover={{ scale: 1.1 }}
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
