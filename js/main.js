window.addEventListener('DOMContentLoaded', (event) => {
    getVisitCount();
});

const apiGateway = 'https://vargasresume.azurewebsites.net/api/HttpTrigger1?code=BGocpqpln6EXSxJGSMZlcsJVuaEVoWQunsaHPbDsxz0gSN6IroL5Ww==&id=home'; 
;
const getVisitCount = () => {
    let count = 0;
    fetch(apiGateway, {
        mode: 'cors',
    })
    .then(response => {
        return response.json()
    })
    .then(res => {
        const count = res;
        document.getElementById('counter').innerText = "This resume has been viewed " + count + " times";
        document.getElementById('visitorElem').style.display = 'block';
    })
    return count;
}