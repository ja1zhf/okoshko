import { PopupDiv, SubmitButton } from "@/app/styles/style";
import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import { Button, PopupTitle } from "./style";
import InputItem from "@/app/components/input/inputItem";
import SelectItem from "@/app/components/select/selectItem";

interface Props {
  id: number;
  isEdit: boolean;
  title: string;
  time: string;
  price: string;
  service: number;
  setIsActive: Dispatch<SetStateAction<boolean>>;
  request: () => Promise<void>;
}

const PopupItem = (props: Props) => {
  const { id, isEdit, title, time, price, service, setIsActive, request } =
    props;

  const divRef = useRef<HTMLDivElement>(null);

  const [services, setServices] = useState<{ id: number; title: string }[]>([]);

  const [selectedService, setSelectedService] = useState(0);
  const [titleInput, setTitleInput] = useState(title);
  const [timeInput, setTimeInput] = useState(time);
  const [priceInput, setPriceInput] = useState(price);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [buttonText, setButtonText] = useState("");

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setSelectedFiles(Array.from(event.target.files));
      setButtonText("Файлы выбраны");
    }
  };

  const click = async () => {
    if (!isEdit) {
      const formData = new FormData();
      formData.append("service", selectedService as any);
      formData.append("title", titleInput);
      formData.append("description", "");
      formData.append("price", priceInput);
      formData.append("duration", timeInput);

      if (selectedFiles.length > 0) {
        selectedFiles.map((file) => {
          formData.append("photos", file);
        });
      }

      const response = await fetch(
        `https://dev.okoshko.space/service/services/create/`,
        {
          method: "POST",
          credentials: "include",
          body: formData,
        },
      );

      const result = await response.json();

      if (result.status === 201) {
        setIsActive(false);
        request();
      }
    } else {
      await fetch(`https://dev.okoshko.space/service/service/update/${id}/`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          service: selectedService,
          title: titleInput,
          description: "",
          price: priceInput,
          duration: timeInput,
        }),
      });

      setIsActive(false);
      request();
    }
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (divRef.current && !divRef.current.contains(event.target as Node)) {
      setIsActive(false);
    }
  };

  useEffect(() => {
    (async function () {
      const response = await fetch(
        `https://dev.okoshko.space/service/available-services/`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        },
      );

      const result: ServiceInputType[] = await response.json();

      let temp: { id: number; title: string }[] = [];

      result.map((service) => {
        temp.push({ id: service.id, title: service.name });
      });

      setServices(temp);
      if (!isEdit) {
        setSelectedService(temp[0].id);
      } else {
        setSelectedService(service);
      }
    })();

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <PopupDiv ref={divRef}>
      <PopupTitle>Добавление услуги</PopupTitle>
      <SelectItem
        title="Услуга"
        options={services}
        selectedOption={selectedService}
        setSelectedOption={setSelectedService}
      />
      <InputItem
        title="Название услуги"
        isNumber={false}
        canBeEmpty={false}
        inputValue={titleInput}
        setInputValue={setTitleInput}
      />
      <InputItem
        title="Время выполнения"
        isNumber={true}
        canBeEmpty={false}
        inputValue={timeInput}
        setInputValue={setTimeInput}
      />
      <InputItem
        title="Стоимость"
        isNumber={true}
        canBeEmpty={false}
        inputValue={priceInput}
        setInputValue={setPriceInput}
      />
      {!isEdit && (
        <>
          <Button htmlFor="file-upload">
            {buttonText ? buttonText : "Добавить фото"}
          </Button>
          <input
            id="file-upload"
            type="file"
            accept="image/png, image/jpeg"
            style={{ display: "none" }}
            onChange={handleFileChange}
            multiple
          />
        </>
      )}
      <SubmitButton onClick={click} whileTap={{ scale: 0.9 }}>
        {isEdit ? "Изменить" : "Добавить"}
      </SubmitButton>
    </PopupDiv>
  );
};

export default PopupItem;
