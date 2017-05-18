'use strict';

import $ from "jquery";
import Search from '../components/Search';
import Map from '../components/Map';
import StationDetails from '../components/StationDetails';

const GasFinder = {
  init: () => {
    const root = $('.root');
    root.empty();
    const search = Search.create();
    search.on('show', GasFinder.showStationDetails);
    root.append(search);
  },
  showStationDetails: (station) => {
    const root = $('.root');
    root.empty();
    const map = Map.render(station);
    root.append(map);
    root.append(StationDetails.render(station));
  }
}

export default GasFinder;
