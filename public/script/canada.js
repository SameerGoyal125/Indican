
  $("#diploma").click(function () {
    console.log("here");
    $("#data1").text("15000");
    $('#data2').text("27935");
  });

  $("#degree").click(function () {
    
    $("#data1").text("20000");
    $('#data2').text("32935");
    
  });
$(".button").click(function () {
    
    $(".button").removeClass("actives");
    $(this).addClass("actives");
  });