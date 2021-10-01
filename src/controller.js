const { response, request } = require('express');
const res = require('express/lib/response');
const axios = require('axios');
const url = 'https://gist.githubusercontent.com/jhonatan89/bc554ec3ded15407609714e8b7b8f1c8/raw/5ab1e3e5b45e99aabcbbdd30f55d2ae5eafb9cbe/nba-players';

const getPairsOfPlayers = async (req = request, resp = response, next) => {
  //Implementar logica aquí
  const alturaTotal = (pareja) => {
    return pareja.reduce((previo,actual) =>
      previo.h_in+actual.h_in);  
  }
  const findParejas = (arreglo,altura) =>{
    let rta = [];
    arreglo.forEach(atleta1=> { 
      arreglo.forEach(atleta2 =>{
        let pareja = [atleta1,atleta2];
        if (alturaTotal(pareja)===altura){
          rta.push(pareja)
        }});
      })
    return rta;
  }

  let array = [];
  axios.get(url).then(resp => {
    array = resp.data.values;
    let answer = findParejas(array,req.params.altura);
    console.log(answer);
  })

  return resp.json(array);
};




module.exports = { getPairsOfPlayers };
