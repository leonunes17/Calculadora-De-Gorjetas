
function calculatorTip(event){
    event.preventDefault();                                                     // cancelando o evento de carregar a página
    let bill = document.getElementById('bill').value;                           // pegando os valores dos inputs e atribuindo nas variáveis
    let service = document.getElementById('service').value;                     // pegando os valores dos inputs e atribuindo nas variáveis
    let people = document.getElementById('people').value;                       // pegando os valores dos inputs e atribuindo nas variáveis

    if(bill == '' | service == 0 ){
        alert("Isira os valores nos campos!")                   // Alerta caso os campos não sejam preenchidos
        return;
    } 

    if(people == "" | people <= 1){
        people = 1;                                                     //condição para o número de pessoas, aparecer ou não a palavra "cada"
        document.getElementById('each').style.display = "none";
    } else {
        document.getElementById('each').style.display = "block";
    }

    let total = (bill * service) / people;                              // cálculo para resultado da gorjeta
    total = total.toFixed(2);
    document.getElementById('tip').innerHTML = total;                   // atribuindo o valor de "total" no id "tip"
    document.getElementById('totaltip').style.display = "block";        // mostrando o resultado final


}


document.getElementById('totaltip').style.display = "none";                     // valor final não aparece
document.getElementById('each').style.display = "none";

document.getElementById('tipsform').addEventListener('submit', calculatorTip);  //chamada da função