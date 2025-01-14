import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import { join, resolve, sep } from "path";
import { existsSync, readdirSync, renameSync, statSync } from "fs";

function getEntries(dir: string, base = "src"): Record<string, string> {
  const entries: Record<string, string> = {};
  const files = readdirSync(dir);

  files.forEach((file) => {
    const fullPath = resolve(dir, file);
    const relativePath = fullPath
      .replace(resolve(base), "")
      .replace(new RegExp(`^${sep}`), "");

    if (statSync(fullPath).isDirectory()) {
      Object.assign(entries, getEntries(fullPath, base));
    } else if (file.endsWith(".ts")) {
      const entryKey = relativePath.replace(/\.ts$/, "");
      entries[entryKey.split(`${sep}index`)[0]] = fullPath;
    }
  });

  return entries;
}

export default defineConfig({
  build: {
    lib: {
      entry: getEntries(resolve(__dirname, "src")),
      formats: ["es", "cjs"],
    },
    rollupOptions: {
      input: getEntries(resolve(__dirname, "src")),
      output: {
        preserveModules: true,
        preserveModulesRoot: "src",
        entryFileNames: "[name].[format].js",
        dir: "dist",
      },
    },
  },
  plugins: [
    dts({
      outDir: `.${sep}dist`,
      afterBuild() {
        const outputDir = resolve(__dirname, "dist");
        const finalOutputDir = resolve(__dirname, "dist");
       
        readdirSync(outputDir).forEach((dir) => {
          const dirPath = join(outputDir, dir);
          const indexFile = join(dirPath, "index.d.ts");
          const newFileName = join(finalOutputDir, `${dir}.d.ts`);

          if (existsSync(indexFile)) {
            renameSync(indexFile, newFileName);
          }
        });
      },
    }),
  ],
});
