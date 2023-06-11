import React from "react";
import Primary from "../Primary";
import { Airplay } from "@components/Assets/24/Airplay";

export type OnlyIconProps = {
    onClick: Function;
    disabled?: boolean;
    tabIndex?: number;
    ariaLabel?: string;
    isActive?: boolean;
    isRounded?: boolean;
    size?: "small" | "medium" | "large";
};

const OnlyIcon = (props: OnlyIconProps) => {
    return (
        <Primary
            onClick={props.onClick}
            disabled={props.disabled}
            tabIndex={props.tabIndex}
            ariaLabel={props.ariaLabel}
            isRounded={props.isRounded}
            size={props.size}
            isActive={props.isActive}
        >

           <Airplay />
        </Primary>
    );
};

export default OnlyIcon;
