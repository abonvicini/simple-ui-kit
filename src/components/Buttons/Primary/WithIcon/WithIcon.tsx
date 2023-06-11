import React from "react";
import Primary from "../Primary";
import { Airplay } from "@components/Assets/24/Airplay/index";
import styles from "./WithIcon.styles";

export type WithIconProps = {
    iconRight: boolean;
    text: string;
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
            isActive={props.isActive}
        >
            {/* {props.iconRight ? `${props.text}` : `${props.text}`} */}
            {props.iconRight ? (
                <>
                    <span className={styles.paddingRight}>{props.text}</span>
                    <Airplay />
                </>
            ) : (
                <>
                    <Airplay />
                    <span className={styles.paddingLeft}>{props.text}</span>
                </>
            )}
            {/* TODO: Hacer componente de iconos y componente textos*/}
        </Primary>
    );
};

export default WithIcon;
