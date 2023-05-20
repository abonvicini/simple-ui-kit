import React from "react";
import WithIcon, { WithIconProps } from "./WithIcon";


export default {
    title: 'Buttons/Primary/WithIcon',
    component: WithIcon
};

export const Small = (args: WithIconProps) => <WithIcon {...args} />;

Small.args = {
    iconRight: false,
    text: 'Button',
    isRounded: false,
    isActive: false,
    disabled: false,
    size: 'small',
    onClick: () => alert('My super click'),
}

Small.argTypes = {
    iconRight: { control: "boolean" },
    text: {control: 'text'},
    isRounded: { control: "boolean" },
    isActive: { control: "boolean" },
    disabled: { control: "boolean" },
    size: { control: { type: "radio" }, options: ["large", "medium", "small"] },
}

export const Medium = (args: WithIconProps) => <WithIcon {...args} />;

Medium.args = {
    iconRight: false,
    text: 'Button',
    isRounded: false,
    isActive: false,
    disabled: false,
    size: 'medium',
    onClick: () => alert('My super click')
}

Medium.argTypes = {
    iconRight: { control: "boolean" },
    text: {control: 'text'},
    isRounded: { control: "boolean" },
    isActive: { control: "boolean" },
    disabled: { control: "boolean" },
    size: { control: { type: "radio" }, options: ["large", "medium", "small"] },
}

export const Large = (args: WithIconProps) => <WithIcon {...args} />;

Large.args = {
    iconRight: false,
    text: 'Button',
    isRounded: false,
    isActive: false,
    disabled: false,
    size: 'large',
    onClick: () => alert('My super click')
}

Large.argTypes = {
    iconRight: { control: "boolean" },
    text: {control: 'text'},
    isRounded: { control: "boolean" },
    isActive: { control: "boolean" },
    disabled: { control: "boolean" },
    size: { control: { type: "radio" }, options: ["large", "medium", "small"] },
}

