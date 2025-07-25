export function throttling(fn, delay){
    let lastCall = 0;
    return function(...args){
        const now = new Date().getTime();
        if(now-lastCall >= delay){
            lastCall = now;
            fn.apply(this, args);
        }
    }
}