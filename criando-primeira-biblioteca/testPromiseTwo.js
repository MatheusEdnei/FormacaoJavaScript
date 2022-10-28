import fetch from 'node-fetch';
var data;
async function getData() {
    data = await fetch('https://api.github.com/users/MatheusEdnei').then( (res) => res.json());
    console.log(data);
}

getData();
console.log(data);