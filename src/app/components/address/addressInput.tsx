import React, { useRef, useState, useEffect } from "react";
import { LoadScript, StandaloneSearchBox } from "@react-google-maps/api";
import { Input, InputDiv, InputLabel } from "./style";

interface AddressInputProps {
  onAddressSelect: (address: string) => void;
}

const libraries: "places"[] = ["places"];

const AddressInput = ({ onAddressSelect }: AddressInputProps) => {
  const searchBoxRef = useRef<google.maps.places.SearchBox | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [address, setAddress] = useState<string>("");

  const [isFocused, setIsFocused] = useState(false);

  const [isBlur, setIsBlur] = useState(false);

  const handleLoad = (ref: google.maps.places.SearchBox) => {
    searchBoxRef.current = ref;
  };

  const handlePlacesChanged = () => {
    const places = searchBoxRef.current?.getPlaces();
    if (places && places[0]) {
      const selectedAddress = places[0].formatted_address || "";
      setAddress(selectedAddress);
      onAddressSelect(selectedAddress);
    }
  };

  return (
    <LoadScript
      googleMapsApiKey={"AIzaSyBN1QaHjvvkcBJFRWyGzMbCuKJ4Ubs6BUA"}
      libraries={libraries}
    >
      <StandaloneSearchBox
        onLoad={handleLoad}
        onPlacesChanged={handlePlacesChanged}
      >
        <InputDiv>
          <Input
            type="text"
            placeholder=""
            onFocus={() => setIsFocused(true)}
            onBlur={() => {
              setIsFocused(false);
              setIsBlur(true);
            }}
            ref={inputRef}
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            style={{ width: "100%", padding: "10px" }}
          />
          <InputLabel
            initial={{ x: 3, y: 0, scale: 1.2, opacity: 1 }}
            animate={{
              x: isFocused || address ? 0 : 3,
              y: isFocused || address ? -12 : 0,
              scale: isFocused || address ? 1 : 1.2,
              opacity: isFocused || address ? 0.6 : 1,
            }}
            transition={{ duration: 0.2 }}
          >
            Адресс
          </InputLabel>
        </InputDiv>
      </StandaloneSearchBox>
    </LoadScript>
  );
};

export default AddressInput;
