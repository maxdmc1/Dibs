import React, { useState, useEffect } from "react";
import axios from "axios";
import queryString from "query-string";
import Menu from "./../Navbar/Navbar";
import Schedule from "../Schedule/Schedule";

export default function Trip() {
  const [trip, setTrip] = useState([]);
  const [tripData, setTripData] = useState({});
  const [reserved, setReserved] = useState(false);
  const [bedroomName, setBedroomName] = useState("");
  const [roomType, setRoomType] = useState("");
  const [groceryList, setGroceryList] = useState([]);

  useEffect(() => {
    // console.log('postArray',props.postArray.title)
    console.log("Here is the path = ", window.location.pathname);

    console.log(queryString.parse(window.location.search).id);
    const id = queryString.parse(window.location.search).id;
    // console.log(...props);
    console.log("Loading Data into State in Trip Component");
    axios.get(`/api/trips/trip/${id}`).then(res => {
      console.log("trip data: ", res.data);
      setTripData(res.data);
    });
  }, []);

  console.log("this is the Trips Data: ", tripData);

  function numberDays() {
    const oneDay = 24 * 60 * 60 * 1000; //hours*minutes*seconds*milliseconds
    const firstDate = new Date(Array.isArray(tripData) && tripData[0].firstDay);
    const secondDate = new Date(Array.isArray(tripData) && tripData[0].lastDay);
    const diffDays = Math.round(Math.abs((firstDate - secondDate) / oneDay));

    console.log(firstDate, secondDate);
    console.log(tripData.firstDay);
    console.log("diff days ", diffDays);
    console.log("state inside funct ", tripData);
  }

  numberDays();
  console.log(Array.isArray(tripData));

  return (
    <>
      <Menu />
      <div>
        <h1>Hello this is {tripData.TripName} Page</h1>
      </div>
      <div>
        <Schedule key="idx" />
      </div>
    </>
  );
}
