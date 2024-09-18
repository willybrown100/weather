import React from 'react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { login } from '../services/weatherApi'
import { redirect, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'

export default function useLogin() {
    const queryClient = useQueryClient()
    const navigate = useNavigate()
const {mutate,isPending}=useMutation({
    mutationFn:login,
    onSuccess:()=>{
        
navigate("/app", { replace: true });

    },
    onError:(err)=>{
        console.log(err)
        toast.error("provided email or password are invalid")
    }
})
return { mutate, isPending };
}
