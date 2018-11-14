//Promise syntax
const url = 'www.youtube.com';
fetch(url).then(function (res) {
        return res.json;
    })
    .then(function (res) {
        return {
            importantData: json.importantData
        }
    })
    .then(function (res) {
        console.log(obj.importantData);
    })
    .catch(function (res) {
        //error handling
    })