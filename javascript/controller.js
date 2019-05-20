export default class Controller {
    constructor(view, model) {
        this.view = view;
        this.model = model;
        this.view.setSubmit = () => this.handleClick();
        this.view.setQuestion = this.model.getNextQuestion();
    }

    handleClick() {
        let result = this.model.check(this.view.getAnswer);
        this.view.setError = result;
        if (result == "") {
            this.view.setQuestion = this.model.getNextQuestion();
        }
    }
}