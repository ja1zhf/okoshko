"use client";

import InputItem from "../components/input/inputItem";
import SelectItem from "../components/select/selectItem";
import { PageDiv } from "../styles/style";

const Page = () => {
  return (
    <PageDiv>
      <h1>Login</h1>
      <InputItem title="popa" />
      <SelectItem title="popa" options={["1", "2"]} />
    </PageDiv>
  );
};

export default Page;
