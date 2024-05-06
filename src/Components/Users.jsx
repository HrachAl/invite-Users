import React from 'react'
import User from './User'
const Users = ({items,loading, 
    searchValue,
    onChangesearchValue,
    invites,
    onClickinvite,
    onClicksendinvites}) => {
        
  return (
     <>
     {
         loading? <p className='loading'>Loading...</p>:
         <ul className='users-list'>
            <div className='search'>
             <input placeholder='find user'  value={searchValue} onChange={onChangesearchValue} type="text" />
             <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="15" height="15" viewBox="0 0 50 50">
<path d="M 21 3 C 11.654545 3 4 10.654545 4 20 C 4 29.345455 11.654545 37 21 37 C 24.701287 37 28.127393 35.786719 30.927734 33.755859 L 44.085938 46.914062 L 46.914062 44.085938 L 33.875 31.046875 C 36.43682 28.068316 38 24.210207 38 20 C 38 10.654545 30.345455 3 21 3 z M 21 5 C 29.254545 5 36 11.745455 36 20 C 36 28.254545 29.254545 35 21 35 C 12.745455 35 6 28.254545 6 20 C 6 11.745455 12.745455 5 21 5 z"></path>
</svg>
            </div>
      
           { 
            items.filter((el)=>{
                const fullname = (el.first_name + el.last_name).toLowerCase()
                if(fullname.includes(searchValue.toLowerCase()) || el.email.toLowerCase().includes(searchValue.toLowerCase())){
                    return true
                }
            }).map((el) => (
                <User onClickinvite={onClickinvite} isInvited={invites.includes(el.id)} key={el.id} {...el}/>
            ))
           } 
           
           {
             invites.length > 0 && <button onClick={onClicksendinvites}>invited Users</button>
           }
      </ul>         
     }
      
     </>
  )
}

export default Users