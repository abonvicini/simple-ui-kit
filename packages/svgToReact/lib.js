import fs from "fs";
// import path from "path";
// const dirname = new URL("./", import.meta.url);

export const createDir = ({ pathName }) => {
    const newDirName = new URL(`./${pathName}`, import.meta.url);
    return fs.mkdirSync(newDirName, (err) => {
        if (err) throw err;

        console.log(`
        ${pathName} folder created!
        `);
    });
};

export const writeFile = ({
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
            flag: mode === "append" ? "a" : "w",
        },
        (err) => {
            if (err) throw err;
            console.log(`File: ${fileName} was wrote successfully`);
        }
    );
};

export const parseFileName = (fileName) => {
    const nameSplited = fileName.split(".");
    return nameSplited[0];
};

export const camelize = (str) => {
    const arrayString = str.split("-");
    const capital = arrayString.map(
        (item) => item.charAt(0).toUpperCase() + item.slice(1).toLowerCase()
    );
    const capitalString = capital.join("");

    return capitalString;
};

export const createStoriesContent = ({ componentName, size }) => {
    const content = `import React from "react";
    import ${componentName} from "./${componentName}";
    
    export default {
        title: 'Assets/${size}/${componentName}',
        component: ${componentName}
    };
    
    export const Icon = () => <${componentName} />;`;

    return content;
};

export const getStoriesContentOrchester = ({ assetSize }) => {
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

export const parseNames = ({ data }) => {
    const namesParsed = [];
    data.forEach((svg) => {
        const camelizedName = camelize(parseFileName(svg));
        namesParsed.push(camelizedName);
    });
    return namesParsed;
};


// export const createFile = ({ pathName, fileName }) => {
//     const newPath = path.join(dirname + `/${pathName}/${fileName}`);
//     return fs.open(newPath, "w", (err, data) => {
//         if (err) throw err;
//         console.log(data, `${fileName} Created in ${newPath}`);
//     });
// };

// export const moveFile = ({ fileName, outDir }) => {
//     const oldPath = path.join(`${dirname}/dist/${fileName}.tsx`);
//     const newPath = path.join(
//         `${dirname}/${outDir}/${fileName}/${fileName}.tsx`
//         );

//         fs.renameSync(oldPath, newPath, function (err) {
//             if (err) throw err;
//             console.log("Successfully renamed - AKA moved!");
//     });
// };

// export const deleteDir = (param) => {
//     const dir = path.join(`${dirname}/${param}`);

//     // delete directory recursively
//     return fs.rmSync(dir, { recursive: true }, (err) => {
//         if (err) {
//             throw err;
//         }
//         console.log(`${dir} is deleted!`);
//     });
// };
