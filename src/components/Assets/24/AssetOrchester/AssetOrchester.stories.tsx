import React from "react";
import AssetOrchester24, { assetArray, assetEnum } from "./AssetOrchester";

export default {
    title: "Assets/24/AssetOrchester",
    component: AssetOrchester24,
};

export const AssetOrchesterStories = (args: { asset: assetEnum }) => (
    <AssetOrchester24 asset={args.asset} />
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
