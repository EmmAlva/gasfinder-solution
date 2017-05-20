'use strict';

const init = (parent) => {
  let map = new GMaps({
    el: parent,
    lat: state.selectedStation.lat,
    lng: state.selectedStation.long
  });

  map.addMarker({
    lat: state.selectedStation.lat,
    lng: state.selectedStation.long,
    title: state.selectedStation.name,
    zoom: 13
  })
}

const GMap = () => {
  const wrapper = $('<div id="map"></div>');
  wrapper.init = init.bind(null,wrapper.get(0));
  return wrapper;
}
