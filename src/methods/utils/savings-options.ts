
export default function getsavingsOption(SelectedProtocol : string){

    const venus = [{
        "name":"",
        "code":"",
        "addresses": {
          "PROTOCOL_ADAPTER": "",
          "PROTOCOL_SERVICE": "",
          "GROUPS": "",
          "CYCLES": "",
          "ESUSU_SERVICE": "",
          "ESUSU_STORAGE": "",
          "ESUSU_ADAPTER": "",
          "COOPERATIVE": "",
          "PERSONAL": "",
          "CLIENT_RECORD": "",
          "XEND_TOKEN": "",
          "TOKEN": "",
          "PROTOCOL_CURRENCY": "",
        }
      }]

    const fortube = [{
        "name":"",
        "code":"",
        "addresses": {
          "PROTOCOL_ADAPTER": "",
          "PROTOCOL_SERVICE": "",
          "GROUPS": "",
          "CYCLES": "",
          "ESUSU_SERVICE": "",
          "ESUSU_STORAGE": "",
          "ESUSU_ADAPTER": "",
          "COOPERATIVE": "",
          "PERSONAL": "",
          "CLIENT_RECORD": "",
          "XEND_TOKEN": "",
          "TOKEN": "",
          "PROTOCOL_CURRENCY": "",
        },
        
      }]

    if(SelectedProtocol == 'venus'){
        return venus;
    }else if(SelectedProtocol == 'fortube'){
        return fortube;
    }

}