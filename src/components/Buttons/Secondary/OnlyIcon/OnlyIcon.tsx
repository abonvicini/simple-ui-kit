import React from "react";
import Secondary from "../Secondary";

import { assetEnum } from "@components/Assets/24/AssetOrchester/AssetOrchester";
import { getAsset } from "@components/Buttons/utils/functions";

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
        <Secondary
            onClick={props.onClick}
            disabled={props.disabled}
            tabIndex={props.tabIndex}
            ariaLabel={props.ariaLabel}
            isRounded={props.isRounded}
            size={props.size}
            isActive={props.isActive}
        >
            {getAsset(props)}
        </Secondary>
    );
};

export default OnlyIcon;
