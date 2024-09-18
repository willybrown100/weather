import { useMutation } from '@tanstack/react-query'
import React from 'react'
import { signUpUser } from '../services/weatherApi'
import { redirect, useNavigate } from 'react-router-dom'

export default function useSignUp() {
    const navigate=useNavigate()
 const {mutate,isPending}=useMutation({
mutationFn:signUpUser,
onSuccess:()=>{
    navigate("/app");
}
})
return {mutate,isPending}
}
