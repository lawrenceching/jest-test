import { fetchUUID } from "./fetchUUID.mjs";

(async ()=>{
    const uuid = await fetchUUID()
    console.log(`UUID: ${uuid}`)
})();