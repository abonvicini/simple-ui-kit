import React, { Fragment } from "react";
import AssetOrchester24 from "@components/Assets/24/AssetOrchester/AssetOrchester";
import AssetOrchester16 from "@components/Assets/16/AssetOrchester/AssetOrchester";

import { OnlyIconProps } from "../Primary/OnlyIcon/OnlyIcon";
import { WithIconProps } from "../Primary/WithIcon/WithIcon";

export const getAsset = (props: OnlyIconProps | WithIconProps): JSX.Element => {
    return (
        props.size !== "small" ? (
            <Fragment>
                <AssetOrchester24 asset={props.icon} />
            </Fragment>
        ) : (
            <Fragment>
                <AssetOrchester16 asset={props.icon} />
            </Fragment>
        )
    )
}
