import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { TextField, Button } from '@mui/material';
import './update.css';

export default function EditRestaurant() {
  const [restaurant, setRestaurant] = useState({
    restaurantid: '',
    restaurantname: '',
    outlets: '',
    location: '',
    offers: '',
    orderproviders: '',
    rating: '',
    contactno: '',
    timing: '',
    hallbookings: '',
    vegOrNonveg: '',
    AcORNonAc: '',
  });

  const { restaurantid, restaurantname, outlets, location, offers, orderproviders, rating, contactno, timing, hallbookings, vegOrNonveg, AcORNonAc } = restaurant;

  const onInputChange = (e) => {
    setRestaurant({ ...restaurant, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put('http://localhost:8080/put', restaurant);
    // Handle the submission logic
  };

  return (
    <div>
      <h1>Edit Restaurant Database</h1>
      <form onSubmit={onSubmit}>
        <TextField fullWidth label="Restaurant ID" placeholder="Enter restaurant ID" name="restaurantid" value={restaurantid} onChange={onInputChange} />
        <TextField fullWidth label="Restaurant Name" placeholder="Enter restaurant name" name="restaurantname" value={restaurantname} onChange={onInputChange} />
        <TextField fullWidth label="Outlets" placeholder="Enter number of outlets" name="outlets" value={outlets} onChange={onInputChange} />
        <TextField fullWidth label="Location" placeholder="Enter location" name="location" value={location} onChange={onInputChange} />
        <TextField fullWidth label="Offers" placeholder="Enter offers" name="offers" value={offers} onChange={onInputChange} />
        <TextField fullWidth label="Order Providers" placeholder="Enter order providers" name="orderproviders" value={orderproviders} onChange={onInputChange} />
        <TextField fullWidth label="Rating" placeholder="Enter rating" name="rating" value={rating} onChange={onInputChange} />
        <TextField fullWidth label="Contact Number" placeholder="Enter contact number" name="contactno" value={contactno} onChange={onInputChange} />
        <TextField fullWidth label="Timing" placeholder="Enter timing" name="timing" value={timing} onChange={onInputChange} />
        <TextField fullWidth label="Hall Bookings" placeholder="Enter hall bookings" name="hallbookings" value={hallbookings} onChange={onInputChange} />
        <TextField fullWidth label="Veg/Non-Veg" placeholder="Enter veg/non-veg" name="vegOrNonveg" value={vegOrNonveg} onChange={onInputChange} />
        <TextField fullWidth label="AC/Non-AC" placeholder="Enter ac/non-ac" name="AcORNonAc" value={AcORNonAc} onChange={onInputChange} />
        <Button type="submit">Save</Button>
      </form>
    </div>
  );
}