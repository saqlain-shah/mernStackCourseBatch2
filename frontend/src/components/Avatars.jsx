import React from 'react'
import Image from '../Images/avatar.png'
const user = [
    {
        name: 'Imtiaz Ali',
        imageUrl: Image,
        imageSize: 90,
    },

    {
        name: 'Jaffer Hussain',
        imageUrl: Image,
        imageSize: 90,
    },

    {
        name: 'Abrar Hussain ',
        imageUrl: Image,
        imageSize: 90,
    },

    {
        name: 'Sajjad Sajju',
        imageUrl: Image,
        imageSize: 90,
    },

    {
        name: 'Usama',
        imageUrl: Image,
        imageSize: 90,
    },

    {
        name: 'Sada',
        imageUrl: Image,
        imageSize: 90,
    }

];


export const Avatars = () => {
    return (
        <>
            {user.map((user, index) => {
                return (
                    <div key={index}>
                        <img src={user.imageUrl} alt={`Avatar of ${user.name}`}
                            style={{
                                width: user.imageSize,
                                height: user.imageSize,
                            }} />
                        <p>{user.name}</p>
                    </div>
                );
            })}
        </>
    );
};

