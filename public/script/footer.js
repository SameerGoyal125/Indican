document.getElementById("year").innerHTML = new Date().getFullYear();

$("#insta").on("mouseover", function () {
  $("#insta").attr("src", "/static/social/instagram-1.png");
});
$("#insta").on("mouseout", function () {
  $("#insta").attr("src", "/static/social/instagram.png");
});

$("#whatsapp").on("mouseover", function () {
  $("#whatsapp").attr("src", "/static/social/whatsapp-1.png");
});
$("#whatsapp").on("mouseout", function () {
  $("#whatsapp").attr("src", "/static/social/whatsapp.png");
});
