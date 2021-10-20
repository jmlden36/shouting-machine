$(document).ready(function() {
  $("#formOne").sumbit(function() {
    event.preventDefault();
    const yourInput = $("input#your-text").val();

    $(".your-text").text(yourInput);



  });
});