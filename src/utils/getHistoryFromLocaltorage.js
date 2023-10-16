export default function getHistoryFromLocalStorage() {
    return localStorage.getItem("searchHistory")
        ? JSON.parse(localStorage.getItem("searchHistory"))
        : [];
}
