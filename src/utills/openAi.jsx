import { OpenAi_key } from "./constant";
import OpenAi from "openai";
 const openAi = new OpenAi({
    ApiKey : OpenAi_key,

 })
 export default openAi;