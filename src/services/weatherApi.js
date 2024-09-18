
import {convertToFlag} from "../utils/utils"
import { supabase } from "./supabase";
export default async function getWeather(location) {

  try {
    // 1) Getting location (geocoding)
    setLoading(true)
    const geoRes = await fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${location}`
    );
    const geoData = await geoRes.json();
    console.log(geoData);

    if (!geoData.results) throw new Error("Location not found");

    const { latitude, longitude, timezone, name, country_code } =
      geoData.results.at(0);
    console.log(`${name} ${convertToFlag(country_code)}`);

    // 2) Getting actual weather
    const weatherRes = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=weathercode,relative_humidity_2m_max,temperature_2m_min,temperature_2m_max&timezone=${timezone}`
    );
    const weatherData = await weatherRes.json();
    console.log( weatherData.daily);
  } catch (err) {
    console.log(err);
  }finally{
  setLoading(false);
  }
}



  export async function signUpUser({email, password,name}) {
  const { data, error } = await supabase.auth.signUp({
    email: email,
    password: password,
    options: {
      data: {
        name: name, // Storing the user's name in metadata
      },
    },
  });

  if (error) {
    console.error('Error during sign up:', error.message);
    return null;
  }

  return data;
  }


  
  export async function login({email, password}) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });

  if (error) {
    throw new Error(error.message)
  
  }
console.log(data)
  return data;
}

  export async function getAuthUser() {
    const {data}=await supabase.auth.getSession()
 if (!data.session) return null;
const {
  data: { user },error
} = await supabase.auth.getUser();

if (error) {
  throw new Error(error.message) 
}
console.log(user)
return user 
}

export async function userLogout() {
  
  const { error } = await supabase.auth.signOut();
  
  if (error) {
    throw new Error(error.message) 
  }

}














