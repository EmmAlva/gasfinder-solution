'use strict';

import $ from "jquery";
import StationModel from '../model/StationModel';

let callbacks = [];

const template = (root,stationData) => {
  const html = '<div class="station">'+
                '<h3>'+stationData.name+'</h3>'+
                '<p>'+stationData.address+'</p>'+
                '<p>'+stationData.district+'</p>'+
                '<a href="#" class="map-link">Ir al mapa</a>'+
              '</div>';
  const station = $(html);
  station.find('.map-link').on('click',(e) => {
    e.preventDefault();
    // callbacks.forEach((callback) => {
    //   callback(stationData);
    // });
    root.trigger('displayMap',stationData);
  });
  return station;
}

const renderStations = (root,stations) => {
  const container = $('.stations');
  container.empty();
  stations.forEach((station) => {
    container.append(template(root,station));
  });
}

const Search = {
  create: () => {
    const html = '<div class="search">'+
                    '<input type="text" placeholder="Ingresa tu distrito a buscar">'+
                 '</div>'+
                 '<div class="stations">'+
                 '</div>';
    const search = $(html);

    search.find('input').on('keyup',(e) => {
      const query = $(e.target).val();
      const stations = StationModel.getStations({
        by: "district",
        value: query
      });
      renderStations(stations);
    });
    return search;
  },
  onSelected: (callback) => {
    callbacks.push(callback);
  }
}

export default Search;
