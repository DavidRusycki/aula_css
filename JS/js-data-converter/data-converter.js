var dataConverter = (() => {

    let toNormal = function(stringData) {
        let normal = new Date(Date.parse(stringData)).toLocaleString();
        return normal;
    }

    let toUTC = function(stringData) {
        stringData
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