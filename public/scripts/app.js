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

  $('#newDancemove').on('submit', function(e) {
    e.preventDefault();
    $.ajax({
      method: 'POST',
      url: '/api/dancemoves',
      data: $(this).serialize(),
      success: newDancemoveSuccess,
      error: newDancemoveError
    });

    $dancemovesList.on('click', '.deleteBtn', function() {
      $.ajax({
        method: 'DELETE',
        url: '/api/dancemoves/'+$(this).attr('data-id'),
        success: deleteDancemoveSuccess,
        error: deleteDancemoveError
      });
    });
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

    }

    function deleteDancemoveSuccess(json){
      var dancemove = json;
      var dancemoveId = dancemove._id;

      for(var index = 0; index < allDancemoves.length; index++){
        if(allDancemoves[index]._id === dancemoveId){
          allDancemoves.splice(index, 1);
          break;
        }
      }
      render();
    }

    function deleteDancemoveError(){

    }
