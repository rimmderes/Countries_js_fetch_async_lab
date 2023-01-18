const getCountryByName = async (countryName) => {
    
    // show country
    const countryResponse = await fetch(`https://restcountries.com/v3.1/name/${countryName}`);
    const jsonData = await countryResponse.json();
    // get section via id
    const countrySection = document.querySelector("#insertCountry");
    // create element
    const newElement = document.createElement("p");
    const newElement2 = document.createElement("p");
    // find properties using object index
    newElement.textContent = jsonData[0].name.common;
    newElement2.textContent = jsonData[0].population;
   // add the new element with the country's name
    countrySection.appendChild(newElement);
    countrySection.appendChild(newElement2);
    

    // document.getElementById("insertCountry").innerHTML = "";
    

}
 getCountryByName("Eritrea");


    // display all countries name and population
    const getAllCountries = async (event)  => {
        
        // event.preventDefault();
        
        const allCountriesResponse = await fetch("https://restcountries.com/v3.1/all");
        const dataJson = await allCountriesResponse.json();
        const countrySection = document.querySelector("#insertCountry");
        dataJson.map((country) => {
        const newElement3 = document.createElement("p");
        newElement3.textContent = country.name.common + " has a population of: " +country.population + country.flag ;
        countrySection.appendChild(newElement3);
            
        document.getElementById("insertCountry").innerHTML = "";
    
    });
    }

getAllCountries();



// get all countries


// const getAllCountries = async () => {

//     const allResponse = await fetch (`https://restcountries.com/v3.1/all`);
//     const AllJsonData = await allResponse.json();

//     const countriesContainer = document.createElement("header");

//     AllJsonData.message.forEach((allCountriesURL) => {
        
//         countriesContainer.textContent = jsonData.name.common;
        
//         const allCountries = document.createElement("p");

//         countriesContainer.appendChild(allCountries)

//     })
//         document.querySelector("section").appendChild(countriesContainer);

// }




// FORM
const handleCountryForm = async (event) => {

    event.preventDefault();

    const inputCountryResponse = await fetch(" https://restcountries.com/v3.1/all");
    const jsonData = await inputCountryResponse.json();

    const countryList = document.querySelector("countryItem");
    
    const countryItem = document.createElement("p");
    countryItem.textContent = getCountryByName(event.target.toDo.value);

    // const response = getCountryByName(event.target.toDo.value);

    // create list item
    // get country name into textContent
    // append to list in HTML
    

    // console.log(countryItem.textContent);

    
    countryList.appendChild(countryItem);

}

const countryList = document.getElementById("countryItem");

countryList.addEventListener("submit", handleCountryForm);    


