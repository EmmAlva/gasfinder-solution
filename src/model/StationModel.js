'use strict';

const stations = [{
  name: 'Acosa',
  address: 'Av. Faucett 876',
  district: 'San Miguel',
  lat: '',
  long: '',
  products: [86,90,95,97]
},{
  name: 'Pecsa',
  address: 'Av. La Marina 3375',
  district: 'San Miguel',
  lat: '',
  long: '',
  products: [90,95,97]
},{
  name: 'El carmelo',
  address: 'Pershing 768',
  district: 'San Felipe',
  lat: '',
  long: '',
  products: [90,95]
},{
  name: 'Gasolinas de america',
  address: 'Petit thouars 3305 - 3307',
  district: 'San Isidro',
  lat: '',
  long: '',
  products: [86,90,95,97]
}];


const StationModel = {
    getStations: (query) => {
      if (query === undefined) return stations;

      return stations.filter((station) => {
        return station[query.by].toLowerCase().indexOf(query.value.toLowerCase()) != -1;
      });
    },
    getDistricts: (query) => {
      const districts = stations.map((station) => {
        return station["district"];
      });
      const uniqueDistricts =  [...new Set(districts)];
      return uniqueDistricts.filter((district) => {
        return district.toLowerCase().indexOf(query.toLowerCase()) != -1;
      });
    }
}

export default StationModel
