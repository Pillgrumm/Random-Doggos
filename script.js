'use strict'

function getDoggos(que, displayJson) {
  fetch(`https://dog.ceo/api/breeds/image/random/${que}`)
  .then(response => response.json())
  .then(responseJson => {console.log(responseJson)
    return responseJson                     
    })
  .then(responseJson => displayJson(responseJson))
  .catch(error => ('Oops, something went wrong, try again later!'));
}

function displayDoggos(responseJson) {
  return `
  <div>
    <br/>
    <img src="${responseJson}" class="results-img">
  </div>
  ` ;
}

function displayDogSearchData(data) {
  const results = data.message.map((item, index) => displayDoggos(item));
  $('.js-results').html(results);
  
  $('.results').removeClass('hidden');
}

function listenToInput() {
  $('.js-search-form').submit(event => {
    event.preventDefault();
    const queTarget = $(event.currentTarget).find('.js-que');
    const que = queTarget.val();
     queTarget.val("3")
    console.log(que)
    getDoggos(que, displayDogSearchData);
  });
}


$(function() {
  console.log('App loaded! Waiting for you to find Doggers!');
  listenToInput();
});