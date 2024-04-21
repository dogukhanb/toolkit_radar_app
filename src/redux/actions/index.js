import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getFlights = createAsyncThunk("fligts/getFlights", async () => {
  // api isteği at

  const res = await axios.request(options);
  // gelen veriyi formatla
  const formatted = res.data.aircraft.map((item) => ({
    id: item[0],
    code: item[1],
    lat: item[2],
    lng: item[3],
  }));
  //aksiyonunun payload 'ı olarak formatlanan veriyi ekle
  return formatted;
});
