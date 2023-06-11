import React from "react";
import NoIcon, { NoIconProps } from "./NoIcon";


export default {
    title: 'Buttons/Primary/NoIcon',
    component: NoIcon
};

export const Medium = (args: NoIconProps) => <NoIcon {...args} />;

Medium.args = {
    text: 'Button',
    isRounded: false,
    isActive: false,
    disabled: false,
    onClick: () => alert('My super click')
}

Medium.argTypes = {
    text: {control: 'text'},
    isRounded: { control: "boolean" },
    isActive: { control: "boolean" },
    disabled: { control: "boolean" },
    size: { control: { type: "radio" }, options: ["large", "medium", "small"] },
}

