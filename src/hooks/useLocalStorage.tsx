export const useLocalStorage = function () {
    const getInfo = (name: string) => {
        try {
            return JSON.parse(localStorage.getItem(name) || "")
        }
        catch {
            return false
        }
    };

    const setInfo = (name: string, obj: object) => {
        try {
            localStorage.setItem(name, JSON.stringify(obj));
        }
        catch {
            return false
        }
    }
    return {getInfo, setInfo}
}