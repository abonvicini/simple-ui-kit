import React from "react";
import WithIcon, { WithIconProps } from "./WithIcon";
import { assetArray } from "@components/Assets/24/AssetOrchester/AssetOrchester";


export default {
    title: 'Buttons/Secondary/WithIcon',
    component: WithIcon
};

export const IconLeft = (args: WithIconProps) => <WithIcon {...args} />;

IconLeft.args = {
    iconRight: false,
    text: 'Button',
    isRounded: false,
    isActive: false,
    disabled: false,
    onClick: () => alert('My super click'),
    icon: 'Activity'
}

IconLeft.argTypes = {
    iconRight: { control: "boolean" },
    text: {control: 'text'},
    isRounded: { control: "boolean" },
    isActive: { control: "boolean" },
    disabled: { control: "boolean" },
    size: { control: { type: "radio" }, options: ["large", "medium", "small"] },
    icon: { control: { type: "select" }, options: [...assetArray] },
}

export const IconRigth = (args: WithIconProps) => <WithIcon {...args} />;

IconRigth.args = {
    iconRight: true,
    text: 'Button',
    isRounded: false,
    isActive: false,
    disabled: false,
    onClick: () => alert('My super click'),
    icon: 'Activity'
}

IconRigth.argTypes = {
    iconRight: { control: "boolean" },
    text: {control: 'text'},
    isRounded: { control: "boolean" },
    isActive: { control: "boolean" },
    disabled: { control: "boolean" },
    size: { control: { type: "radio" }, options: ["large", "medium", "small"] },
    icon: { control: { type: "select" }, options: [...assetArray] },
}


