import React from "react";
import OnlyIcon, { OnlyIconProps } from "./OnlyIcon";
import { assetArray } from "@components/Assets/24/AssetOrchester/AssetOrchester";


export default {
    title: 'Buttons/Secondary/OnlyIcon',
    component: OnlyIcon
};

export const Medium = (args: OnlyIconProps) => <OnlyIcon {...args} />;

Medium.args = {
    isRounded: false,
    isActive: false,
    disabled: false,
    tabIndex: 0,
    onClick: () => alert('My super click'),
    icon: 'Activity'
}

Medium.argTypes = {
    isRounded: { control: "boolean" },
    isActive: { control: "boolean" },
    disabled: { control: "boolean" },
    size: { control: { type: "radio" }, options: ["large", "medium", "small"] },
    icon: { control: { type: "select" }, options: [...assetArray] },
}
