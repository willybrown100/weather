import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { getAuthUser } from '../services/weatherApi';

export default function useUser() {
const { data, isPending } = useQuery({
  queryKey: ["user"],
  queryFn: getAuthUser,
});
return { data, isPending, Authenticated: data?.role === "authenticated" }; 
}
