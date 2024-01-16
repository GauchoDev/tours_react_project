import React from 'react'
import Tour from './Tour'
/*
The Tours component will be responsible for rendering a list of Tour components.
*/
const Tours = ({ tours, handleRemoveTour }) => {
  return (
    <section>
      <div className="title">
        <h2>Our Tours</h2>
        <div className="title-underline"></div>
      </div>
      <div className="tours">
        {tours.map((tour) => {
          return (
            <div key={tour.id}>
              <Tour
                key={tour.id}
                {...tour}
                handleRemoveTour={handleRemoveTour}
              />
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Tours
