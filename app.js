let button = document.getElementById('button')
button.innerHTML = "Click me and wait 10min"

let result = document.getElementById('result')
let a = 0


function test() {
    let rec = setTimeout(function() {
        result.innerHTML = a
        if (a === 10) {
            return false;
        }
        a++
        test()
    }, 1000)
}

button.addEventListener('click', test)