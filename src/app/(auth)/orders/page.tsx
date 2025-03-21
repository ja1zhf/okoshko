"use client";

import Image from "next/image";
import { PageDiv } from "@/app/styles/style";
import {
  OrderAcceptButton,
  OrderButtons,
  OrderCancelButton,
  OrderDetailsDiv,
  OrderDiv,
  OrderInput,
  OrderMasterInfoDiv,
  OrderReviewDiv,
  OrderSendReviewButton,
  OrderServicesListDiv,
  OrdersListDiv,
  OrdersPageTitle,
  ScoreButton,
  ScoresDiv,
  StatusButton,
  StatusListDiv,
  TitleButton,
} from "./style";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { formatTime } from "@/tools/tools";
import UserContext from "@/contexts/userContext";
import { usePopup } from "@/contexts/popupContext";
import IndicatorItem from "@/app/components/indicator/indicatorItem";
import { useNotifications } from "@/contexts/notificationContext";

const Page = () => {
  const { user } = useContext(UserContext);

  const { setCount } = useNotifications();

  const { showPopup } = usePopup();

  const [isMasterOrders, setIsMasterOrders] = useState(false);

  const [userOrders, setUserOrders] = useState<UserOrderType[]>([]);
  const [masterOrders, setMasterOrders] = useState<MasterOrderType[]>([]);

  const [reviewText, setReviewText] = useState("");
  const [score, setScore] = useState(1);

  const [selectedStatus, setSelectedStatus] = useState(0);

  const statuses = ["Запланировано", "В процессе", "Завершенно", "Отменено"];

  useEffect(() => {
    requestUser();

    const user = localStorage.getItem("user");

    if (user) {
      const userObj: ProfileType = JSON.parse(user);

      if (userObj.role === "master") {
        requestMaster();
      }
    }
  }, []);

  const requestUser = async () => {
    const response = await fetch(
      `https://dev.okoshko.space/table/slot/appointments/my`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      },
    );

    const result: UserOrderType[] = await response.json();

    console.log(result);

    setUserOrders(result);
  };

  const requestMaster = async () => {
    const response = await fetch(
      `https://dev.okoshko.space/table/slot/appointments/master`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      },
    );

    const result: MasterOrderType[] = await response.json();

    setMasterOrders(result);
  };

  const accept = async (id: number) => {
    await fetch(
      `https://dev.okoshko.space/table/slot/appointments/accept/${id}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      },
    );

    requestUser();

    const user = localStorage.getItem("user");

    if (user) {
      const userObj: ProfileType = JSON.parse(user);

      if (userObj.role === "master") {
        requestMaster();
      }
    }
  };

  const cancel = async (id: number) => {
    await fetch(
      `https://dev.okoshko.space/table/slot/appointments/cancel/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      },
    );

    requestUser();

    const user = localStorage.getItem("user");

    if (user) {
      const userObj: ProfileType = JSON.parse(user);

      if (userObj.role === "master") {
        requestMaster();
      }
    }
  };

  const sendReview = async (id: number) => {
    await fetch(`https://dev.okoshko.space/review/write_review`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        appointment: id,
        rating: score,
        review_text: reviewText,
      }),
    });

    requestUser();

    const user = localStorage.getItem("user");

    if (user) {
      const userObj: ProfileType = JSON.parse(user);

      if (userObj.role === "master") {
        requestMaster();
      }
    }

    showPopup("success", "Отзыв успешно оставлен");
  };

  const deleteNotification = async () => {
    await fetch(`https://dev.okoshko.space/notifications/delete_all/`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });

    setCount(0);
  };

  return (
    <PageDiv>
      <TitleButton>
        <OrdersPageTitle
          $isActive={!isMasterOrders}
          onClick={() => setIsMasterOrders(false)}
        >
          Мои заказы
        </OrdersPageTitle>
        {user?.role === "master" && (
          <OrdersPageTitle
            $isActive={isMasterOrders}
            onClick={() => {
              setIsMasterOrders(true);
              deleteNotification();
            }}
          >
            Входящие заказы <IndicatorItem top={-6} right={-6} />
          </OrdersPageTitle>
        )}
      </TitleButton>
      <StatusListDiv>
        <StatusButton
          $isSelected={selectedStatus === -1}
          onClick={() => setSelectedStatus(-1)}
        >
          Все
        </StatusButton>
        {statuses.map((item, index) => (
          <StatusButton
            key={index}
            $isSelected={selectedStatus === index}
            onClick={() => setSelectedStatus(index)}
          >
            {item}
          </StatusButton>
        ))}
      </StatusListDiv>
      <OrdersListDiv>
        {!isMasterOrders &&
          userOrders.map((order, index) => {
            if (selectedStatus === order.status || selectedStatus === -1) {
              return (
                <OrderDiv key={index}>
                  <OrderDetailsDiv>
                    <h2>
                      {order.slot ? (
                        <>
                          {order.slot.date} {formatTime(order.slot.start_time)}
                        </>
                      ) : (
                        "null"
                      )}
                    </h2>
                    <p>{order.master_info.address}</p>
                  </OrderDetailsDiv>
                  <OrderMasterInfoDiv>
                    <div>
                      <Image
                        alt="avatar"
                        width={55}
                        height={55}
                        src={
                          order.master_info.avatar
                            ? order.master_info.avatar
                            : "/img/no_avatar.jpg"
                        }
                        style={{ objectFit: "cover" }}
                      />
                      <div>
                        <h3>
                          {order.master_info.name} {order.master_info.surname}
                        </h3>
                        <div>
                          <div className="score">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              x="0px"
                              y="0px"
                              width="100"
                              height="100"
                              viewBox="0 0 50 50"
                            >
                              <path d="M10.2,48.6c-0.2,0-0.4-0.1-0.6-0.2c-0.3-0.2-0.5-0.7-0.4-1.1l4.4-16.4L0.4,20.2C0,20-0.1,19.5,0,19.1 c0.1-0.4,0.5-0.7,0.9-0.7l17-0.9l6.1-15.9C24.2,1.3,24.6,1,25,1c0.4,0,0.8,0.3,0.9,0.6l6.1,15.9l17,0.9c0.4,0,0.8,0.3,0.9,0.7 c0.1,0.4,0,0.8-0.3,1.1L36.4,30.9l4.4,16.4c0.1,0.4,0,0.8-0.4,1.1c-0.3,0.2-0.8,0.3-1.1,0L25,39.2l-14.3,9.2 C10.5,48.6,10.4,48.6,10.2,48.6z"></path>
                            </svg>
                            <p>{order.master_info.reviews.length}</p>
                          </div>
                          <p>{order.master_info.reviews.length} оценок</p>
                        </div>
                      </div>
                    </div>
                    <Link href={`tel:+${order.master_info.phone}`}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="100"
                        height="100"
                        viewBox="0 0 50 50"
                      >
                        <path d="M 39.03125 47 C 39.015625 47 39 47 38.984375 47 C 31.46875 46.753906 22.664063 39.46875 16.597656 33.398438 C 10.523438 27.328125 3.238281 18.519531 3.003906 11.039063 C 2.917969 8.414063 9.359375 3.746094 9.425781 3.699219 C 11.097656 2.535156 12.953125 2.949219 13.714844 4.003906 C 14.230469 4.71875 19.113281 12.117188 19.644531 12.957031 C 20.195313 13.828125 20.113281 15.125 19.425781 16.425781 C 19.046875 17.148438 17.789063 19.359375 17.199219 20.390625 C 17.835938 21.296875 19.519531 23.519531 22.996094 26.996094 C 26.476563 30.472656 28.695313 32.160156 29.605469 32.796875 C 30.636719 32.207031 32.847656 30.949219 33.570313 30.570313 C 34.851563 29.890625 36.140625 29.804688 37.019531 30.34375 C 37.917969 30.894531 45.296875 35.800781 45.976563 36.273438 C 46.546875 36.675781 46.914063 37.363281 46.988281 38.164063 C 47.058594 38.972656 46.808594 39.828125 46.289063 40.574219 C 46.246094 40.636719 41.632813 47 39.03125 47 Z"></path>
                      </svg>
                    </Link>
                  </OrderMasterInfoDiv>
                  <OrderServicesListDiv>
                    <div key={index}>
                      <p>{order.service.title}</p>
                      <p>{order.service.price} ₽</p>
                    </div>
                    <div>
                      <p>Статус: {statuses[order.status]}</p>
                    </div>
                  </OrderServicesListDiv>
                  {order.status === 0 && (
                    <OrderCancelButton onClick={() => cancel(order.id)}>
                      Отменить заказ
                    </OrderCancelButton>
                  )}
                  {order.status === 2 && (
                    <OrderReviewDiv>
                      <ScoresDiv>
                        {[1, 2, 3, 4, 5].map((item) => (
                          <ScoreButton
                            key={item}
                            $isSelected={item <= score}
                            onClick={() => setScore(item)}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              x="0px"
                              y="0px"
                              width="100"
                              height="100"
                              viewBox="0 0 50 50"
                            >
                              <path d="M10.2,48.6c-0.2,0-0.4-0.1-0.6-0.2c-0.3-0.2-0.5-0.7-0.4-1.1l4.4-16.4L0.4,20.2C0,20-0.1,19.5,0,19.1 c0.1-0.4,0.5-0.7,0.9-0.7l17-0.9l6.1-15.9C24.2,1.3,24.6,1,25,1c0.4,0,0.8,0.3,0.9,0.6l6.1,15.9l17,0.9c0.4,0,0.8,0.3,0.9,0.7 c0.1,0.4,0,0.8-0.3,1.1L36.4,30.9l4.4,16.4c0.1,0.4,0,0.8-0.4,1.1c-0.3,0.2-0.8,0.3-1.1,0L25,39.2l-14.3,9.2 C10.5,48.6,10.4,48.6,10.2,48.6z"></path>
                            </svg>
                          </ScoreButton>
                        ))}
                      </ScoresDiv>
                      <OrderInput
                        placeholder="Оставить отзыв"
                        value={reviewText}
                        onChange={(e) => setReviewText(e.target.value)}
                      />
                      <OrderSendReviewButton
                        onClick={() => sendReview(order.id)}
                      >
                        Отправить
                      </OrderSendReviewButton>
                    </OrderReviewDiv>
                  )}
                </OrderDiv>
              );
            }
          })}
        {isMasterOrders &&
          user?.role === "master" &&
          masterOrders.map((order, index) => {
            if (selectedStatus === order.status || selectedStatus === -1) {
              return (
                <OrderDiv key={index}>
                  <OrderDetailsDiv>
                    <h2>
                      {order.slot ? (
                        <>
                          {order.slot.date} {formatTime(order.slot.start_time)}
                        </>
                      ) : (
                        "null"
                      )}
                    </h2>
                  </OrderDetailsDiv>
                  <OrderMasterInfoDiv>
                    <div>
                      <Image
                        alt="avatar"
                        width={55}
                        height={55}
                        src={
                          order.client.avatar_url
                            ? order.client.avatar_url
                            : "/img/no_avatar.jpg"
                        }
                        style={{ objectFit: "cover" }}
                      />
                      <div>
                        <h3>
                          {order.client.first_name} {order.client.last_name}
                        </h3>
                      </div>
                    </div>
                    <Link href={`tel:+${order.client.phone}`}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="100"
                        height="100"
                        viewBox="0 0 50 50"
                      >
                        <path d="M 39.03125 47 C 39.015625 47 39 47 38.984375 47 C 31.46875 46.753906 22.664063 39.46875 16.597656 33.398438 C 10.523438 27.328125 3.238281 18.519531 3.003906 11.039063 C 2.917969 8.414063 9.359375 3.746094 9.425781 3.699219 C 11.097656 2.535156 12.953125 2.949219 13.714844 4.003906 C 14.230469 4.71875 19.113281 12.117188 19.644531 12.957031 C 20.195313 13.828125 20.113281 15.125 19.425781 16.425781 C 19.046875 17.148438 17.789063 19.359375 17.199219 20.390625 C 17.835938 21.296875 19.519531 23.519531 22.996094 26.996094 C 26.476563 30.472656 28.695313 32.160156 29.605469 32.796875 C 30.636719 32.207031 32.847656 30.949219 33.570313 30.570313 C 34.851563 29.890625 36.140625 29.804688 37.019531 30.34375 C 37.917969 30.894531 45.296875 35.800781 45.976563 36.273438 C 46.546875 36.675781 46.914063 37.363281 46.988281 38.164063 C 47.058594 38.972656 46.808594 39.828125 46.289063 40.574219 C 46.246094 40.636719 41.632813 47 39.03125 47 Z"></path>
                      </svg>
                    </Link>
                  </OrderMasterInfoDiv>
                  <OrderServicesListDiv>
                    <div key={index}>
                      <p>{order.service.title}</p>
                      <p>{order.service.price} ₽</p>
                    </div>
                    <div>
                      <p>Статус: {statuses[order.status]}</p>
                    </div>
                  </OrderServicesListDiv>
                  <OrderButtons>
                    {order.status === 0 && (
                      <>
                        <OrderCancelButton onClick={() => cancel(order.id)}>
                          Отклонить заказ
                        </OrderCancelButton>
                        <OrderAcceptButton onClick={() => accept(order.id)}>
                          Подтвердить заказ
                        </OrderAcceptButton>
                      </>
                    )}
                    {order.status === 1 && (
                      <>
                        <OrderCancelButton onClick={() => cancel(order.id)}>
                          Отменить заказ
                        </OrderCancelButton>
                      </>
                    )}
                  </OrderButtons>
                </OrderDiv>
              );
            }
          })}
      </OrdersListDiv>
    </PageDiv>
  );
};

export default Page;
