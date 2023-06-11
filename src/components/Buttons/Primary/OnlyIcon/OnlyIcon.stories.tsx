import React from "react";
import OnlyIcon, { OnlyIconProps } from "./OnlyIcon";


export default {
    title: 'Buttons/Primary/OnlyIcon',
    component: OnlyIcon
};

export const Medium = (args: OnlyIconProps) => <OnlyIcon {...args} />;

Medium.args = {
    isRounded: false,
    isActive: false,
    disabled: false,
    tabIndex: 0,
    onClick: () => alert('My super click')
}

Medium.argTypes = {
    isRounded: { control: "boolean" },
    isActive: { control: "boolean" },
    disabled: { control: "boolean" },
    size: { control: { type: "radio" }, options: ["large", "medium", "small"] },
}
