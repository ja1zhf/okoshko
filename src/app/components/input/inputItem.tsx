import { InputDiv } from "./style";

interface Props {
  title: string;
}

const InputItem = (props: Props) => {
  const { title } = props;

  return (
    <InputDiv>
      <p>{title}</p>
      <input />
    </InputDiv>
  );
};

export default InputItem;
