const axios = require('axios');

const json = {status: 'student', year: 2018};
const json_string = JSON.stringify(json);
console.log(json_string);

// const url = `http://3336.kodaktor.ru/minnemullin?${json_string}`;
const url = `http://3336.kodaktor.ru/babariskiy?${json_string}`;
console.log(url);


axios.get(url)
    .then(function (response) {
        // handle success
        console.log(response);
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
    .then(function () {
        // always executed
    });

/*
http.request(url, response => {
    console.log(response)
});
fetch(url)
    .then(response => {
        console.log(response)
    }); */