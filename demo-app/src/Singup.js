import React from 'react'
import {Formik} from "formik";
const Singup = () => {
  return (
    <Formik>
  {()=>{
    
  }}

  <div class="form-container">
      <form action="#" method="post">
        <div class="form-section">
          <label class="form-label" for="name">Name:</label>
          <input
            class="form-input"
            type="text"
            id="name"
            name="name"
            required
          />
        </div>

        <div class="form-section">
          <label class="form-label" for="email">Email:</label>
          <input
            class="form-input"
            type="email"
            id="email"
            name="email"
            required
          />
        </div>

        <div class="form-section">
          <label class="form-label" for="age">Age:</label>
          <input
            class="form-input"
            type="number"
            id="age"
            name="age"
            required
          />
        </div>

        <div class="form-section">
          <label class="form-label" for="gender">Gender:</label>
          <select class="form-select" id="gender" name="gender" required>
            <option value="" disabled selected>Select your gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div class="form-section">
          <label class="form-label">Hobbies:</label>
          <div class="form-checkbox-group">
            <label class="form-checkbox-label">
              <input type="checkbox" name="hobbies" value="reading" />
              Reading
            </label>
            <label class="form-checkbox-label">
              <input type="checkbox" name="hobbies" value="traveling" />
              Traveling
            </label>
            <label class="form-checkbox-label">
              <input type="checkbox" name="hobbies" value="sports" />
              Sports
            </label>
          </div>
        </div>

        <div class="form-section">
          <label class="form-label">Your Message:</label>
          <textarea
            class="form-input"
            name="message"
            rows="4"
            required
          ></textarea>
        </div>

        <div class="form-section">
          <button class="form-submit" type="submit">Submit</button>
        </div>
      </form>
      </div>
       
    </Formik>
  )
}

export default Singup