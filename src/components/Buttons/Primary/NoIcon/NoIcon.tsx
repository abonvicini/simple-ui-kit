import React from "react";
import Primary from "../Primary";

export type NoIconProps = {
    text: string;
    onClick: Function;
    disabled?: boolean;
    tabIndex?: number;
    ariaLabel?: string;
    isActive?: boolean;
    isRounded?: boolean;
    size?: "small" | "medium" | "large";
};

const NoIcon = (props: NoIconProps) => {
    return (
        <Primary
            onClick={props.onClick}
            disabled={props.disabled}
            tabIndex={props.tabIndex}
            ariaLabel={props.ariaLabel}
            isRounded={props.isRounded}
            size={props.size}
        >
            {props.text} {/* TODO: Hacer componentes de textos */}
        </Primary>
    );
};

export default NoIcon;
