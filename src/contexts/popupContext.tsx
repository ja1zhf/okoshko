"use client";

import { PageDarkOverlay, PopupDiv } from "@/app/styles/style";
import React, { createContext, useContext, useState, ReactNode } from "react";
import styled from "styled-components";

type PopupType = "success" | "failure";

type PopupContextType = {
  showPopup: (type: PopupType, message: string) => void;
};

const PopupContext = createContext<PopupContextType | undefined>(undefined);

export const PopupProvider = ({ children }: { children: ReactNode }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [type, setType] = useState<PopupType>("success");
  const [message, setMessage] = useState("");

  const showPopup = (type: PopupType, message: string) => {
    setType(type);
    setMessage(message);
    setIsVisible(true);

    setTimeout(() => setIsVisible(false), 5000);
  };

  const hidePopup = () => setIsVisible(false);

  return (
    <PopupContext.Provider value={{ showPopup }}>
      {children}
      {isVisible && <Popup type={type} message={message} onClose={hidePopup} />}
    </PopupContext.Provider>
  );
};

export const usePopup = (): PopupContextType => {
  const context = useContext(PopupContext);
  if (!context) {
    throw new Error("usePopup должен быть использован внутри PopupProvider");
  }
  return context;
};

const Popup = ({
  type,
  message,
  onClose,
}: {
  type: PopupType;
  message: string;
  onClose: () => void;
}) => (
  <PageDarkOverlay onClick={onClose}>
    <PopupBlock onClick={(e) => e.stopPropagation()}>
      <h1>{type === "success" ? "Успешно" : "Ошибка"}</h1>
      <p>{message}</p>
    </PopupBlock>
  </PageDarkOverlay>
);

const PopupBlock = styled(PopupDiv)`
  align-items: center;
  max-width: 300px;
`;
