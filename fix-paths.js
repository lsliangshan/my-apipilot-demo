import fs from "fs";
import path from "path";

import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.resolve(__dirname, "dist");

function extractRelativePaths(content) {
  const regex = /['"](\.\/[^'"]+)['"]/g;
  let match;
  const paths = [];

  while ((match = regex.exec(content)) !== null) {
    paths.push(match[1]);
  }

  return paths;
}

function replaceRelativePaths(content, newPath) {
  const regex = /(['"])(\.\/[^'"]+)(['"])/g;

  return content.replace(regex, `$1${newPath}$3`);
}

function processDtsFiles(dir) {
  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    const filePath = path.join(dir, file);

    if (
      fs.statSync(filePath).isFile() &&
      filePath.endsWith(".d.ts") &&
      !filePath.endsWith("index.d.ts")
    ) {
      let content = fs.readFileSync(filePath, "utf-8");
      const fileName = filePath.split(path.sep).pop()?.split(".")[0];
      const fpath = extractRelativePaths(content);
      fpath.forEach((p) => {
        const fullPath = path.resolve(dir, fileName, p);
        const relativePath = `.${path.sep}${fullPath
          .replace(path.resolve("dist"), "")
          .replace(/^\//, "")}`;
        content = replaceRelativePaths(content, relativePath);
      });
      fs.writeFileSync(filePath, content, "utf-8");
    }
  });
}

processDtsFiles(filePath);
