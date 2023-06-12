import React from "react";
import Secondary from "../Secondary";

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
        <Secondary
            onClick={props.onClick}
            disabled={props.disabled}
            tabIndex={props.tabIndex}
            ariaLabel={props.ariaLabel}
            isRounded={props.isRounded}
            size={props.size}
            isActive={props.isActive}
        >
            {props.text} {/* TODO: Hacer componentes de textos */}
        </Secondary>
    );
};

export default NoIcon;
