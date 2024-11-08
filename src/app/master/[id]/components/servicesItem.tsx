import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { ServiceButton } from "../style";
import { motion } from "framer-motion";

interface Props {
  id: number;
  title: string;
  price: number;
  selectedService: number;
  setSelectedService: Dispatch<SetStateAction<number>>;
}

const ServicesItem = (props: Props) => {
  const { id, title, price, selectedService, setSelectedService } = props;

  return (
    <ServiceButton
      {...(selectedService === id && { $isActive: true })}
      onClick={() => {
        setSelectedService(id);
      }}
    >
      <div className="info">
        <h3>{title}</h3>
        <p>{price} ₽</p>
      </div>
      <div className="icon">
        {selectedService === id ? (
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="100"
            height="100"
            viewBox="0 0 30 30"
            animate={{ rotate: 0 }}
            transition={{ duration: 0.2 }}
          >
            <path d="M 5 13 A 2.0002 2.0002 0 1 0 5 17 L 25 17 A 2.0002 2.0002 0 1 0 25 13 L 5 13 z"></path>
          </motion.svg>
        ) : (
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="100"
            height="100"
            viewBox="0 0 30 30"
            animate={{ rotate: -90 }}
            transition={{ duration: 0.2 }}
          >
            <path d="M 14.970703 2.9726562 A 2.0002 2.0002 0 0 0 13 5 L 13 13 L 5 13 A 2.0002 2.0002 0 1 0 5 17 L 13 17 L 13 25 A 2.0002 2.0002 0 1 0 17 25 L 17 17 L 25 17 A 2.0002 2.0002 0 1 0 25 13 L 17 13 L 17 5 A 2.0002 2.0002 0 0 0 14.970703 2.9726562 z"></path>
          </motion.svg>
        )}
      </div>
    </ServiceButton>
  );
};

export default ServicesItem;
