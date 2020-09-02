import axios from "axios";
import config from '../consts/config'

const MockAdapter = require("axios-mock-adapter");

const mock = new MockAdapter(axios);


const api = axios.create({
  baseURL: config.api_url,
  timeout: 15000,
  headers: {
    Authorization: config.auth_public_token,
    "Access-Control-Allow-Origin": "*"
  }
});

mock.onGet("/videos").reply(200, [{
  imgUrl: 'https://umirzakov.site/static/84ee5cc5de5e81ad54c1f37c3c1a1359/Beware_Intro.jpg',
  webmUrl: 'https://umirzakov.site/static/fbc080874ef31c90dd427a9b051ee4e5/Beware_Intro.webm',
  title: "titel"
},
{
  imgUrl: 'https://umirzakov.site/static/ca11129044836553776d1bbd59807b73/empty_city.jpg',
  webmUrl: 'https://umirzakov.site/static/cbd021cd0c0101b25eaa3f58d9b924a2/empty_city.webm',
  title: "titel"
},

{
  imgUrl: 'https://umirzakov.site/static/84ee5cc5de5e81ad54c1f37c3c1a1359/Beware_Intro.jpg',
  webmUrl: 'https://umirzakov.site/static/fbc080874ef31c90dd427a9b051ee4e5/Beware_Intro.webm',
  title: "titel"
},

{
  imgUrl: 'https://umirzakov.site/static/84ee5cc5de5e81ad54c1f37c3c1a1359/Beware_Intro.jpg',
  webmUrl: 'https://umirzakov.site/static/fbc080874ef31c90dd427a9b051ee4e5/Beware_Intro.webm',
  title: "titel"
},


])


export { api };
