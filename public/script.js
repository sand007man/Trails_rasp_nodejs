const fetchTemperature = () => {
    fetch('/temperature')
    .then(results => {
    
        return results.text()
    })
    .then(text => {
        //console.log(text)
        const temperatureDispaly = document.getElementById('temperature-display')
        temperatureDispaly.innerHTML = text
    })

}

const fetchHumidity = () => {
    fetch('/humidity')
    .then(results => {
        return results.text()
    })
    .then(text =>{
        const temperatureDispaly = document.getElementById('humidity-display')
        temperatureDispaly.innerHTML = text 
    })
}

setInterval(() =>{
    fetchTemperature()
    fetchHumidity()
},2000)






