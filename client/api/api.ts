import axios from "axios";
import config from '../consts/config'

// const MockAdapter = require("axios-mock-adapter");

// const mock = new MockAdapter(axios);


const api = axios.create({
  baseURL: config.api_url,
  timeout: 15000,
  headers: {
    Authorization: config.auth_public_token,
    "Access-Control-Allow-Origin": "*"
  }
});

// mock.onGet("/api/videos").reply(200, [
//   {
//     imgUrl: 'https://umirzakov.site/static/ca11129044836553776d1bbd59807b73/empty_city.jpg',
//     webmUrl: 'https://umirzakov.site/static/cbd021cd0c0101b25eaa3f58d9b924a2/empty_city.webm',
//     title: "titel"
//   },

//   {
//     imgUrl: 'https://umirzakov.site/static/b4761178b1cfdecba17a16e1cab13c3a/adrenaline_call.jpg',
//     webmUrl: 'https://umirzakov.site/static/68f76c3f03d587e39c770bfe81efc168/adrenaline_call.webm',
//     title: "titel"
//   },

//   {
//     imgUrl: 'https://umirzakov.site/static/bab2efbbb209e08e6ecde8a7f64a813f/Weakspot.jpg',
//     webmUrl: 'https://umirzakov.site/static/907c11759ef124ee134b3f53eefe749f/Weakspot.webm',
//     title: "titel"
//   },

//   {
//     imgUrl: 'https://umirzakov.site/static/69a8c305ec0fca749b555824eb615288/Dombra_Trap.jpg',
//     webmUrl: 'https://umirzakov.site/static/cea95b676cfc087e4c737490a1d925cf/Dombra_Trap.webm',
//     title: "titel"
//   },

//   {
//     imgUrl: 'https://umirzakov.site/static/ca11129044836553776d1bbd59807b73/empty_city.jpg',
//     webmUrl: 'https://umirzakov.site/static/cbd021cd0c0101b25eaa3f58d9b924a2/empty_city.webm',
//     title: "titel"
//   },

//   {
//     imgUrl: 'https://umirzakov.site/static/ca11129044836553776d1bbd59807b73/empty_city.jpg',
//     webmUrl: 'https://umirzakov.site/static/cbd021cd0c0101b25eaa3f58d9b924a2/empty_city.webm',
//     title: "titel"
//   },



// ])


export { api };
