var dinos = [
    { id: 0, name: "tyrannosaurus", diet: "carnivorous", weight: "7000kg", height: "12m", period: "Late Cretaceous" },
    {id: 1, name: "stegosaurus", diet: "herbivorous", weight: "2000kg", height: "9m", period: "Late Jurassic"},
    {id: 2, name: "velociraptor", diet: "carnivorous", weight: "15kg", height: "1.8m", period: "Late Cretaceous"}
]

function allDinoNames() {
    var names = []
    for (var i = 0; i < dinos.length; i++) {
        names.push(dinos[i].name)
    }
    console.log(names)
    var display = document.getElementById('dinoNames')
    display.innerHTML = names
}
function allDinoNamesPeriods() {
    var namePeriod = []
    for(var x = 0; x < dinos.length; x++) {
        namePeriod.push(dinos[x].name)
        namePeriod.push(dinos[x].period)
    }
    console.log(namePeriod)
    var display = document.getElementById('dinoNamesPeriod')
    display.innerHTML = namePeriod
}

// http://pythontutor.com/javascript.html#code=function%20dinoArray%28%29%20%7B%0A%20%20%20%20var%20dinos%20%3D%20%5B%0A%20%20%20%20%20%20%20%20%7Bid%3A%200,name%3A%20%22tyrannosaurus%22,%20diet%3A%20%22carnivorous%22,%20weight%3A%20%227000kg%22,%20height%3A%20%2212m%22,%20period%3A%20%22Late%20Cretaceous%22%20%7D,%0A%20%20%20%20%20%20%20%20%7Bid%3A%201,%20name%3A%20%22stegosaurus%22,%20diet%3A%20%22herbivorous%22,%20weight%3A%20%222000kg%22,%20height%3A%20%229m%22,%20period%3A%20%22Late%20Jurassic%22%7D,%0A%20%20%20%20%20%20%20%20%7Bid%3A%202,%20name%3A%20%22velociraptor%22,%20diet%3A%20%22carnivorous%22,%20weight%3A%20%2215kg%22,%20height%3A%20%221.8m%22,%20period%3A%20%22Late%20Cretaceous%22%7D%0A%20%20%20%20%5D%0A%20%20%20%20var%20arr%20%3D%20%5B%5D%0A%20%20%20%20for%20%28var%20i%20%3D%200%3B%20i%20%3C%20dinos.length%3B%20i%2B%2B%29%20%7B%0A%20%20%20%20%20%20%20%20arr.push%28dinos%5Bi%5D.name%29%0A%20%20%20%20%7D%0A%20%20%20%20console.log%28arr%29%0A%7D%0AdinoArray%28%29&curInstr=16&mode=display&origin=opt-frontend.js&py=js&rawInputLstJSON=%5B%5D