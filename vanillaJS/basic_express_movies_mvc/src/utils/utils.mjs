// Current way to import a JSON using ESModules
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);

export const readJSON = (path) => require(path);
