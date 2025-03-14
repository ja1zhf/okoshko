import { PopupDiv, SubmitButton } from "@/app/styles/style";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { PopupTitle } from "./style";
import { DatesDiv } from "../style";
import InputItem from "@/app/components/input/inputItem";
import SelectItem from "@/app/components/select/selectItem";
import PhoneInputItem from "@/app/components/phoneInput/inputItem";
import { cleanPhoneNumber } from "@/tools/tools";

interface Props {
  title: string;
  selectedAppointment: number;
  setSelectedAppointment: Dispatch<SetStateAction<number>>;
  getAppointmentsTimes: () => Promise<void>;
}

const AppointmentPopupItem = (props: Props) => {
  const {
    title,
    selectedAppointment,
    setSelectedAppointment,
    getAppointmentsTimes,
  } = props;

  const divRef = useRef<HTMLDivElement>(null);

  const [servicesOptions, setServicesOptions] = useState<
    { id: number; title: string }[]
  >([]);

  const [phoneInput, setPhoneInput] = useState("");
  const [selectedService, setSelectedService] = useState(0);

  const handleClickOutside = (event: MouseEvent) => {
    if (divRef.current && !divRef.current.contains(event.target as Node)) {
      setSelectedAppointment(0);
    }
  };

  const click = async () => {
    await fetch("https://dev.okoshko.space/table/slot/appointments/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        phone: cleanPhoneNumber(phoneInput),
        slot_id: selectedAppointment,
        service_id: selectedService,
      }),
    });

    setSelectedAppointment(0);
    getAppointmentsTimes();
  };

  useEffect(() => {
    (async function () {
      const response = await fetch(
        `https://dev.okoshko.space/service/my-services`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        },
      );

      const result = await response.json();

      if (result.status === 200 && result.services.length > 0) {
        let servicesTemp: { id: number; title: string }[] = [];

        result.services.map((serviceTemp: { id: number; title: string }) => {
          servicesTemp.push({
            id: serviceTemp.id,
            title: serviceTemp.title,
          });
        });

        setServicesOptions(servicesTemp);
        setSelectedService(servicesTemp[0].id);
      }
    })();

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <PopupDiv ref={divRef}>
      <PopupTitle>Добавить запись</PopupTitle>
      <DatesDiv>
        <p>{title}</p>
      </DatesDiv>
      <PhoneInputItem
        title="Номер пользователя"
        inputValue={phoneInput}
        setInputValue={setPhoneInput}
      />
      <SelectItem
        title="Услуга"
        options={servicesOptions}
        selectedOption={selectedService}
        setSelectedOption={setSelectedService}
      />
      <SubmitButton onClick={click} whileTap={{ scale: 0.9 }}>
        Добавить
      </SubmitButton>
    </PopupDiv>
  );
};

export default AppointmentPopupItem;
