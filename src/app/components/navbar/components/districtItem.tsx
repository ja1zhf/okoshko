import districts from "@/app/districts";
import { CitySelection } from "./style";
import { ChangeEvent, useEffect } from "react";
import { useCityContext } from "@/contexts/cityContext";

const DistrictItem = () => {
  const { city, setCity } = useCityContext();

  const changeCity = (event: ChangeEvent<HTMLSelectElement>) => {
    localStorage.setItem("city", event.target.value);
    setCity(event.target.value);
  };

  useEffect(() => {
    if (localStorage.getItem("city")) {
      setCity(localStorage.getItem("city")!);
    } else {
      localStorage.setItem("city", districts[0].city);
      setCity(districts[0].city);
    }
  }, []);

  return (
    <CitySelection value={city} onChange={changeCity}>
      {districts.map((district, index) => (
        <option key={index} value={district.city}>
          {district.city}
        </option>
      ))}
    </CitySelection>
  );
};

export default DistrictItem;
