import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { KindButtonDiv } from "../style";

interface Props {
  id: number;
  title: string;
  masterKind: number[];
  setMasterKind: Dispatch<SetStateAction<number[]>>;
}

const KindButton = (props: Props) => {
  const { id, title, masterKind, setMasterKind } = props;

  const [isActive, setIsActive] = useState(false);

  const addAndRemove = (id: number) => {
    let temp = masterKind;

    if (temp.includes(id)) {
      const index = temp.indexOf(id);

      if (index !== -1) {
        temp.splice(index, 1);
      }

      setIsActive(false);
    } else {
      temp.push(id);
      setIsActive(true);
    }

    setMasterKind(temp);
  };

  useEffect(() => {
    setIsActive(masterKind.includes(id));
  }, [masterKind]);

  return (
    <KindButtonDiv $isActive={isActive} onClick={() => addAndRemove(id)}>
      {title}
    </KindButtonDiv>
  );
};

export default KindButton;
