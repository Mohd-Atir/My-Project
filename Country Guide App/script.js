let searchBtn = document.getElementById("search-btn");
let countryInp = document.getElementById("country-inp");
let getResult = document.getElementById("result");

searchBtn.addEventListener("click", () => {
  let countryName = countryInp.value;
  let finalURL = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
  console.log(finalURL);
  fetch(finalURL)
    .then((response) => response.json())
    .then((data) => {
      getResult.innerHTML = `
        <img src="${data[0].flags.svg}" class="flag-img">
        <h2>${data[0].name.common}</h2>
        <div class="wraper">
            <div class="data-wraper">
                <h4>Capital:</h4>
                <span>${data[0].capital[0]}</span>
            </div>
        </div>
        <div class="wraper">
            <div class="data-wraper">
                <h4>Continents:</h4>
                <span>${data[0].continents[0]}</span>
            </div>
        </div>
        <div class="wraper">
        <div class="data-wraper">
            <h4>Area:</h4>
            <span>${data[0].area}</span>
        </div>
    </div>
        <div class="wraper">
        <div class="data-wraper">
            <h4>Population:</h4>
            <span>${data[0].population}</span>
        </div>
    </div>
        <div class="wraper">
        <div class="data-wraper">
            <h4>Currency:</h4>
            <span>${Object.keys(data[0].currencies)[0]}</span>
        </div>
    </div>
        <div class="wraper">
        <div class="data-wraper">
            <h4>Currency Name:</h4>
            <span>${Object.keys(data[0].currencies)[0]}</span>
        </div>
    </div>
        <div class="wraper">
        <div class="data-wraper">
            <h4>Currency Symbol:</h4>
            <span>${data[0].currencies[Object.keys(data[0].currencies)].symbol}</span>
        </div>
    </div>
        <div class="wraper">
        <div class="data-wraper">
            <h4>Languages:</h4>
            <span>${Object.values(data[0].languages).toString().split(",").join(", ")}</span>
        </div>
    </div>
        <div class="wraper">
        <div class="data-wraper">
            <h4>Borders:</h4>
            <span>${Object.values(data[0].borders).toString().split(",").join(", ")}</span>
        </div>
    </div>`;
    }).catch(() => {
        if(countryName.length == 0){
            getResult.innerHTML = `<h5>Country name can't be empty</h5>`
        }
        else{
            getResult.innerHTML = `<h5>Please enter a valid country name</h5>`
        }
    });
});
