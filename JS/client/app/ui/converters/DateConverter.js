class DateConverter {

    constructor() {
        throw new Exception('Esta classe não pode ser intânciada.')
    }

    static paraTexto(data) {
        return `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`;
    }

    static paraData(data) {
        if (!/\d{2}\/\d{2}\/\d{4}/.test(data)) {
            throw new DataInvalidaException();
        }
        return new Date(...data.split('/').reverse().map((valor, indice) => valor - (indice % 2)));
    }

}