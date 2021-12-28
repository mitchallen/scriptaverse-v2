/**
 * Usage:
 * 
 * let counter = createZeroBasedCounter( {limit: 3});
 *
 * for( let i = 0; i < 10; i++ ) {
 *    let a = counter.value;
 *    let b = counter.increment();
 *    console.log(`value: ${a}, => increment: ${b}`);
 * }
 */


export function createZeroBasedCounter( options = {} ) {

    // zero based
    // increment automatically wraps

    let {
        cursor = 0,
        limit = 5,  // [0..(limit -1)]
    } = options;

    let increment = () => cursor < limit - 1 ? ++cursor : cursor = 0;

    return {
        get value() { return cursor },
        increment,
    }
}