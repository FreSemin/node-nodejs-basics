import { fileURLToPath } from "url";
import { dirname } from "path";

export const getDirNameFromUrl = (url) => dirname(fileURLToPath(url));