// $(document).ready(function() {
//   $("#form").submit(function(){
//     var nameInput = $("input#name").val();
//     $(".name").text(nameInput);
//
//     $("#story").show();
//
//     event.preventDefault();
//   });
// });
$(document).ready(function() {
  $("#btn1").click(function(event){
    event.preventDefault();
    $("#form").show();
        $("#submit").click(function(event){
          var nameInput = $("input#name").val();
          var addressInput = $("input#address").val();
          $("#receipt").text(name);
          event.preventDefault();
        });
  });
});
