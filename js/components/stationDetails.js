'use strict';

const StationDetails = () => {
  const station = $('<div class="station-details"></div>');
  const h1 = $('<h1>'+state.selectedStation.name+'</h1>');
  const hr = $('<hr/>');
  const address = $('<p>'+state.selectedStation.address+'</p>');
  const products = $(state.selectedStation.products.map((p) => { return '<span class="product">'+p+'</span>';}).join(""));

  station.append(h1);
  station.append(hr);
  station.append(address);
  station.append(products);

  return station;
}
