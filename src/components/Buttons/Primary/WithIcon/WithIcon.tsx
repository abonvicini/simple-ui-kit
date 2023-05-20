import React from "react";
import Primary from "../Primary";

export type WithIconProps = {
    iconRight:boolean;
    text: string
    onClick: Function;
    disabled?: boolean;
    tabIndex?: number;
    ariaLabel?: string;
    isActive?: boolean;
    isRounded?: boolean;
    size?: "small" | "medium" | "large";
};

const WithIcon = (props: WithIconProps) => {
    return (
        <Primary
            onClick={props.onClick}
            disabled={props.disabled}
            tabIndex={props.tabIndex}
            ariaLabel={props.ariaLabel}
            isRounded={props.isRounded}
            size={props.size}
        >

            {props.iconRight ? `${props.text} +` : `+ ${props.text}`}
             {/* TODO: Hacer componente de iconos y componente textos*/}
        </Primary>
    );
};

export default WithIcon;
