export const useValidation = function (text: string, validation: RegExp) {
    if (validation.test(text)) {
        return ("")
    } else return ("Неверно")
}