module.exports = {
    oscInFilter:function(data){
        var {address} = data
        if (address === '/time/str') {
            return undefined;
        }
        return data;
    },
}
