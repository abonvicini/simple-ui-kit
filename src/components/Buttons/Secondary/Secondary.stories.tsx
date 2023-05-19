import React from "react";
import Secondary, { SecondaryProps } from "./Secondary";

export default {
    title: 'Buttons/Secondary',
    component: Secondary
};

export const Small = (args: SecondaryProps) => <Secondary {...args} />;

Small.args = {
    text: 'My Button',
    isRounded: false,
    isActive: false,
    disabled: false,
    size: 'small',
    onClick: () => alert('My super click')
}

Small.argTypes = {
    text: {control: 'text'},
    isRounded: { control: "boolean" },
    isActive: { control: "boolean" },
    disabled: { control: "boolean" },
    size: { control: { type: "radio" }, options: ["large", "medium", "small"] },
}

export const Medium = (args: SecondaryProps) => <Secondary {...args} />;

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

export const Large = (args: SecondaryProps) => <Secondary {...args} />;

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

