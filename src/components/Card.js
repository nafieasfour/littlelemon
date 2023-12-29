import React from 'react';

const Card = () => {
    const data = [
        {
            id: 1,
            name: "Greek Salad",
            img: "https://cdn.dribbble.com/userupload/12197723/file/original-1e6a2a8e5b09eb76dfb1816600c2ca44.jpg?resize=850x567",
            price: "$ 12.99",
            desc: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
            order: "Order a delivery" + "🛵"
        },
        {
            id: 2,
            name: "Bruchetta",
            img: "https://cdn.dribbble.com/userupload/12197813/file/original-f495fc0a3a749429b232cc0c0ff3b300.jpeg?resize=1024x682",
            price: "$ 5.99",
            desc: "Our Bruchetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil",
            order: "Order a delivery" + "🛵"

        }, {
            id: 3,
            name: "Lemon Dessert",
            img: "https://cdn.dribbble.com/userupload/12197936/file/original-5d495166418adcace00cf9c9f3f2d53e.jpeg?resize=1024x1434",
            price: "$ 5.00",
            desc: "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined",
            order: "Order a delivery" + "🛵"
        }
    ]
    return (
        <div className="card">
            {data.map((d) => (
                <div key={d.id} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <img src={d.img} alt='' style={{ width: '100%', marginBottom: '10px' }} />
                    <div style={{ textAlign: 'center' }}>
                        <strong>{d.name}</strong>
                        <p>{d.price}</p>
                    </div>
                    <p>{d.desc}</p>
                </div>
            ))}
        </div>
    );
};

export default Card;
