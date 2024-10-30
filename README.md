# optmization-js
modulo para otimizar códigos front end em javascript

## Importação op1
### index.html
```
    <script type="module" src="main.js"></script>
```
### main.js
```
    import opt from 'https://deivricardoss.github.io/optmization-js/src/index.js';
    const { getDOM, getDOMValue, setData, getData } = opt;
```

## Importação op2
```
    <script src="https://deivricardoss.github.io/optmization-js/src/index.js"></script>
```

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

### updateData
```
    setData('usuario', {
        nome: 'Alfredo',
        idade: 20
    });

    updateData('usuario', 'nome', 'Roberto');
```

## Events
### on
```
    on('click', 'button', ()=>{
        alert("Hello World");
    });
```