import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { ServicesTypeButton } from "./style";

interface Props {
  id: number;
  title: string;
  servicesTypeIds: number[];
  setServicesTypeIds: Dispatch<SetStateAction<number[]>>;
}

const ServicesTypeItem = (props: Props) => {
  const { id, title, servicesTypeIds, setServicesTypeIds } = props;

  const addAndRemove = (id: number) => {
    let temp = [...servicesTypeIds];

    if (temp.includes(id)) {
      const index = temp.indexOf(id);

      if (index !== -1) {
        temp.splice(index, 1);
      }
    } else {
      temp.push(id);
    }

    setServicesTypeIds(temp);
  };

  return (
    <ServicesTypeButton $isActive={servicesTypeIds.includes(id)} onClick={() => addAndRemove(id)}>
      {title}
    </ServicesTypeButton>
  );
};

export default ServicesTypeItem;
