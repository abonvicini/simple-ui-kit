import React from "react";
import OnlyIcon, { OnlyIconProps } from "./OnlyIcon";


export default {
    title: 'Buttons/Primary/OnlyIcon',
    component: OnlyIcon
};

export const Small = (args: OnlyIconProps) => <OnlyIcon {...args} />;

Small.args = {
    isRounded: false,
    isActive: false,
    disabled: false,
    size: 'small',
    onClick: () => alert('My super click'),
}

Small.argTypes = {
    isRounded: { control: "boolean" },
    isActive: { control: "boolean" },
    disabled: { control: "boolean" },
    size: { control: { type: "radio" }, options: ["large", "medium", "small"] },
}

export const Medium = (args: OnlyIconProps) => <OnlyIcon {...args} />;

Medium.args = {
    isRounded: false,
    isActive: false,
    disabled: false,
    size: 'medium',
    onClick: () => alert('My super click')
}

Medium.argTypes = {
    isRounded: { control: "boolean" },
    isActive: { control: "boolean" },
    disabled: { control: "boolean" },
    size: { control: { type: "radio" }, options: ["large", "medium", "small"] },
}

export const Large = (args: OnlyIconProps) => <OnlyIcon {...args} />;

Large.args = {
    isRounded: false,
    isActive: false,
    disabled: false,
    size: 'large',
    onClick: () => alert('My super click')
}

Large.argTypes = {
    isRounded: { control: "boolean" },
    isActive: { control: "boolean" },
    disabled: { control: "boolean" },
    size: { control: { type: "radio" }, options: ["large", "medium", "small"] },
}

