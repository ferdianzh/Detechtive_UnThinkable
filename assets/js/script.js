$(function () {
    $(document).scroll(function () {
        var $nav = $(".navbar-fixed-top");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
});

var mymap = L.map("mapid").setView([-7.31223, 112.694148], 14);

  L.tileLayer(
    "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
    {
      attribution:
        'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 20,
      id: "mapbox/streets-v11",
      tileSize: 512,
      zoomOffset: -1,
      accessToken:
        "pk.eyJ1IjoiYWxmaWFubXJmIiwiYSI6ImNrOXQydmNjNTFicHkzcXRyY2ZrbGp0NXMifQ.PL7rFaUzO_MHYy_EAbAhmg",
    }
  ).addTo(mymap);

  var marker = L.marker([-7.31223, 112.694148]).addTo(mymap);