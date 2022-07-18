import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { viteMockServe } from "vite-plugin-mock";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    viteMockServe({// 更多配置见最下方
      supportTs: true,
      logger: false,
      mockPath: "./mock/" // 文件位置
    })
  ],
  resolve: {
    extensions: [".vue", ".js", ".ts", ".tsx"],
    alias: {
      "@": "/src/",
      "@@": "/config/"
    }
  },
  // @ts-ignore 强制下面这行不提示错误
  // proxy: {
  //   "/api": {
  //     target: "http://127.0.0.1:8080", // 目标地址
  //     changeOrigin: true // 代理服务器会把origin修改为目标地址
  //   }
  // }
});
