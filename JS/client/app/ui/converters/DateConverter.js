class DateConverter {

    constructor() {
        throw new Exception('Esta classe não pode ser intânciada.')
    }

    static paraTexto(data) {
        return `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`;
    }

    static paraData(data) {
        if (!/^\d{4}-\d{2}-\d{2}$/.test(data)) {
            throw new Error( ' Deve estar no formato aaaa-mm—dd');
        }
        return new Date(...data.split('-').map((valor, indice) => valor - (indice % 2)));
    }

}