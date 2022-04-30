$(function(){
  $('form').submit(function (e) { 
    e.preventDefault();
    let $name = $('#name').val();
    let $quantity = $('#quantity').val() || 1;

    $('#grocery-list').append(`<li>${$quantity} ${$name}</li>`);
    $('form').trigger('reset');
  });
})