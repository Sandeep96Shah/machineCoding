export const debounceSearch = (fn, delay) => {
    let timer = null;
    return function(...args){
        clearTimeout(timer);
        timer = setTimeout(() => fn(...args), delay);
    }
}