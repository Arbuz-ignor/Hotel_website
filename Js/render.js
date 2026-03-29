import { countries } from './data.js';
 
export function cityButtonRender(){
    const countryList = document.querySelector('.country-list')
    countries.forEach((element) => {
        const btnCountry = document.createElement('button');
        btnCountry.innerText = element.name;
        countryList.append(btnCountry);
        console.log(element.name)
    });
}