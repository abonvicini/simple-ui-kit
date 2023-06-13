import React from "react";
import Primary from "../Primary";

import { assetEnum } from "@components/Assets/24/AssetOrchester/AssetOrchester";
import { getAsset } from "@components/Buttons/utils/functions";

import styles from "./OnlyIcon.styles";

export type OnlyIconProps = {
    onClick: Function;
    disabled?: boolean;
    tabIndex?: number;
    ariaLabel?: string;
    isActive?: boolean;
    isRounded?: boolean;
    size?: "small" | "medium" | "large";
    icon: assetEnum;
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
            style={props.size !== 'large' ? styles.paddingDefault : styles.paddingLarge}
        >
            {getAsset(props)}
        </Primary>
    );
};

export default OnlyIcon;
