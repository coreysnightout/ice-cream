$(function() {
  $("form#favs").submit(function(event) {
    var blanks = ["flavor1", "flavor2", "flavor3"];

    blanks.forEach(function(blank) {
      var userInput = $("#" + blank).val();
      $("." + blank).text(userInput);
      $("output").show();
    });
    event.preventDefault();
  });
});
