import axios from "axios";

const countryList = document.getElementById('countries');
const errorMessage = document.getElementById('error');
async function fetchCountries() {
    try {
    const response = await axios.get('https://restcountries.com/v3.1/all?fields=name,flags,continents,population')
        response.data.sort((a, b) => a.population - b.population)

    console.log(response.data)
        for (let i = 0; i < response.data.length; i++) {
            let continent = response.data[i].continents[0]

            console.log (continent)
                switch (continent) {
                    case 'North America':
                        countryList.innerHTML += `
                            <li>
                                <p><span><img src="${response.data[i].flags.png}" alt="this is the flag of ${response.data[i].name.common}"/></span>
                                    <span class="NorthAmerica country"> ${response.data[i].name.common}</span></p>
                                <p class ="population">Has a population of ${response.data[i].population} people</p></li>`
                        break;
                    case 'South America':
                        countryList.innerHTML += `
                            <li>
                                <p><span><img src="${response.data[i].flags.png}" alt="this is the flag of ${response.data[i].name.common}"/></span>
                                    <span class="SouthAmerica country"> ${response.data[i].name.common}</span></p>
                                <p class ="population">Has a population of ${response.data[i].population} people</p></li>`
                        break;
                    case 'Africa':
                        countryList.innerHTML += `
                            <li>
                                <p><span><img src="${response.data[i].flags.png}" alt="this is the flag of ${response.data[i].name.common}"/></span>
                                    <span class="Africa country"> ${response.data[i].name.common}</span></p>
                        <p class ="population">Has a population of ${response.data[i].population} people</p></li>`
                        break;
                    case 'Asia':
                        countryList.innerHTML += `
                            <li>
                               <p><span><img src="${response.data[i].flags.png}" alt="this is the flag of ${response.data[i].name.common}"/></span>
                                    <span class="Asia country"> ${response.data[i].name.common}</span></p>
                        <p class ="population">Has a population of ${response.data[i].population} people</p></li>`
                        break;
                    case 'Europe':
                        countryList.innerHTML += `
                            <li>
                                <p><span><img src="${response.data[i].flags.png}" alt="this is the flag of ${response.data[i].name.common}"/></span>
                                    <span class="Europe country"> ${response.data[i].name.common}</span></p>
                        <p class ="population">Has a population of ${response.data[i].population} people</p></li>`
                        break;
                    case 'Oceania':
                        countryList.innerHTML += `
                            <li>
                                <p><span><img src="${response.data[i].flags.png}" alt="this is the flag of ${response.data[i].name.common}"/></span>
                                    <span class="Oceania country"> ${response.data[i].name.common}</span></p>
                        <p class ="population">Has a population of ${response.data[i].population} people</p></li>`
                        break;
                    case 'Antarctica':
                        countryList.innerHTML += `
                            <p><span><img src="${response.data[i].flags.png}" alt="this is the flag of ${response.data[i].name.common}"/></span>
                                <span class="NorthAmerica country"> ${response.data[i].name.common}</span></p>
                                <p class ="population">Has a population of ${response.data[i].population} people</p></li>`
                        break;
                    default:
                        countryList.innerHTML += `
                            <p><span><img src="${response.data[i].flags.png}" alt="this is the flag of ${response.data[i].name.common}"/></span>
                                <span class="country"> ${response.data[i].name.common}</span></p>
                                <p class ="population">Has a population of ${response.data[i].population} people</p></li>`
                }
            }
        } catch(e) {
        //errors afvangen in de console
    console.error(e)

        //errors communiceren in de uI
        if (e.response.status === 404) {
            errorMessage.innerText = "Page not found | 404"
        }else if(e.response === 500) {
            errorMessage.innerText = "Internal server error | 500"
        }
    }
}

void fetchCountries();