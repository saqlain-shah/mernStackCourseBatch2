import React from "react";
import users from "../user.png";
import "./Profile.css";

export const Profile = ({ empty }) => {
  const user = [
    {
      id: 1,
      name: "Rahman",
      image: users,
    },
    {
      id: 2,
      name: "Hamid",
      image: users,
    },
    {
      id: 3,
      name: "Imtiyaz",
      image: users,
    },
    {
      id: 4,
      name: "Abrar H",
      image: users,
    },
    {
      id: 5,
      name: "Imtiyaz",
      image: users,
    },
    {
      id: 6,
      name: "Abrar H",
      image: users,
    },
    {
      id: 7,
      name: "Ashraf",
      image: users,
    },
    {
      id: 8,
      name: "Abrar",
      image: users,
    },
    {
      id: 9,
      name: "Sajjad",
      image: users,
    },
    {
      id: 10,
      name: "Usama",
      image: users,
    },
  ];
  return (
    <div className="main">
      {user.length === 0
        ? empty
        : user.map((user, index) => {
            return (
              <div key={user.id} className="Cart">
                <img src={user.image} alt={user.name} />
                <h4>{user.name}</h4>
              </div>
            );
          })}
    </div>
  );
};
