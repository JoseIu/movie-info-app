require("dotenv").config();

const { writeFileSync, mkdirSync } = require("fs");

const targetPath = "./src/environments/environments.ts";
const envFileContent = `
    export const enviroment = {
        moeviedb_token:"${process.env.MOVIEDB_TOKEN}",
    };
  `;

mkdirSync("./src/environments", { recursive: true });
writeFileSync(targetPath, envFileContent);
