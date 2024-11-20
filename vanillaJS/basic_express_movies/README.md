### Basic Server with Express movies

1. Create a basic express server
   1.1. Configure the lintier and prettier
   1.1. Configure zod, cors
2. Use middle-ware to disable x-powered-by, don't send express
3. Use a middle-ware to parse req.body to string
4. All REST methods GET, POST, PATCH, PUT and DELETE
5. Create the movie object schema with zod
6. Use the command npx server ./src/web to server a page to test cors (Cross Origin Resource Sharing)
7. Solve the cors problem from the server manual way (commented using cors package).

## Run: npm install

Run the previous command to install all the dependencies.

1. npm run dev
2. npx server ./src/web

## How it was created?

1. npm i express zod cors -E
2. npm i -D linter prettier eslint-config-prettier nodemon
3. npx eslint --init
4. Add configuration in the auto-generated file eslint.config.mjs

import eslintConfigPrettier from "eslint-config-prettier";
export default [
eslintConfigPrettier,
];

5. Add the file .prettierrc for custom configuration, example:
   {
   "semi": true,
   "singleQuote": false
   }

6. Add the files .prettierignore and eslint.config.mjs (.eslintignore -> deprecated) : Add the folder and files to exclude (node_modules excluded by default)
7. Add the scripts in the package.json to run linter and prettier
   "format": "prettier --write .",
   "lint": "eslint --fix ."
