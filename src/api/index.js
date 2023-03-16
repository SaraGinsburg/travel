import axios from "axios";
const URL =
  "https://travel-advisor.p.rapidapi.com/attractions/list-in-boundary";
export const getPlacesData = async (sw, ne) => {
  console.log("sw", sw, "ne", ne);
  try {
    const {
      data: { data },
    } = await axios.get(URL, {
      params: {
        bl_latitude: sw.lat,
        tr_latitude: ne.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
      },
      headers: {
        "X-RapidAPI-Key": "e76129a069mshb3b096e4c7ade75p16bf8bjsne33c9363784d",
        "X-RapidAPI-Host": "opentripmap-places-v1.p.rapidapi.com",
      },
    });
    console.log("data", data);
    return data;
  } catch (error) {
    console.log(error);
  }
};
