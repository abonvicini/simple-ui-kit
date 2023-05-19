import React from "react";
import Primary, { PrimaryProps } from "./Primary";

export default {
    title: 'Buttons/Primary',
    component: Primary
};

export const Small = (args: PrimaryProps) => <Primary {...args} />;

Small.args = {
    text: 'My Button',
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

export const Medium = (args: PrimaryProps) => <Primary {...args} />;

Medium.args = {
    text: 'My Button',
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

export const Large = (args: PrimaryProps) => <Primary {...args} />;

Large.args = {
    text: 'My Button',
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

