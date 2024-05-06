import { useState, useEffect } from 'react'
import Users from './Components/Users'
import Succes from './Components/Succes'

function App() {
   const [users,setUsers] = useState([])
   const [invites,setInvites] = useState([])
   const [loading,setLoading] = useState(true)
   const [succesed, setSuccesed] = useState(false)
   const [searchValue, setsearchValue] = useState("")


   function onChangesearchValue (e){
      setsearchValue(e.target.value)
   }
   
   function onClickinvite (id){
       if(invites.includes(id)){
          setInvites((prev)=> prev.filter(_id => _id != id))
       }else{
          setInvites((prev)=>[...prev, id])
       }
  }

  function onClicksendinvites () {
     setSuccesed(true)
  }

   useEffect(()=>{
     fetch('https://reqres.in/api/users').
     then((res)=>res.json()).
     then((res) => setUsers(res.data))
     .catch((err)=>console.warn(err)).finally(()=>setLoading(false))
     
   },[])

  return (
    <>

      
      { succesed? <Succes count={invites.length}/> : <Users onChangesearchValue={onChangesearchValue} 
      invites={invites} 
      onClickinvite={onClickinvite} 
      searchValue={searchValue} 
      loading={loading} 
      items={users}
      onClicksendinvites={onClicksendinvites}
      /> }
    </>
  )
}

export default App
