var btnEncriptar = document.querySelector(".btnEncriptar");
var btnDesencriptar = document.querySelector(".btnDesencriptar");
var Muñeco = document.querySelector(".ContenedorMuñeco");
var Contenedor = document.querySelector(".ContenedorParrafo");
var Resultado = document.querySelector(".PrfResultado");
var BtnCopiar = document.querySelector(".btnCopy");
var ContenedorCopy = document.querySelector(".ContenedorCopy");

btnEncriptar.onclick = encriptar;
btnDesencriptar.onclick = desencriptar;

function encriptar(){
    ocultarAdelante();
    var cajatexto = recuperarTexto()
    Resultado.textContent = encriptarTexto(cajatexto);
}
function desencriptar(){
    ocultarAdelante();
    var cajatexto = recuperarTexto()
    Resultado.textContent = desencriptarTexto(cajatexto);
}
function recuperarTexto(){
    var cajatexto = document.querySelector(".CajaTexto")
    return cajatexto.value
}
function ocultarAdelante(){
    Muñeco.classList.add("ocultar");
    Contenedor.classList.add("ocultar");
    btnCopiar.classList.add("Visible1")
    btnCopiar.classList.add("Visible")
    ContenedorCopy.classList.add("Visible")
}
function encriptarTexto(mensaje){
    var texto = mensaje;
    var textoFinal = "";

    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "ai"
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "enter"
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "imes"
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "ober"
        }
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "ufat"
        }
        else{
            textoFinal = textoFinal + texto[i]
        }
    }
    return textoFinal;
}
function desencriptarTexto(mensaje){
    var texto = mensaje;
    var textoFinal = "";

    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "a"
            i = i+1;
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "e"
            i = i+4;
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "i"
            i = i+3;
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "o"
            i = i+3;
        }
        
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "u"
            i = i+3;
        }
        else{
            textoFinal = textoFinal + texto[i];
        }     
    }
    return textoFinal;
}
const btnCopiar = document.querySelector(".btnCopy"); 
    btnCopiar.addEventListener("click", copiar = () => {
    var contenido = document.querySelector(".PrfResultado").textContent;
    navigator.clipboard.writeText(contenido);
    console.log("hola"); 
});