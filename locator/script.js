(function() {
  var map;

  function flyToLocation(loc) {
    populateDynamicElement('')
    var marker = new mapboxgl.Marker()
      .setLngLat([loc.coords.longitude, loc.coords.latitude])
      .addTo(map);
    map.flyTo({
      center: [loc.coords.longitude, loc.coords.latitude],
      essential: true // this animation is considered essential with respect to prefers-reduced-motion
    });
  }

  function populateDynamicElement(text) {
    var dynamicElement = document.getElementById('dynamic')
    dynamicElement.innerHTML = text;
  }

  function addMap() {
    mapboxgl.accessToken = 'pk.eyJ1Ijoia2F2eWFzIiwiYSI6IlJ1OEhnbE0ifQ.PUa5qUoJXDK09m55jfikeg';
    map = new mapboxgl.Map({
      container: 'map', // container id
      style: 'mapbox://styles/kavyas/ckaweq74h1gws1ijvch7y7wrm?test', // stylesheet location
      center: [-74.5, 40], // starting position [lng, lat]
      zoom: 9 // starting zoom
    });
  }

  // Add your JS here
  window.addEventListener('load', function() {
    addMap();
    populateDynamicElement('Locating...')
    navigator.geolocation.getCurrentPosition(flyToLocation);
  });
})();
