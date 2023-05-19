import React from "react";
import BaseButton from "@components/Buttons/BaseButton";
import styles from "./Primary.styles";

export type PrimaryProps = {
    text: string;
    onClick: Function;
    disabled?: boolean;
    tabIndex?: number;
    ariaLabel?: string;
    isActive?: boolean;
    isRounded?: boolean;
    size?: "small" | "medium" | "large";

};

const Primary = (props: PrimaryProps) => {
    let className: string;
    if (props.isActive) {
        className = styles.primary + " " + styles.activePrimary;
    } else {
        className = styles.primary;
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

export default Primary;
