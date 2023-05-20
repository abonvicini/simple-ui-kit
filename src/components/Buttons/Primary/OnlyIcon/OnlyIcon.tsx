import React from "react";
import Primary from "../Primary";

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
        >

            + {/* TODO: Hacer componente de iconos */}
        </Primary>
    );
};

export default OnlyIcon;
