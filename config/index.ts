import Dev from "./dev";
import Local from "./local";
import Prod from "./prod";
import Test from "./test";

const mode = import.meta.env.MODE;
let configData: any = {};
if (mode === "development") {
  configData = Dev;
} else if (mode === "production") {
  configData = Prod;
} else if (mode === "test") {
  configData = Test;
} else if (mode === "localhost") {
  configData = Local;
}


export default {
  ...configData
};