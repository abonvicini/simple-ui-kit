import React from "react";
import NoIcon, { NoIconProps } from "./NoIcon";


export default {
    title: 'Buttons/Primary/NoIcon',
    component: NoIcon
};

export const Small = (args: NoIconProps) => <NoIcon {...args} />;

Small.args = {
    text: 'Button',
    isRounded: false,
    isActive: false,
    disabled: false,
    size: 'small',
    onClick: () => alert('My super click'),
}

Small.argTypes = {
    text: {control: 'text'},
    isRounded: { control: "boolean" },
    isActive: { control: "boolean" },
    disabled: { control: "boolean" },
    size: { control: { type: "radio" }, options: ["large", "medium", "small"] },
}

export const Medium = (args: NoIconProps) => <NoIcon {...args} />;

Medium.args = {
    text: 'Button',
    isRounded: false,
    isActive: false,
    disabled: false,
    size: 'medium',
    onClick: () => alert('My super click')
}

Medium.argTypes = {
    text: {control: 'text'},
    isRounded: { control: "boolean" },
    isActive: { control: "boolean" },
    disabled: { control: "boolean" },
    size: { control: { type: "radio" }, options: ["large", "medium", "small"] },
}

export const Large = (args: NoIconProps) => <NoIcon {...args} />;

Large.args = {
    text: 'Button',
    isRounded: false,
    isActive: false,
    disabled: false,
    size: 'large',
    onClick: () => alert('My super click')
}

Large.argTypes = {
    text: {control: 'text'},
    isRounded: { control: "boolean" },
    isActive: { control: "boolean" },
    disabled: { control: "boolean" },
    size: { control: { type: "radio" }, options: ["large", "medium", "small"] },
}

