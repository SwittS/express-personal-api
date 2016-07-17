console.log("Sanity Check: JS is working!");
var template;
var $dancemovesList;
var allDancemoves = [];

$(document).ready(function(){

  $dancemovesList = $('#dancemoveTarget');

  var source = $('#dancemoves-template').html();
  template = Handlebars.compile(source);

  $.ajax({
    method: 'GET',
    url: '/api/dancemoves',
    success: handleSuccess,
    error: handleError
  });

  $('#newDancemoveForm').on('submit', function(e) {
    e.preventDefault();
    $.ajax({
      method: 'POST',
      url: '/api/dancemoves',
      data: $(this).serialize(),
      success: newDancemoveSuccess,
      error: newDancemoveError
    });
  });

    $dancemovesList.on('click', '.deleteBtn', function() {
      $.ajax({
        method: 'DELETE',
        url: '/api/dancemoves/'+$(this).attr('data-id'),
        success: deleteDancemoveSuccess,
        error: deleteDancemoveError
      });
    });

function render () {
  $dancemovesList.empty();
  var dancemovesHtml = template({ dancemoves: allDancemoves });
  $dancemovesList.append(dancemovesHtml);
}
    function handleSuccess(json) {
      allDancemoves = json;
      render();
    }

    function handleError(e) {
      console.log('uh oh');
      $('#newDancemove').text('Failed to load dancemoves, is the server working?');
    }

    function newDancemoveSuccess(json) {
      $('newDancemove').val('');
      allDancemoves.push(json);
      render();
    }

    function newDancemoveError() {
      console.log('Sorry, the dance move was not created!');
    }

    function deleteDancemoveSuccess(json){
      var dancemove = json;
      console.log(json);
      var dancemoveId = dancemove._id;
      console.log('Delete this dance move:', dancemoveId);
      for(var i = 0; i < allDancemoves.length; i++){
        if(allDancemoves[i]._id === dancemoveId){
          allDancemoves.splice(i, 1);
          break;
        }
      }
      render();
    }

    function deleteDancemoveError(){
      console.log("The dance move was not deleted correctly.");
    }
});
