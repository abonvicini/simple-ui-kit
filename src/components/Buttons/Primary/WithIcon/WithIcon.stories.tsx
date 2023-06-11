import React from "react";
import WithIcon, { WithIconProps } from "./WithIcon";


export default {
    title: 'Buttons/Primary/WithIcon',
    component: WithIcon
};

export const IconLeft = (args: WithIconProps) => <WithIcon {...args} />;

IconLeft.args = {
    iconRight: false,
    text: 'Button',
    isRounded: false,
    isActive: false,
    disabled: false,
    onClick: () => alert('My super click')
}

IconLeft.argTypes = {
    iconRight: { control: "boolean" },
    text: {control: 'text'},
    isRounded: { control: "boolean" },
    isActive: { control: "boolean" },
    disabled: { control: "boolean" },
    size: { control: { type: "radio" }, options: ["large", "medium", "small"] },
}

export const IconRigth = (args: WithIconProps) => <WithIcon {...args} />;

IconRigth.args = {
    iconRight: true,
    text: 'Button',
    isRounded: false,
    isActive: false,
    disabled: false,
    onClick: () => alert('My super click')
}

IconRigth.argTypes = {
    iconRight: { control: "boolean" },
    text: {control: 'text'},
    isRounded: { control: "boolean" },
    isActive: { control: "boolean" },
    disabled: { control: "boolean" },
    size: { control: { type: "radio" }, options: ["large", "medium", "small"] },
}


