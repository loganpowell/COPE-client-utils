import { Amplify } from "@aws-amplify/core";
import config from "../aws-exports";
export const init = Amplify.configure(config);
