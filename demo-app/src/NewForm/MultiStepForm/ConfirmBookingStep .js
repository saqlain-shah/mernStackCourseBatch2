import React from "react";

const ConfirmBookingStep = ({ formProps }) => {
  const { values } = formProps;

  return (
    <div className="container">
      <br />
      <br />
      <table>
        <thead>
          <tr>
            <th colSpan={16}>Booking Detail</th>
          </tr>
          <tr>
            <th colSpan={3}>To</th>
            <th colSpan={3}>From</th>
            <th colSpan={3}>Adult</th>
            <th colSpan={3}>Children</th>
            <th colSpan={3}>Infant</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan={3}>{values.to}</td>
            <td colSpan={3}>{values.from}</td>
            <td colSpan={3}>{values.adult}</td>
            <td colSpan={3}>{values.children}</td>
            <td colSpan={3}>{values.infant}</td>
          </tr>
        </tbody>
      </table>
      <br />
      <br />
      <table>
        <thead>
          <tr>
            <th colSpan={19}>Flight Detail</th>
          </tr>
          <tr>
            <th colSpan={3}>Airlane</th>
            <th colSpan={3}>Cabin</th>
            <th colSpan={3}>BasicFare</th>
            <th colSpan={3}>Texax</th>
            <th colSpan={3}>SC</th>
            <th colSpan={3}>Discount</th>
            <th colSpan={3}>Total Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan={3}>{values.airlineName}</td>
            <td colSpan={3}>{values.cabinName}</td>
            <td colSpan={3}>{values.basicfare}</td>
            <td colSpan={3}>{values.taxes}</td>
            <td colSpan={3}>{values.sc}</td>
            <td colSpan={3}>{values.discount}</td>
            <td colSpan={3}>{values.totalAmount}</td>
          </tr>
        </tbody>
      </table>
      <br />
      <br />
      <table>
        <thead>
          <tr>
            <th colSpan={22}>Personal Information </th>
          </tr>
          <tr>
            <th colSpan={3}>Gender</th>
            <th colSpan={3}>First Name</th>
            <th colSpan={3}>sur Name</th>
            <th colSpan={3}>dob</th>
            <th colSpan={3}>email</th>
            <th colSpan={3}>phone</th>
            <th colSpan={3}>pnr</th>
            <th colSpan={3}>ticket</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan={3}>{values.gender}</td>
            <td colSpan={3}>{values.FirstName}</td>
            <td colSpan={3}> {values.surName}</td>
            <td colSpan={3}>{values.dobName}</td>
            <td colSpan={3}> {values.email}</td>
            <td colSpan={3}>{values.phone}</td>
            <td colSpan={3}> {values.pnr}</td>
            <td colSpan={3}> {values.ticket}</td>
          </tr>
        </tbody>
      </table>
      <br />
      <button type="button" onClick={formProps.handleSubmit}>
        Confirm Booking
      </button>
    </div>
  );
};

export default ConfirmBookingStep;
