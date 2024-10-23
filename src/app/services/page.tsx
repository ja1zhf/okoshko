"use client";

import { useContext, useEffect, useState } from "react";
import { PageDarkOverlay, PageDiv } from "../styles/style";
import {
  ServiceButton,
  ServicesButton,
  ServicesCell,
  ServicesPageTitle,
  ServicesPriceDiv,
  ServicesTable,
  ServicesTitleCell,
} from "./style";
import PopupItem from "./components/popupItem";
import { ServiceButtonDiv } from "./style";
import UserContext from "@/contexts/userContext";
import { notFound } from "next/navigation";

const Page = () => {
  const { user } = useContext(UserContext);

  const services = [
    {
      title: "Маникюр с покрытием ногтей гель-лаком",
      time: 60,
      break: 15,
      price: 1300,
    },
    {
      title: "Снятие гель-лака с ногтей на руках",
      time: 60,
      break: 0,
      price: 700,
    },
    {
      title: "Укрепление ногтей акриловой пудрой",
      time: 30,
      break: 10,
      price: 200,
    },
  ];

  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    (async function () {
      if (user) {
        const response = await fetch(
          `https://dev.okoshko.space/service/servicesbyuser/${user.id}/`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
            credentials: "include",
          },
        );

        const result = await response.json();

        console.log(result);
      }
    })();
  }, []);

  if (!user || user.role === "user") {
    notFound();
  }

  return (
    <PageDiv>
      <ServicesPageTitle>Услуги</ServicesPageTitle>
      <ServicesTable>
        <thead>
          <tr>
            <ServicesTitleCell>Услуга</ServicesTitleCell>
            <ServicesTitleCell>Время выполнения</ServicesTitleCell>
            <ServicesTitleCell>Перерыв после услуги</ServicesTitleCell>
            <ServicesTitleCell>Стоимость</ServicesTitleCell>
          </tr>
        </thead>
        <tbody>
          {services.map((service, index) => (
            <tr key={index}>
              <ServicesCell>{service.title}</ServicesCell>
              <ServicesCell>{service.time} мин.</ServicesCell>
              <ServicesCell>{service.break} мин.</ServicesCell>
              <ServicesCell>
                <ServicesPriceDiv>
                  {service.price} ₽
                  <ServiceButtonDiv>
                    <ServiceButton>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="100"
                        height="100"
                        viewBox="0 0 48 48"
                      >
                        <path d="M 36 5.0097656 C 34.205301 5.0097656 32.410791 5.6901377 31.050781 7.0507812 L 27.230469 10.871094 A 1.50015 1.50015 0 0 0 26.876953 11.222656 L 8.9160156 29.183594 C 8.4960384 29.603571 8.1884588 30.12585 8.0253906 30.699219 L 5.0585938 41.087891 A 1.50015 1.50015 0 0 0 6.9121094 42.941406 L 17.302734 39.974609 A 1.50015 1.50015 0 0 0 17.304688 39.972656 C 17.874212 39.808939 18.39521 39.50518 18.816406 39.083984 L 36.740234 21.158203 A 1.50015 1.50015 0 0 0 37.162109 20.736328 L 40.949219 16.949219 C 43.670344 14.228094 43.670344 9.7719064 40.949219 7.0507812 C 39.589209 5.6901377 37.794699 5.0097656 36 5.0097656 z M 36 7.9921875 C 37.020801 7.9921875 38.040182 8.3855186 38.826172 9.171875 A 1.50015 1.50015 0 0 0 38.828125 9.171875 C 40.403 10.74675 40.403 13.25325 38.828125 14.828125 L 35.888672 17.767578 L 30.232422 12.111328 L 33.171875 9.171875 C 33.957865 8.3855186 34.979199 7.9921875 36 7.9921875 z M 28.111328 14.232422 L 33.767578 19.888672 L 16.693359 36.962891 C 16.634729 37.021121 16.560472 37.065723 16.476562 37.089844 L 15.492188 37.371094 L 10.628906 32.507812 L 10.910156 31.521484 A 1.50015 1.50015 0 0 0 10.910156 31.519531 C 10.933086 31.438901 10.975086 31.366709 11.037109 31.304688 L 28.111328 14.232422 z M 9.6855469 35.806641 L 12.193359 38.314453 L 8.6835938 39.316406 L 9.6855469 35.806641 z"></path>
                      </svg>
                    </ServiceButton>
                    <ServiceButton>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="100"
                        height="100"
                        viewBox="0 0 48 48"
                      >
                        <path d="M 24 4 C 20.491685 4 17.570396 6.6214322 17.080078 10 L 10.238281 10 A 1.50015 1.50015 0 0 0 9.9804688 9.9785156 A 1.50015 1.50015 0 0 0 9.7578125 10 L 6.5 10 A 1.50015 1.50015 0 1 0 6.5 13 L 8.6386719 13 L 11.15625 39.029297 C 11.427329 41.835926 13.811782 44 16.630859 44 L 31.367188 44 C 34.186411 44 36.570826 41.836168 36.841797 39.029297 L 39.361328 13 L 41.5 13 A 1.50015 1.50015 0 1 0 41.5 10 L 38.244141 10 A 1.50015 1.50015 0 0 0 37.763672 10 L 30.919922 10 C 30.429604 6.6214322 27.508315 4 24 4 z M 24 7 C 25.879156 7 27.420767 8.2681608 27.861328 10 L 20.138672 10 C 20.579233 8.2681608 22.120844 7 24 7 z M 11.650391 13 L 36.347656 13 L 33.855469 38.740234 C 33.730439 40.035363 32.667963 41 31.367188 41 L 16.630859 41 C 15.331937 41 14.267499 40.033606 14.142578 38.740234 L 11.650391 13 z M 20.476562 17.978516 A 1.50015 1.50015 0 0 0 19 19.5 L 19 34.5 A 1.50015 1.50015 0 1 0 22 34.5 L 22 19.5 A 1.50015 1.50015 0 0 0 20.476562 17.978516 z M 27.476562 17.978516 A 1.50015 1.50015 0 0 0 26 19.5 L 26 34.5 A 1.50015 1.50015 0 1 0 29 34.5 L 29 19.5 A 1.50015 1.50015 0 0 0 27.476562 17.978516 z"></path>
                      </svg>
                    </ServiceButton>
                  </ServiceButtonDiv>
                </ServicesPriceDiv>
              </ServicesCell>
            </tr>
          ))}
        </tbody>
      </ServicesTable>
      <ServicesButton onClick={() => setIsActive(true)}>
        Добавить услугу
      </ServicesButton>
      {isActive && (
        <PageDarkOverlay>
          <PopupItem setIsActive={setIsActive} />
        </PageDarkOverlay>
      )}
    </PageDiv>
  );
};

export default Page;
