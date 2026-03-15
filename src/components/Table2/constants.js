// 1. Fetch and render table only first 10 - DONE
// 2. Implement pagination for table with previous and next button - DONE
// 3. Search with debounce - DONE
// 4. Sort table by column - DONE
// 5. Select columns to render
// 6. Implement row selection
// 7. Persist route.

export const PAGE_SIZE = 10;
export const API = "https://609cd6ba04bffa001792d638.mockapi.io/books";
export const DESC = "desc";
export const ASC = "asc";

export const debounceSearch = (callBack, timer) => {
    let timerId;
    return (...args) => {
        if(timerId) clearTimeout(timerId);
        timerId = setTimeout(() => {
            callBack(...args);
        }, timer);
    }
}