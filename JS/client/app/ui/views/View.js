class View {
    constructor(seletor) {
        this._elemento = document.getElementById(seletor);
    }

    update(model) {
        this._elemento.innerHTML = this.template(model);
    }

}