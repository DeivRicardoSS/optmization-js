# optmization-js
modulo para otimizar códigos front end em javascript

## DOM
### getDOM
```
    getDOM("button").addEventListenner('click', (){
        getDOM("h1").innerHTML = "Hello World";
    })
```

### getDOMValue
```
    let nome = getDOMValue("#input-nome");
    let email = getDOMValue("#input-email");
```

### getDOMAll
```
    getDOMAll("h3").foreach(elemento => {
        elemento.innerHTML("Hello World")
    })
```

## LocalStorage
### setData
```
    const player = {
        name: "Steve",
        "inventory": [
            "axe",
            "sword",
            "ceafting-table"
        ]
    }

    setData('player', player);
```
### getData
```
    let data = getData('player');
```

## Events
### Click
```
    addClick('button', ()=>{
        alert("Hello World");
    })
```