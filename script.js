
const resultDisplay = document.querySelector('#input-display');

function insert(num) {
    resultDisplay.innerHTML += num;
  }
  
  function clean() {
    resultDisplay.innerHTML = '';
  }
  
  function calcular() {
    if (resultDisplay.innerHTML) {
      resultDisplay.innerHTML = eval(resultDisplay.innerHTML);
    } else {
      resultDisplay.innerHTML = '';
    }
  }
  
  function back() {
    resultDisplay.innerHTML = resultDisplay.innerHTML.slice(0, -1);
  }
  

// ...

// Adicionando um ouvinte de eventos ao documento
document.addEventListener('keydown', function(event) {
    const teclaPressionada = event.key;
  
    // Verificando se a tecla pressionada é um número
    if (/^[0-9]$/.test(teclaPressionada)) {
      // Adicionando o número pressionado ao valor atual do display
      insert(teclaPressionada);
    } else if (teclaPressionada === '+' || teclaPressionada === '-' || teclaPressionada === '*' || teclaPressionada === '/') {
      // Adicionando o operador pressionado ao valor atual do display
      insert(teclaPressionada);
    } else if (teclaPressionada === ',' || teclaPressionada === '.') {
      // Adicionando a vírgula pressionada ao valor atual do display
      insert(',');
    }
  });


  //Usando as teclas ENTER - BACKSPACE - DELETE //
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault(); // Impede o comportamento padrão de enviar formulários
      calcular();
    }else if(e.key === 'Delete'){
      clean();
    }else if(e.key === 'Backspace'){
      back();
    }
  });

  function closedCalculator(){
    let calculator = document.querySelector('#container-main')
    calculator.style.display = 'none'
  }
  
  function openCalculator(){
    let calculator = document.querySelector('#container-main')
    calculator.style.display = 'block'
  }

 

  
