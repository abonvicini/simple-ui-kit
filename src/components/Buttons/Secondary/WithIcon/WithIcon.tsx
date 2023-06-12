import React from "react";
import Secondary from "../Secondary";

import { getAsset } from "@components/Buttons/utils/functions";
import { assetEnum } from "@components/Assets/24/AssetOrchester/AssetOrchester";

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
    icon: assetEnum
};

const WithIcon = (props: WithIconProps) => {
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
            {/* {props.iconRight ? `${props.text}` : `${props.text}`} */}
            {props.iconRight ? (
                <>
                    <span className={styles.paddingRight}>{props.text}</span>
                    {getAsset(props)}
                </>
            ) : (
                <>
                    {getAsset(props)}
                    <span className={styles.paddingLeft}>{props.text}</span>
                </>
            )}
            {/* TODO: Hacer componente de iconos y componente textos*/}
        </Secondary>
    );
};

export default WithIcon;
