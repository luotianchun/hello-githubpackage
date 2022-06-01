import typescript from "@rollup/plugin-typescript";
import commonjs from "@rollup/plugin-commonjs";

export default {
  input: "./src/main.ts",
  plugins: [
    typescript({
      compilerOptions: { module: "CommonJS" },
      exclude: "node_modules/**",
    }),
    commonjs({ extensions: [".js", ".ts"] }),
  ],
  output: [
    {
      format: "cjs",
      file: "build/bundle.cjs.js",
    },
    {
      format: "es",
      file: "build/bundle.esm.js",
    },
  ],
};
