export class viewBase {
    constructor() {
        let id = 0;
    }

    init(nodeName, elementId, elementType) {
        let element = document.createElement(nodeName);
        if (elementId != undefined)
            element.setAttribute("id", elementId);
        else {
            element.setAttribute("id", id);
            id++;
        }
        if (elementType != undefined)
            element.setAttribute("type", elementType);
        document.body.appendChild(element);
        return element;
    }
}

export default class View extends viewBase {
    constructor() {
        super()
        let question = super.init("label", "question");
        let answer = super.init("input", "answer", "text");
        let submit = super.init("input", "submit", "submit");
        let error = super.init("label", "error");
    }

    set setQuestion(text) {
        question.innerHTML = text;
    }

    get getAnswer() {
        return answer.value;
    }

    set setError(text) {
        error.innerHTML = text || "";
    }

    set setSubmit(func) {
        submit.onclick = func;
    }
}