
import fs from "fs";
import dotenv from "dotenv";
import {
    createDir,
    parseNames,
    createAOTsx,
    createAOStories,
    createAOIndex,
    createAssets
} from "./lib.js";

dotenv.config();

const ICONS_PATH = process.env.ICONS_PATH;
const assetSize = process.env.ASSETS_SIZE;
const files = fs.readdirSync(new URL(ICONS_PATH, import.meta.url));
const namesParsed = parseNames({ data: files });
const folderName = assetSize;

// creacion de directorios
console.log('------------- STEP 1 -------------')
createDir({ pathName: folderName });
createDir({ pathName: `${folderName}/AssetOrchester` });
console.log('Creacion de directorios exitosa')
console.log(' ')

// creación y escritura de cada archivo /AssetOrchester
console.log('------------- STEP 2 -------------')
createAOTsx(namesParsed, folderName);
createAOStories(assetSize, folderName);
createAOIndex(folderName);
console.log('AssetOrchester creado con exito')
console.log(' ')

// creación, transformacion y escritura de cada svg en componente storybook
console.log('------------- STEP 3 -------------')
createAssets(files, folderName, ICONS_PATH, assetSize)
console.log('Los SVGs fueron transformados correctamente')
console.log(' ')


