class ExampleItem {
    constructor(name, phone, email, product) {
        this.name = name
        this.phone = phone
        this.email = email
        this.product = product
    }
}

const testData = [
    new ExampleItem('Иван Фролов', parseInt('+4207725517'), 'frolov@gmail.com', 'course-js'),
    new ExampleItem('Елена Иванова', parseInt('+4207725517'), 'ivanova@seznam.cz', 'course-js'),
    new ExampleItem('Василий Пупкин', parseInt('+4207765557'), 'pupkin@mail.ru', 'course-vue'),
    new ExampleItem('Егор Безруков', parseInt('+4207725577'), 'bezrukov@seznam.cz', 'course-wordpress'),
    new ExampleItem('Екатерина Похоменко', parseInt('+4207775547'), 'pochomenko@mail.ru', 'course-php'),
    new ExampleItem('Валентин Козлюк', parseInt('+4207705525'), 'kozluk@seznam.cz', 'course-vue'),
    new ExampleItem('Светлана Козырь', parseInt('+4207735557'), 'kozyr@seznam.cz', 'course-html'),
    new ExampleItem('Роман Веселый', parseInt('+4207795547'), 'vesely@seznam.cz', 'course-php'),
]

function getRandomIndex(max) {
    return Math.floor(Math.random() * max)
}

export default function getRandomData() {
    const index = getRandomIndex(testData.length)
    return testData[index]
}