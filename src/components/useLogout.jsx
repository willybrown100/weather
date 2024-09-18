import { useMutation, useQueryClient } from '@tanstack/react-query'
import React from 'react'
import { userLogout } from '../services/weatherApi'
import { useNavigate } from 'react-router-dom'

export default function useLogout() {
    const queryClient = useQueryClient();
    const navigate = useNavigate()
const {mutate,isPending}=useMutation({
    mutationFn:userLogout,
    onSuccess:()=>{
        queryClient.removeQueries()
navigate("/",{replace:true})
    }
})
return { mutate, isPending };
}
