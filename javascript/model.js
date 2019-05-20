export default class Model {
    constructor() {
        this.count = -1;
        this.question = ["Привіт! ", "Як тебе звати? ", "Скільки тобі років? ", "Ну ми починаємо! "];
        this.options = ["Привіт", "Hi", "Хай", "Добрий день"];
        this.numbers = /^[0-9]+$/i;
        this.symbol = /^[a-zа-яёії]+$/i;
    }

    getNextQuestion() {
        this.count++;
        return this.question[this.count];
    }

    checkGreeting(greeting) {
        if (this.options.includes(greeting)) {
            return "";
        }
        return " Привітайся нормально!";
    }
    checkName(name) {
        if (this.checkSymbol(name, this.symbol)) {
            return "";
        }
        return " Ти ж не робот, напиши нормально!";
    }

    checkSymbol(str, myRe) {
        return myRe.test(str);
    }

    checkAge(age) {
        if (!this.checkSymbol(age, this.numbers))
            return " Дані введені не коректно!";
        if (age < 10) {
            return " Йди звідси, щеня!";
        }
        if (age > 100) {
            return " Що ти тут забув, старий?";
        }
        return "";
    }

    check(str) {
        switch (this.count) {
            case 0: return this.checkGreeting(str);
            case 1: return this.checkName(str);
            case 2: return this.checkAge(str);
            default: return " Не поспішай!";
        }
    }
}