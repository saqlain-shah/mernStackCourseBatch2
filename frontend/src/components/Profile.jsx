import React from 'react'
import image from '../images/img_avatar2.png'


export default function Profile() {
    const user = [
        {
            name: 'Jaffer',
            imglocal: image,
            imageUrl: 'https://th.bing.com/th/id/OIP.ltJRVcwoIZbk3wZSw1MemQHaHa?w=166&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7'
        },

        {
            name: 'Abrar',
            imglocal: image,
            imageUrl: 'https://th.bing.com/th/id/OIP.Rg2FmvXuSaiA7GHVqvuY0QHaFj?w=180&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7'
        },

        {
            name: 'Mehboob',
            imglocal: image,
            imageUrl: 'https://th.bing.com/th?q=Avatar+Emoji&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.3&pid=InlineBlock&mkt=en-WW&cc=PK&setlang=en&adlt=moderate&t=1&mw=247'
        },

        {
            name: 'Imtiaz',
            imglocal: image,
            imageUrl: 'https://th.bing.com/th/id/OIP.nFhxHevP2W-Z7sNUGwzFVQHaGG?w=246&h=203&c=7&r=0&o=5&dpr=1.3&pid=1.7'
        },

        {
            name: 'Sajjad',
            imglocal: image,
            imageUrl: 'https://th.bing.com/th/id/OIP.TVr64JtVxSrxfNzEWt2KbAHaHa?w=193&h=192&c=7&r=0&o=5&dpr=1.3&pid=1.7'
        },

        {
            name: 'Ashraf',
            imglocal: image,
            imageUrl: 'data:image/jpeg;base64,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'
        },

        {
            name: 'Usama',
            imglocal: image,
            imageUrl: 'https://th.bing.com/th/id/OIP.bfbNmLdRBSXVwsUOnlKNsgHaHa?w=184&h=184&c=7&r=0&o=5&dpr=1.3&pid=1.7'
        },

        {
            name: 'Awais',
            imglocal: image,
            imageUrl: 'https://th.bing.com/th/id/OIP.qvwhgasAvJZ5FxzWYpMXEgHaHa?w=184&h=184&c=7&r=0&o=5&dpr=1.3&pid=1.7'
        },

        {
            name: 'Yasir',
            imglocal: image,
            imageUrl: 'https://th.bing.com/th/id/OIP.kEGxeNSAKRecDMUMgzCkuQHaHa?w=210&h=210&c=7&r=0&o=5&dpr=1.3&pid=1.7'
        },

        {
            name: 'Arif',
            imglocal: image,
            imageUrl: 'https://th.bing.com/th/id/OIF.h82rCwhtp9ZQlPIxi48aUQ?w=213&h=213&c=7&r=0&o=5&dpr=1.3&pid=1.7'
        },

        {
            name: 'Habibullah',
            imglocal: image,
            imageUrl: 'https://th.bing.com/th?id=OIF.er50lvwYf98a%2bsXLBxE14g&w=214&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7'
        },
        
        {
            name: 'Furqan',
            imglocal: image,
            imageUrl: 'https://th.bing.com/th?id=OIF.er50lvwYf98a%2bsXLBxE14g&w=214&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7'
        }
    ]
    return (
        <React.Fragment>
            <div className="card-view">
                {user.map((user, index) => (
                    <div key={index} className="card">
                        <center><h1>{user.name}</h1></center>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <figure>
                                <img
                                    src={user.imageUrl}
                                    alt={`profile of ${user.name}`}
                                    style={
                                        {
                                            width: 90,
                                            height: 90,
                                            borderRadius: 50
                                        }
                                    }

                                />
                                <figcaption style={{ marginTop: '10px', position: 'relative', left: '70%', transform: 'translate(-50%, -50%' }}>online</figcaption>
                            </figure>
                            <figure>
                                <img
                                    src={user.imglocal}
                                    alt={`profile of ${user.name}`}
                                    style={
                                        {
                                            width: 90,
                                            height: 90,
                                            borderRadius: 50
                                        }
                                    }

                                />
                                <figcaption style={{ marginTop: '10px', position: 'relative', left: '80%', transform: 'translate(-50%, -50%' }}>local</figcaption>
                            </figure>
                        </div>
                    </div>

                ))}

            </div>
        </React.Fragment>
    )
}
