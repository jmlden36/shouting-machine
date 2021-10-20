$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    const yourInput = $("input#yourText").val().toUpperCase();
    
      $(".yourText").text(yourInput);
    
    $("#story").show();

  });
});