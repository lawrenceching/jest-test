import {jest} from '@jest/globals';
import {Response} from 'node-fetch'

test(`mock node-fetch`, async () => {

    const fetch = jest.fn(async () => {
        
        return Promise.resolve(new Response('mocked UUID'))
    })
    jest.unstable_mockModule('node-fetch', () => ({
        fetch: fetch,
        default: fetch,
    }));

    const fetchUUID = (await import("./fetchUUID.mjs")).fetchUUID
    
    const uuid = await fetchUUID()

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith('https://httpbin.org/uuid');
    console.log(`> get mocked response: ${uuid}`)
    expect(uuid).toBe('mocked UUID');

})