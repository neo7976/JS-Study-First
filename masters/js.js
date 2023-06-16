const request = new XMLHttpRequest();
request.open('GET', 'https://restcountries.com/v3.1/name/russia');
request.send();
request.addEventListener('load', function () {
    const [data] = JSON.parse(this.response)
    console.log(data);


const html = `
<article class="country">
    <img class="country_img" src="${data.flags.svg}">
    <div class="country data">
        <h3 class="country_name">"${data.name.common}"</h3>
        <h4 class="country_region">${data.region}</h4>
        <p class="country_row"><span>👪</span> ${data.population}</p>
        <p class="country_row"><span>👤</span> ${data.languages}</p>
        <p class="country_row"><span>💰</span> ${data.currencise.symbol}</p>
    </div>
</article>
`
});