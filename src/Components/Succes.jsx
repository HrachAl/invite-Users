import React from 'react'
import succes from "../img/succes.png"

const Succes = ({count}) => {
  return (
    <div className="succes">
        <img src={succes} alt="" />
        <p>Congratulations {count} Users in invited</p>
        <a href="/">

        <button>Back</button>
        </a>
    </div>
  )
}

export default Succes