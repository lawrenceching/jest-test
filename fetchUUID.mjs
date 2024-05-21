import fetch from 'node-fetch'

async function fetchUUID() {
    const resp = await fetch(`https://httpbin.org/uuid`)
    const text = await resp.text();
    return text;
}

export { fetchUUID }
