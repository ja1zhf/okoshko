import districts from "@/app/districts";
import { CitySelection } from "./style";
import { ChangeEvent, useEffect, useState } from "react";

const DistrictItem = () => {
  const [selection, setSelection] = useState("");

  const changeCity = (event: ChangeEvent<HTMLSelectElement>) => {
    localStorage.setItem("city", event.target.value);
    setSelection(event.target.value);
  };

  useEffect(() => {
    if (localStorage.getItem("city")) {
      setSelection(localStorage.getItem("city")!);
    } else {
      localStorage.setItem("city", districts[0].city);
      setSelection(districts[0].city);
    }
  }, []);

  return (
    <CitySelection value={selection} onChange={changeCity}>
      {districts.map((district, index) => (
        <option key={index} value={district.city}>
          {district.city}
        </option>
      ))}
    </CitySelection>
  );
};

export default DistrictItem;
