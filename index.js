const main = document.getElementById('main')
// let button = document.querySelector('button')
let sun = document.getElementById('sun')
let moon = document.getElementById('moon')
let input = document.getElementById('search')
let form = document.querySelector('form')
let h2 = document.querySelector('h2')
let h3 = document.querySelector('h3')
let img = document.querySelector('img')
let h4 = document.querySelector('h4')
let h5 = document.querySelector('h5')
let h6 = document.querySelector('h6')
let p = document.querySelector('p')

sun.addEventListener('click', changCol)
function changCol() {
    document.getElementById('main').style.backgroundImage = "url('https://source.unsplash.com/random/?city,sun')";
    document.getElementById('main').style.width = "100%"
    // document.getElementById('main').style.height = "100%"
}
moon.addEventListener('click', changeCol)
function changeCol() {
    document.getElementById('main').style.backgroundImage = "url('https://source.unsplash.com/random/?city,moon')"
    document.getElementById('main').style.width = "100%"
    // document.getElementById('main').style.height = "100%"
}

form.addEventListener('submit', runEvent)
async function runEvent(e) {
    e.preventDefault()
    try {
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=deb401009a9f4191bce104601232702&q=${input.value}&aqi=yes`)
        const data = await response.json()
        h2.innerText = data.location.name
        h3.innerText = data.current.temp_c
        h4.innerText = data.current.air_quality.co
        let icon = 'https:' + data.current.condition.icon
        img.setAttribute("src", icon)
        h5.innerText = data.current.humidity
        p.innerText = data.current.temp_f
        h6.innerText = data.current.wind_dir
    } catch(error){
        window.alert("Enter a Valid City Name")
    }
    form.reset()
}