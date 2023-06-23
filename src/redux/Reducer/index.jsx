import authReducer from "./Auth/index";
import utilsReducer from "./Utils/index";
const rootReducer = {
    auth:authReducer,
    utils: utilsReducer,
};
export default rootReducer;
