let myResult = document.getElementById("result");
const inputBtn = document.getElementById("input-btn");
inputBtn.addEventListener("click", () => {
    let serachInput = document.getElementById("search-inp").value.trim()
    const URL = `https://www.omdbapi.com/?s=${serachInput}&apikey=e114ef6`
    console.log(URL);

    fetch(URL)
    .then(response => response.json())
    .then(data => {
        if(data.Search){
            data.Search.forEach(element => {
                myResult.innerHTML += `
                <div class="box">
                <div class="box-items">
                    <img src="${element.Poster}">
                    <h2>${element.Title}</h2>
                    <button>Watch Now</button>
                </div>
            </div>
                `;
            });
            
        }else if(serachInput.length == 0){
            myResult.innerHTML = `<h5>Input field can't be empty</h5>`
        }else{
            myResult.innerHTML = `<h5>Please enter a valid name</h5>`
        }
    })
})