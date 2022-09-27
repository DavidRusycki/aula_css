var dataConverter = (() => {

    let toNormal = function(stringData) {
        let normal = new Date(Date.parse(stringData)).toLocaleString();
        return normal;
    }

    let toUTC = function(stringData) {
        (data, hora) = stringData.split(' ');
        data = data.split('/').revert().join();
        let dataPronta = data + ' ' + hora;
        return new Date(dataPronta);
    }

    return {
        toNormal: (stringData) => {
            return toNormal(stringData);            
        },
        toUTC: (stringData) => {
            return toUTC(stringData);
        }
    };

})();