import { Dispatch, SetStateAction } from "react";
import { ServicesTypeButton } from "./style";

interface Props {
  id: number;
  title: string;
  servicesTypeIds: number[];
  setServicesTypeIds: Dispatch<SetStateAction<number[]>>;
}

const ServicesTypeItem = (props: Props) => {
  const { id, title, servicesTypeIds, setServicesTypeIds } = props;

  const addAndRemove = async (id: number) => {
    let temp = [...servicesTypeIds];

    if (temp.includes(id)) {
      const index = temp.indexOf(id);

      if (index !== -1) {
        temp.splice(index, 1);
      }
    } else {
      temp.push(id);
    }

    const formData = new FormData();

    temp.map((speciality: number) => {
      formData.append("specialities", speciality as any);
    });

    const response = await fetch(
      `https://dev.okoshko.space/users/profile/update/`,
      {
        method: "PATCH",
        credentials: "include",
        body: formData,
      },
    );

    const result = await response.json();

    setServicesTypeIds(result.specialities);
  };

  return (
    <ServicesTypeButton
      $isActive={servicesTypeIds.includes(id)}
      onClick={() => addAndRemove(id)}
    >
      {title}
    </ServicesTypeButton>
  );
};

export default ServicesTypeItem;
