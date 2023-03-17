function cambiar_parrafo(){
    document.getElementById("edit-acercade").style.display="block";
    let texto = document.getElementById("text-acercade").innerText;
    console.log(texto);
};
function myFuntion2(valor){
document.getElementById("text-acercade").innerText=valor;
}