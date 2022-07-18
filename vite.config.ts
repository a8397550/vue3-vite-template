import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { viteMockServe } from "vite-plugin-mock";
/**依赖分析*/
import { visualizer } from "rollup-plugin-visualizer";

/**按需加载 start */
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
/**按需加载 end */

const plugins = [
  AutoImport({
    resolvers: [ElementPlusResolver()],
  }),
  Components({
    resolvers: [ElementPlusResolver()],
  }),
  vue(),
  viteMockServe({// 更多配置见最下方
    supportTs: true,
    logger: false,
    mockPath: "./mock/" // 文件位置
  })
];

if (process.env.visualizer) {
  plugins.push(
    visualizer({
        open: true,
        gzipSize: true,
        brotliSize: true,
    })
  ); 
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins,
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
