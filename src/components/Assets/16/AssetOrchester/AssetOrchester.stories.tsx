import React from "react";
import AssetOrchester, { assetArray, assetEnum } from "./AssetOrchester";

export default {
    title: "Assets/16/AssetOrchester",
    component: AssetOrchester,
};

export const AssetOrchesterStories = (args: { asset: assetEnum }) => (
    <AssetOrchester asset={args.asset} />
);

AssetOrchesterStories.argTypes = {
    asset: {
        control: {
            type: 'select',
            options: [
                ...assetArray
            ]
        }
    }
}

AssetOrchesterStories.args = {
    asset: 'Activity'
}
