/* AULA24
var xhr = new XMLHttpRequest();
xhr.open('GET', 'http://api.github.com/users/diegomrz');
xhr.send(null);

xhr.onreadystatechange = function(){
    if(xhr.readyState === 4){
        console.log(JSON.parse(xhr.responseText));
    }
}
*/

/* AULA 25
var minhapromisse =  function(){
  return new Promise(function(resolve, reject){
      xhr = new XMLHttpRequest();
      xhr.open('GET', 'http://api.github.com/users/diegomrz');
      xhr.send(null);

    xhr.onreadystatechange = function(){
      if(xhr.readyState === 4){
        if(xhr.status === 200){
          resolve(JSON.parse(xhr.responseText));
        }else{
          reject('Erro na requisição');
        }
      }
    }
  });
}

minhapromisse()
  .then(function(response) {
    console.log(response);
  })
  .catch(function(error) {
    console.warn(error);
  });

*/

  axios.get('http://api.github.com/users/diegomrz')
  .then(function(response) {
    console.log(response);
  })
  .catch(function(error) {
    console.warn(error);
  });