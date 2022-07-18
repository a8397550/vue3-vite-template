import { createStore, createLogger } from "vuex";
import user from "./modules/user";
import testUser from "./modules/user/baseUser";

const debug = process.env.NODE_ENV !== "production";

export default createStore({
  modules: {
    user,
    testUser
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
});
