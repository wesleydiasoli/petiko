// Escreva uma função que converta a data de entrada do usuário 
//formatada como MM/DD/YYYY em um formato exigido por uma API (YYYYMMDD). 
//O parâmetro "userDate" e o valor de retorno são strings.

// Por exemplo, ele deve converter a data de entrada 
//do usuário "31/12/2014" em "20141231" adequada para a API.


function formatDate(userDate) {
  // format from M/D/YYYY to YYYYMMDD
  let array = userDate.split("/");
  while (array[0].length < 2) {
    array[0] = "0" + array[0];
  }
  while (array[1].length < 2) {
    array[1] = "0" + array[1];
  }
  let arrayAnswer = array[2]+ array[0]+ array[1];
  return arrayAnswer;
}

console.log(formatDate("12/31/2014"));