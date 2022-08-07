import { defineStore } from 'pinia'

import axios from 'axios'

export const useCPCGasStationStore = defineStore({
  id: 'cpc_gas_station',
  state: () => ({
    rawData: ''
  }),
  getters: {
    rawData: (state) => state.rawData
  },
  actions: {
    queryAllGasStation() {
      console.log('queryAllGasStation');
      return axios.get('https://vipmbr.cpc.com.tw/CPCSTN/STNWebService.asmx/getStationInfo_XML')
        .then(response => {
          console.log(response.data);
          console.log(response.status);
          console.log(response.statusText);
          console.log(response.headers);
          console.log(response.config);
        })
        .catch(err => {
          console.error(err);
        })
    }
  }
})
