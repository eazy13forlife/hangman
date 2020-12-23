"use strict"

const getPuzzle=async(wordCount)=>{
  const responseObject=await fetch (`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
  if(responseObject.status===200){
    const puzzleObject=await responseObject.json()
    return puzzleObject.puzzle;
  }else{
    throw new Error `An error occured`
  }
}

export{getPuzzle as default};































/*
const getLocation=async()=>{
  const responseObject=await fetch("http://ipinfo.io/json?token=5ba1bbb5649a48");
  if(responseObject.status===200){
    const data=await responseObject.json();
    return data;
  }else{
    throw new Error("You've recieved an error")
  }
}
const getCountryName=async (countryCode)=>{
  const nook=await fetch("http://restcountries.eu/rest/v2/all");
  if(nook.status===200){
    const allCountries=await nook.json();
    const country=allCountries.find((country)=>country.alpha2Code===countryCode);
    return country.name;
  }else{
    throw new Error(`You've recieved an error`)
  }
}

const getCurrentCountry=async()=>{
  const responseLocation=await fetch("http://ipinfo.io/json?token=5ba1bbb5649a48");
  if(responseLocation.status===200){
    const data=await responseLocation.json();
    return getCountryName(data.country);
  }else{
    throw new Error(`You've received an error`);
  }
}

const getPuzzle=async (wordCount)=>{
  const response= await fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)

  if(response.status===200){
    const data=await response.json();
    return data.puzzle;
  }else{
    throw newError(`This is an error message`)
  }
}



//getPuzzle function returns a promise
const getPuzzleOld=(wordCount)=>{
return fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`).then((response)=>{
  if(response.status===200){
    return response.json()
  }else{
    throw new Error(`This is an error message`)
  }
})
}
const getCountryNameOld=(countryCode)=>{
  return fetch("http://restcountries.eu/rest/v2/all").then((response)=>{
    if(response.status===200){
      return response.json()
    }else{
      throw new Error(`This is an error`)
    }
  }).then((allCountries)=>{
      const country=allCountries.find((country)=>country.alpha2Code===countryCode)
      return country.name;
  })
}



const promiseGetLocation=()=>{
  return new Promise((resolve,reject)=>{
    const locationRequest=new XMLHttpRequest();

    locationRequest.addEventListener("readystatechange",(e)=>{
      if(e.target.readyState===4&&e.target.status===200){
        const location=JSON.parse(e.target.responseText);
        resolve(location);
      }else if(e.target.readyState===4){
        reject(`This is an error message`);
      }
    })
    locationRequest.open("GET","http://ipinfo.io/json?token=5ba1bbb5649a48");
    locationRequest.send();
  })
}
*/
