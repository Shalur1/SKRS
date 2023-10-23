export const useValidation = function (text: string, validation: RegExp) {
    console.log(validation)
    if (validation.test(text)) {
        return ("")
    } else return ("Неверно")
}