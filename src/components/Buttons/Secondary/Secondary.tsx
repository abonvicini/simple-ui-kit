import React, { ReactNode } from "react";
import BaseButton from "@components/Buttons/BaseButton";
import styles from "./Secondary.styles";

export type SecondaryProps = {
    children: ReactNode;
    onClick: Function;
    disabled?: boolean;
    tabIndex?: number;
    ariaLabel?: string;
    isActive?: boolean;
    isRounded?: boolean;
    size?: "small" | "medium" | "large";
    style?: string;
};

const Secondary = (props: SecondaryProps) => {
    let className: string;
    if (props.isActive) {
        className = styles.secondary + " " + styles.activeSecondary;
    } else {
        className = styles.secondary;
    }

    if(props.disabled) {
        className = className + " " + styles.disabled
    }

    if (props.style) {
        className = className + " " + props.style;
    }

    return (
        <BaseButton
            className={className}
            onClick={props.onClick}
            disabled={props.disabled}
            tabIndex={props.tabIndex}
            ariaLabel={props.ariaLabel}
            isRounded={props.isRounded}
            size={props.size ? props.size : "medium"}
        >
            {props.children}
        </BaseButton>
    );
};

export default Secondary;
