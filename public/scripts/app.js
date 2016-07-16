console.log("Sanity Check: JS is working!");

$(document).ready(function(){

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
  });
});
