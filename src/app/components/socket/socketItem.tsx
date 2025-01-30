"use client";

import { useNotifications } from "@/contexts/notificationContext";
import { useEffect, useState } from "react";

const SocketItem = () => {
    const WS_URL = "wss://dev.okoshko.space/ws/notifications/";

    const { setCount } = useNotifications();

    const getMasterInfo = async () => {
        const response = await fetch(
            `https://dev.okoshko.space/notifications/all/`,
            {
                method: "GET",
                headers: {
                "Content-Type": "application/json",
                },
                credentials: "include",
            }
        );

        const result: any[] = await response.json();

        setCount(result.length)
    }

    useEffect(() => {
        const ws = new WebSocket(WS_URL);

        getMasterInfo();

        ws.onopen = () => {
            console.log("Подключено к WebSocket-серверу");
        };

        ws.onmessage = () => { 
            getMasterInfo();
        };

        ws.onclose = () => {
            console.log("Соединение закрыто");
        };

        return () => {
        ws.close();
        };
    }, []);

    return null;
}

export default SocketItem;