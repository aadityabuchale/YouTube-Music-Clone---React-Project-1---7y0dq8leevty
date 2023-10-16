export default function addHistoryInLocalStorage(input) {
    // performing operations on localstorage
    let historyArray = localStorage.getItem("searchHistory")
        ? JSON.parse(localStorage.getItem("searchHistory"))
        : [];

    if (historyArray.length >= 7) {
        historyArray.pop();
    }

    if (!historyArray.includes(input) && input !== "") {
        historyArray.unshift(input);
    }

    localStorage.setItem("searchHistory", JSON.stringify(historyArray));
}
