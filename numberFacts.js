let url = 'http://numbersapi.com/random/year?json'
let promise = axios.get(url);

promise.then(res => {
    console.log(res.data)
})
    .catch(err => {
        console.log('ERROR', err)
    });

let batchURL = 'http://numbersapi.com/14,41'
let batchPromise = axios.get(batchURL);

batchPromise.then(res => {
    console.log(res)
})
    .catch(err => {
        console.log('ERROR', err)
    });

let multipleURL = 'http://numbersapi.com/41';
let multiplePromise = axios.get(multipleURL);
let container = document.getElementById('facts')


let num41Facts = async (e) => {
    const facts = [];
    for (let i = 0; i < 4; i++) {
        multiplePromise.then(res => {
            facts.push(res.data);
        })
    }
    return facts;
}

console.log(num41Facts());










