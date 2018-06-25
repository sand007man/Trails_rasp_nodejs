fetch('/temperature')
.then(results => {

    return results.text()
})
.then(text => {
    console.log(text)
})
