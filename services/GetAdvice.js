export default function GetAdvice(){
    const text = document.querySelector('#advice')
    const text_id = document.querySelector('#advice_id')
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      
      fetch("https://api.adviceslip.com/advice", requestOptions)
        .then(response => response.json())
        .then(result => {
            
            text.innerHTML = result.slip.advice
            text_id.innerHTML = 'Advice # ' + result.slip.id
        })
        .catch(error => console.log('error', error));  


}
