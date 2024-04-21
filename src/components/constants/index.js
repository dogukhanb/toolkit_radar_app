const options = {
  method: "GET",
  url: "https://flight-radar1.p.rapidapi.com/flights/list-in-boundary",
  params: {
    bl_lat: "34.395945",
    bl_lng: "24.795437",
    tr_lat: "43.431971",
    tr_lng: "44.980891",
    limit: "300",
  },
  headers: {
    "X-RapidAPI-Key": "45265695a1mshe1b7ae3dc7b3f5ap19e428jsnea5e60b503cb",
    "X-RapidAPI-Host": "flight-radar1.p.rapidapi.com",
  },
};

export const doptions = {};
