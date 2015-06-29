function addThings(a,b){
  return a + b;
}

function getThings(){

  $.ajax({
    type: "Get",
    url: "http://echo.jsontest.com/name/bob"
  }).done(function(response){
    return response;
  });

}
