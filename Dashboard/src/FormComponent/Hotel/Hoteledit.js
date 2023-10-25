import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { useFormik } from 'formik';

function HotelEdit() {
  const params = useParams();
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState(false);

  // Define a function to fetch the hotel data by ID
  const getHotelData = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/api/hotel/${params.id}`, {
        withCredentials: true,
      });
      myFormik.setValues(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getHotelData();
  },);

  const myFormik = useFormik({
    initialValues: {
      name: '',
      type: '',
      city: '',
      address: '',
      distance: '',
      title: '',
      desc: '',
      cheapestPrice: 0,
      featured: false,
    },
    validate: (values) => {
      let errors = {};
      if (!values.name) {
        errors.name = 'Please enter a name';
      }
      return errors;
    },
    onSubmit: async (values) => {
      try {
        setLoading(true);
        await axios.put(`http://localhost:8000/api/hotel/${params.id}`, values, {
          withCredentials: true,
        });
        setLoading(false);
        navigate(`/hotel-view/${params.id}`);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    },
  });

  return (
    <div>
      <h3>Edit Hotel - ID: {params.id}</h3>
      <form onSubmit={myFormik.handleSubmit}>
        <div>
          <label>Name</label>
          <input
            name="name"
            value={myFormik.values.name}
            onChange={myFormik.handleChange}
            type="text"
            className={`form-control ${myFormik.errors.name ? 'is-invalid' : ''}`}
          />
          <span style={{ color: 'red' }}>{myFormik.errors.name}</span>
        </div>

        <div>
          <label>Type</label>
          <input
            name="type"
            value={myFormik.values.type}
            onChange={myFormik.handleChange}
            type="text"
            className={`form-control ${myFormik.errors.type ? 'is-invalid' : ''}`}
          />
          <span style={{ color: 'red' }}>{myFormik.errors.type}</span>
        </div>

        <div>
          <label>City</label>
          <input
            name="city"
            value={myFormik.values.city}
            onChange={myFormik.handleChange}
            type="text"
            className={`form-control ${myFormik.errors.city ? 'is-invalid' : ''}`}
          />
          <span style={{ color: 'red' }}>{myFormik.errors.city}</span>
        </div>

        <div>
          <label>Address</label>
          <input
            name="address"
            value={myFormik.values.address}
            onChange={myFormik.handleChange}
            type="text"
            className={`form-control ${myFormik.errors.address ? 'is-invalid' : ''}`}
          />
          <span style={{ color: 'red' }}>{myFormik.errors.address}</span>
        </div>

        <div>
          <label>Distance</label>
          <input
            name="distance"
            value={myFormik.values.distance}
            onChange={myFormik.handleChange}
            type="text"
            className={`form-control ${myFormik.errors.distance ? 'is-invalid' : ''}`}
          />
          <span style={{ color: 'red' }}>{myFormik.errors.distance}</span>
        </div>

        <div>
          <label>Title</label>
          <input
            name="title"
            value={myFormik.values.title}
            onChange={myFormik.handleChange}
            type="text"
            className={`form-control ${myFormik.errors.title ? 'is-invalid' : ''}`}
          />
          <span style={{ color: 'red' }}>{myFormik.errors.title}</span>
        </div>

        <div>
          <label>Description</label>
          <input
            name="desc"
            value={myFormik.values.desc}
            onChange={myFormik.handleChange}
            type="text"
            className={`form-control ${myFormik.errors.desc ? 'is-invalid' : ''}`}
          />
          <span style={{ color: 'red' }}>{myFormik.errors.desc}</span>
        </div>

        <div>
          <label>Cheapest Price</label>
          <input
            name="cheapestPrice"
            value={myFormik.values.cheapestPrice}
            onChange={myFormik.handleChange}
            type="text"
            className={`form-control ${myFormik.errors.cheapestPrice ? 'is-invalid' : ''}`}
          />
          <span style={{ color: 'red' }}>{myFormik.errors.cheapestPrice}</span>
        </div>

        <div>
          <label>Featured</label>
          <input
            name="featured"
            type="checkbox"
            checked={myFormik.values.featured}
            onChange={myFormik.handleChange}
          />
        </div>

        <div>
          <input
            disabled={isLoading}
            type="submit"
            value={isLoading ? 'Updating...' : 'Update'}
            className="btn btn-primary"
          />
        </div>

      </form>
    </div>
  );
}

export default HotelEdit;
