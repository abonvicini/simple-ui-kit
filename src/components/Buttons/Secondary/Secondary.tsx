import React from "react";
import BaseButton from "@components/Buttons/BaseButton";
import styles from "./Secondary.styles";

export type SecondaryProps = {
    text: string;
    onClick: Function;
    disabled?: boolean;
    tabIndex?: number;
    ariaLabel?: string;
    isActive?: boolean;
    isRounded?: boolean;
    size?: "small" | "medium" | "large";

};

const Secondary = (props: SecondaryProps) => {
    let className: string;
    if (props.isActive) {
        className = styles.secondary + " " + styles.activeSecondary;
    } else {
        className = styles.secondary;
    }

    return (
        <BaseButton
            className={className}
            onClick={props.onClick}
            disabled={props.disabled}
            tabIndex={props.tabIndex}
            ariaLabel={props.ariaLabel}
            isRounded={props.isRounded}
            size={props.size ? props.size : 'medium'}
        >
            {props.text}
        </BaseButton>
    );
};

export default Secondary;
