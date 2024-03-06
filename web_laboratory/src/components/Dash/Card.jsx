import React from 'react'
import "./CardStyle/styles.css"

const Card = () => {
  return (
    <div className="kartu-container">
      <div className="kartu">
        <div className="kartu-content">
          <p className="kartu-title" style={{ color: 'white', fontWeight: 'bold' }}>Something Awesome</p>
          <p className="kartu-body" >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, culpa.
          </p>
          <a href="#" className="button">
            Learn More
          </a>
        </div>
      </div>
      <div className="kartu">
        <div className="kartu-content">
          <p className="kartu-title" style={{ color: 'white', fontWeight: 'bold' }}>Something Awesome</p>
          <p className="kartu-body">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, culpa.
          </p>
          <a href="#" className="button">
            Learn More
          </a>
        </div>
      </div>
      <div className="kartu">
        <div className="kartu-content">
          <p className="kartu-title" style={{ color: 'white', fontWeight: 'bold' }}>Something Awesome</p>
          <p className="kartu-body">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, culpa.
          </p>
          <a href="#" className="button">
            Learn More
          </a>
        </div>
      </div>
      <div className="kartu">
        <div className="kartu-content">
          <p className="kartu-title" style={{ color: 'white', fontWeight: 'bold' }}>Something Awesome</p>
          <p className="kartu-body">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, culpa.
          </p>
          <a href="#" className="button">
            Learn More
          </a>
        </div>
      </div>
    </div>
  )
}

export default Card