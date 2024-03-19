const inputRojo = document.getElementById('rojo');
const inputVerde = document.getElementById('verde');
const inputAzul = document.getElementById('azul');

const textoRojo = document.getElementById('texto-rojo');
const textoVerde = document.getElementById('texto-verde');
const textoAzul = document.getElementById('texto-azul');

let rojo = inputRojo.value; //23
let verde = inputVerde.value; //41
let azul = inputAzul.value; //56

textoRojo.innerText = rojo;
textoVerde.innerText = verde;
textoAzul.innerText = azul;         

function actualizarColor(rojo, verde, azul){
    const colorRGB = `rgb(${rojo},${verde},${azul})`;
    document.body.style.backgroundColor = colorRGB;
}

// Actualizar input Red 
inputRojo.addEventListener('mousemove', (e) => {
    rojo  = e.target.value;
    textoRojo.innerText = rojo;
    actualizarColor(rojo, verde, azul);
});

// Actualizar input Verde 
inputVerde.addEventListener('mousemove', (e) => {
    verde  = e.target.value;
    textoVerde.innerText = verde;
    actualizarColor(rojo, verde, azul);
});

// Actualizar input Red 
inputAzul.addEventListener('mousemove', (e) => {
    azul  = e.target.value;
    textoAzul.innerText = azul;
    actualizarColor(rojo, verde, azul);
});


