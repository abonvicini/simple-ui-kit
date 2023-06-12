import React from "react";
import AssetOrchester16, { assetArray, assetEnum } from "./AssetOrchester";

export default {
    title: "Assets/16/AssetOrchester",
    component: AssetOrchester16,
};

export const AssetOrchesterStories = (args: { asset: assetEnum }) => (
    <AssetOrchester16 asset={args.asset} />
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
