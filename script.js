var list = [];

window.onload = () => {
    displayData();
};

function displayData(){
    fetch(endpoint)
    .then(response => response.json())
    .then(function(data){
        list = data;


    })
}