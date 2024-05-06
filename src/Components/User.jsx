import React from 'react'
import plus from '../img/plus.jpg'
import minus from '../img/minus.jpg'
import { useState } from 'react'

const User = ({id, email, first_name, last_name, avatar, onClickinvite, isInvited}) => {
  const [chekched, setCheckhed] = useState(false)
  return (
    <>
        <li className='user-list'>
            <div className="avatar">
                <img src={avatar} alt="avatar" />
            </div>
            <div className="boo">
            <div className="foo">

            <h3>{first_name} {last_name}</h3>
            <p>
                {email}
            </p>
            </div>
            <img  onClick={()=> onClickinvite(id)} src={isInvited? minus: plus} alt="boo" />
            </div>
            {/* <div className="action">

            </div> */}
        </li>
    </>
  )
}

export default User