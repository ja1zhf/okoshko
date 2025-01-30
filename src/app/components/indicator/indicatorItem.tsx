import { useState } from "react";
import { IndicatorSpan } from "./style";
import { useNotifications } from "@/contexts/notificationContext";

interface Props {
    top?: number;
    right?: number;
}

const IndicatorItem = (props: Props) => {
    const { top, right } = props;

    const { count } = useNotifications();

    if(count > 0) {
        return <IndicatorSpan $top={top} $right={right}>{count}</IndicatorSpan>;
    }
}

export default IndicatorItem;