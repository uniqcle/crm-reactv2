function formatPhoneNumber(input) {
    if (!input || isNaN(input)) return `input must be a number was sent ${input}`
    if (typeof (input) !== 'string') input = input.toString()
    if (input.length === 10 || input.length < 10) {
        return input.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3");
    } else if (input.length > 10) {
        return 'Телефон поддерживается в 10ти значном формате. Введите 10 цифр.'
    } else {
        return 'something went wrong'
    }
}

export default formatPhoneNumber; 