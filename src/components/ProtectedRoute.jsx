import React, { useEffect } from 'react'
import useUser from './useUser'
import { useNavigate } from 'react-router-dom'
import LoadingLarge from './LoadingLarge'

export default function ProtectedRoute({children}) {
  const navigate = useNavigate()
  const { data, isPending ,Authenticated} =useUser()
 
  useEffect(() => {
    if (!Authenticated && !isPending) navigate("/");
  }, [isPending, Authenticated]);
  if(isPending) return <LoadingLarge/>
  

  if(Authenticated) return children
}
