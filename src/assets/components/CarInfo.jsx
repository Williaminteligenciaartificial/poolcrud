import React from 'react'

const CarInfo = ({car}) => {
  return (
    <article>
        <h2>#{car.id}- {car.brand} {car.model}</h2>
        <ul>
            <li>
                <span>year</span><span>{car.year}</span>
            </li>
            <li>
                <span>color</span><span>{car.color}</span>
            </li>
            <li>
                <span>price</span><span>{car.price}</span>
            </li>

        </ul>
    </article>
  )
}

export default CarInfo