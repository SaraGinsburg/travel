import React from "react";
import GoogleMapReact from "google-map-react";
import { Paper, Typography, useMediaQuery } from "@material-ui/core";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import Rating from "@material-ui/lab";

// import mapStyles from "../../";
import useStyles from "./styles";

// console.log(${process.env.REACT_APP_GOOGLE_API_KEY})
const Map = ({ coordinates, setCoordinates, setBounds }) => {
  console.log("coordinates", coordinates);
  const classes = useStyles();
  const isMobile = useMediaQuery("(min-width:600px");

  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        // bootstrapURLKeys={{ key: `${process.env.REACT_APP_GOOGLE_API_KEY}` }}
        bootstrapURLKeys={{ key: "AIzaSyDlEFYHvlds5cZ38QfXpS0WqGt4I0ula2o" }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={3}
        margin={[50, 50, 50, 50]}
        options={""}
        onChange={(e) => {
          setCoordinates({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
        onChildClick={""}
      ></GoogleMapReact>
    </div>
  );
};

export default Map;
