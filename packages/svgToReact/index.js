import { transform } from "@svgr/core";
import fs from "fs";
import dotenv from "dotenv";
import {
    camelize,
    createDir,
    parseFileName,
    createStoriesContent,
    writeFile,
    parseNames,
    getStoriesContentOrchester,
} from "./lib.js";

dotenv.config();

const ICONS_PATH = process.env.ICONS_PATH;
const assetSize = process.env.ASSETS_SIZE;
console.log('1', new URL(ICONS_PATH, import.meta.url))
const files = fs.readdirSync(new URL(ICONS_PATH, import.meta.url));
const namesParsed = parseNames({ data: files });
const folderName = assetSize;

createDir({ pathName: folderName });
createDir({ pathName: `${folderName}/AssetOrchester` });

// Crea y escribe AssetOrchester.tsx con imports
namesParsed.forEach((svgName, index) => {
    const camelizedName = svgName;
    const textImport = `import { ${camelizedName} } from '../${camelizedName}';
`;
    const fistLine = `import React from 'react';
${textImport}`;

    const contentImports = index === 0 ? fistLine : textImport;

    writeFile({
        folderName: folderName,
        camelizedName: "AssetOrchester",
        fileName: `AssetOrchester.tsx`,
        content: contentImports,
        mode: "append",
    });
});

// Escribe AssetOrchester.tsx con Assets JSX Object
namesParsed.forEach((svgName, index) => {
    const length = namesParsed.length;
    const textJSX =
        index !== length - 1
            ? `    ${svgName}: <${svgName} />,  
`
            : `    ${svgName}: <${svgName} />
};
`;
    const fistLine = `
const Assets: {[key: string]: JSX.Element} = {
${textJSX}`;
    const contentJSX = index === 0 ? fistLine : textJSX;

    writeFile({
        folderName: folderName,
        camelizedName: "AssetOrchester",
        fileName: `AssetOrchester.tsx`,
        content: contentJSX,
        mode: "append",
    });
});

// Escribe AssetOrchester.tsx assetEnum Type
namesParsed.forEach((svgName, index) => {
    const lastItem = namesParsed.length - 1;
    const textEnum =
        index !== lastItem
            ? `   |'${svgName}'
`
            : `   |'${svgName}';
`;
    const firstLine = `
export type assetEnum =
${textEnum}`;

    const contentAssetEnum = index === 0 ? firstLine : textEnum;

    writeFile({
        folderName: folderName,
        camelizedName: "AssetOrchester",
        fileName: `AssetOrchester.tsx`,
        content: contentAssetEnum,
        mode: "append",
    });
});

// Escribe AssetOrchester.tsx con assetArray const
namesParsed.forEach((svgName, index) => {
    const lastItem = namesParsed.length - 1;
    const textArray =
        index !== lastItem
            ? `   '${svgName}',
`
            : `   '${svgName}'
];
`;
    const firstLine = `
export const assetArray = [
${textArray}`;

    const contentAssetArray = index === 0 ? firstLine : textArray;

    writeFile({
        folderName: folderName,
        camelizedName: "AssetOrchester",
        fileName: `AssetOrchester.tsx`,
        content: contentAssetArray,
        mode: "append",
    });
});

// Escribe componente y su exportacion
const finalContent = `const AssetOrchester = (props: { asset: assetEnum }) => {
    return Assets[props.asset];
};

export default AssetOrchester;
`;
writeFile({
    folderName: folderName,
    camelizedName: "AssetOrchester",
    fileName: `AssetOrchester.tsx`,
    content: finalContent,
    mode: "append",
});

// Crea y escribe AssetOrchester.stories.tsx
const storiesOrchesterContent = getStoriesContentOrchester({
    assetSize: assetSize,
});

writeFile({
    folderName: folderName,
    camelizedName: "AssetOrchester",
    fileName: `AssetOrchester.stories.tsx`,
    content: storiesOrchesterContent,
});

//  Crea y escribe index.tsx para orchester
writeFile({
    folderName: folderName,
    camelizedName: "AssetOrchester",
    fileName: `index.tsx`,
    content: `export { default } from './AssetOrchester';`,
});

// Crea estructura componetizada por cada SVG
files.forEach((svg) => {
    console.log(camelize(parseFileName(svg)));
    const camelizedName = camelize(parseFileName(svg));

    // Carpeta base del componente
    createDir({ pathName: `${folderName}/${camelizedName}` });

    // Se lee el el SVG
    fs.readFile(`${ICONS_PATH}/${svg}`, "utf8", (err, data) => {
        if (err) {
            console.error(err);
            return;
        }

        // Se transforma con la dependencia SVGR de manera sincrona
        const svgToReact = transform.sync(
            data,
            {
                plugins: [
                    "@svgr/plugin-svgo",
                    "@svgr/plugin-jsx",
                    "@svgr/plugin-prettier",
                ],
                icon: `${assetSize}px`,
            },
            { filePath: camelizedName, componentName: camelizedName }
        );

        // Se crea y escribe el SVG transformado en componente de React con extentension .tsx
        writeFile({
            folderName: folderName,
            camelizedName: camelizedName,
            fileName: `${camelizedName}.tsx`,
            content: svgToReact,
        });

        // Contenido del archivo .stories
        const contentStories = createStoriesContent({
            componentName: camelizedName,
            size: assetSize,
        });

        // Se crea y escribe el .stories
        writeFile({
            folderName: folderName,
            camelizedName: camelizedName,
            fileName: `${camelizedName}.stories.tsx`,
            content: contentStories,
        });

        // Se crea y escribe el index
        writeFile({
            folderName: folderName,
            camelizedName: camelizedName,
            fileName: "index.tsx",
            content: `export { default as ${camelizedName} } from './${camelizedName}';`,
        });
    });
});
