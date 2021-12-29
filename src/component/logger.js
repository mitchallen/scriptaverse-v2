

export function createLogger( options = {} ) {

    let {
        name = 'logger',
        verbose = true,
    } = options;

    let wrap = (msg) => `[${name}]: ${msg}`;

    const log = (msg) => verbose ? console.log(wrap(msg)) : false;
    const info = (msg) => verbose ? console.info(wrap(msg)) : false;
    const warn = (msg) => verbose ? console.warn(wrap(msg)) : false;
    const fail = (msg) => verbose ? console.error(wrap(msg)) : false;
    const json = (obj) => info(JSON.stringify(obj,null,2));
    const failjson = (obj) => fail(JSON.stringify(obj,null,2));

    return {
        log,
        info,
        warn,
        fail,
        json,
        failjson,
    }

}
