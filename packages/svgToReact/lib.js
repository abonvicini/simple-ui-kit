import fs from "fs";
import { transform } from "@svgr/core";

// import path from "path";
// const dirname = new URL("./", import.meta.url);

const writeFile = ({
    folderName,
    camelizedName,
    fileName,
    content,
    mode,
}) => {
    const url = new URL(
        `./${folderName}/${camelizedName}/${fileName}`,
        import.meta.url
    );
    return fs.writeFileSync(
        url,
        content,
        {
            flag: (mode === "append") ? "a" : "w",
        },
        (err) => {
            if (err) throw err;
            console.log(`File: ${fileName} was wrote successfully`);
        }
    );
};

const parseFileName = (fileName) => {
    const nameSplited = fileName.split(".");
    return nameSplited[0];
};

const camelize = (str) => {
    const arrayString = str.split("-");
    const capital = arrayString.map(
        (item) => item.charAt(0).toUpperCase() + item.slice(1).toLowerCase()
    );
    const capitalString = capital.join("");

    return capitalString;
};

const createStoriesContent = ({ componentName, size }) => {
    const content = `import React from "react";
    import ${componentName} from "./${componentName}";
    
    export default {
        title: 'Assets/${size}/${componentName}',
        component: ${componentName}
    };
    
    export const Icon = () => <${componentName} />;`;

    return content;
};

const getStoriesContentOrchester = ({ assetSize }) => {
    const content = `import React from "react";
import AssetOrchester, { assetArray, assetEnum } from "./AssetOrchester";

export default {
    title: "Assets/${assetSize}/AssetOrchester",
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
`;

    return content;
};

export const createDir = ({ pathName }) => {
    const newDirName = new URL(`./${pathName}`, import.meta.url);
    return fs.mkdirSync(newDirName, (err) => {
        if (err) throw err;

        console.log(`
        ${pathName} folder created!
        `);
    });
};

export const parseNames = ({ data }) => {
    const namesParsed = [];
    data.forEach((svg) => {
        const camelizedName = camelize(parseFileName(svg));
        namesParsed.push(camelizedName);
    });
    return namesParsed;
};

export const createAOTsx = (namesParsed, folderName) => {
    // Crea y escribe AssetOrchester.tsx con imports
namesParsed.forEach((svgName, index) => {
    const camelizedName = svgName;
    const textImport = `import { ${camelizedName} } from '../${camelizedName}';
`;
    const fistLine = `import React from 'react';
${textImport}`;

    const contentImports = (index === 0) ? fistLine : textImport;

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

// Escribe estructura de componente y su exportacion
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
};

export const createAOStories = (assetSize, folderName) => {

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
};

export const createAOIndex = (folderName) => {
    //  Crea y escribe index.tsx para orchester
    writeFile({
        folderName: folderName,
        camelizedName: "AssetOrchester",
        fileName: `index.tsx`,
        content: `export { default } from './AssetOrchester';`,
    });
};

export const createAssets = (files, folderName, ICONS_PATH, assetSize) => {
    // Crea estructura componetizada por cada SVG
files.forEach((svg) => {
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
};
