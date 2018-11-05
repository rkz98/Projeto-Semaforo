const sinalVerde = 'assets/img/semaforos/verde.png';
const sinalVermelho = 'assets/img/semaforos/vermelho.png';
const sinalAmarelo = 'assets/img/semaforos/amarelo.png';
const sinalVermelhoAmarelo = 'assets/img/semaforos/vermelho_amarelo.png';

function myMap() {
  map = new google.maps.Map(document.querySelector("#googleMap"), {
    center: new google.maps.LatLng(-25.4843322, -49.2661591),
    zoom: 19,
    mapTypeId: 'satellite'
  });

  const locations = [
    ['Cruzamento 1', -25.484546, -49.265979],
    ['Cruzamento 2', -25.484138, -49.266540],
    ['Cruzamento 3', -25.484462, -49.266347],
    ['Cruzamento 3.1', -25.484248, -49.266181],
    ['Cruzamento 4', -25.484462, -49.266464],
    ['Cruzamento 5', -25.484482, -49.266127],
    ['Cruzamento 6', -25.484363, -49.265651],
    ['Cruzamento 6.1', -25.484363, -49.266463],
    ['Cruzamento 7', -25.484219, -49.265506]
  ];

  cruzamento1 = new google.maps.Marker({
    position: new google.maps.LatLng(locations[0][1], locations[0][2]),
    title: locations[0][0],
    map: map,
    icon: sinalVermelho
  });

  cruzamento2 = new google.maps.Marker({
    position: new google.maps.LatLng(locations[1][1], locations[1][2]),
    title: locations[1][0],
    map: map,
    icon: sinalVermelho
  });

  cruzamento3 = new google.maps.Marker({
    position: new google.maps.LatLng(locations[2][1], locations[2][2]),
    title: locations[2][0],
    map: map,
    icon: sinalVermelho
  });

  cruzamento31 = new google.maps.Marker({
    position: new google.maps.LatLng(locations[3][1], locations[3][2]),
    title: locations[3][0],
    map: map,
    icon: sinalVermelho
  });

  cruzamento4 = new google.maps.Marker({
    position: new google.maps.LatLng(locations[4][1], locations[4][2]),
    title: locations[4][0],
    map: map,
    icon: sinalVermelho
  });

  cruzamento5 = new google.maps.Marker({
    position: new google.maps.LatLng(locations[5][1], locations[5][2]),
    title: locations[5][0],
    map: map,
    icon: sinalVermelho
  });

  cruzamento6 = new google.maps.Marker({
    position: new google.maps.LatLng(locations[6][1], locations[6][2]),
    title: locations[6][0],
    map: map,
    icon: sinalVermelho
  });

  cruzamento61 = new google.maps.Marker({
    position: new google.maps.LatLng(locations[7][1], locations[7][2]),
    title: locations[7][0],
    map: map,
    icon: sinalVermelho
  });

  cruzamento7 = new google.maps.Marker({
    position: new google.maps.LatLng(locations[8][1], locations[8][2]),
    title: locations[8][0],
    map: map,
    icon: sinalVermelho
  });

}
