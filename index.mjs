import { fetchUUID } from "./fetchUuid.mjs";

(async ()=>{
    const uuid = await fetchUUID()
    console.log(`UUID: ${uuid}`)
})();