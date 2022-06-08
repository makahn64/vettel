import {promises as fsp} from "fs" ;

export const saveJSON = async (filename: string, json: Record<string, any>) => {
    return fsp.writeFile(filename, JSON.stringify(json));
}