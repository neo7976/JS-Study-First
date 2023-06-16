const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const request = new XMLHttpRequest();
request.open('GET', 'https://restcountries.com/v3.1/name/russia');
request.send();
request.addEventListener('load', function () {
    const [data] = JSON.parse(this.response)
    console.log(data);


    const html = `
<article class="country">
    <img class="country_img" src="${data.flags.svg}"/>
    <div class="country data">
        <h3 class="country_name">"${data.name.common}"</h3>
        <h4 class="country_region">${data.region}</h4>
        <p class="country_row"><span>👪</span> ${(+data.population/1000000).toFixed(1)} миллионов</p>
        <p class="country_row"><span>👤</span> ${data.languages.rus}</p>
        <p class="country_row"><span>💰</span> ${data.currencies.RUB.symbol}</p>
    </div>
</article>
`;
    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
});