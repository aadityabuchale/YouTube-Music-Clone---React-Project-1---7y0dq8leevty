// performing delete operation on localstorage
export default function deleteHistoryFromLocalStorage(word) {
    let historyArray = JSON.parse(localStorage.getItem("searchHistory"));

    historyArray = historyArray.filter((hist) => hist !== word);

    localStorage.setItem("searchHistory", JSON.stringify(historyArray));
}
