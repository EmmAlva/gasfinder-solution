'use strict';

const StationItem = (props) => {
  const st = $('<div class="station"></div>');
  const name = $('<h3>'+props.station.name+'</h3>');
  const address = $('<p>'+props.station.address+'</p>');
  const district = $('<p>'+props.station.district+'</p>');
  const maplink = $('<a href="#" class="maplink"><i class="fa fa-map" aria-hidden="true"></i></a>');

  st.append(name);
  st.append(address);
  st.append(district);
  st.append(maplink);

  maplink.on('click',(e) => {
    e.preventDefault();
    state.selectedStation = props.station;
    props.update();
  });

  return st;
}

const reRender = (container,filteredStations,update) => {
  container.empty();
  filteredStations.forEach((station) => {
    const stationItem = StationItem({
      station: station,
      update:  update
    });
    container.append(stationItem);
  });
}

const Search = (update) => {
  const parent = $('<div></div>');
  const search = $('<div class="search"></div>');
  const icon = $('<i class="fa fa-search" aria-hidden="true"></i>');
  const input = $('<input type="text" placeholder="Ingresa tu distrito a buscar">');
  const stations = $('<div class="stations"></div>');

  input.on('keyup', (e) => {
    const filteredStations = filterByDistrict(state.stations,$(e.target).val());
    reRender(stations,filteredStations,update);
  });

  parent.append(search);
  parent.append(stations);
  search.append(icon);
  search.append(input);

  return parent;
}
