import axios from 'axios';

import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const useFetch = (url) => {
const [state, setState]= useState({
  loading : false,
  data : [],
});
    useEffect(()=>{

      const fetchData = async ()=>{
        setState({loading: true, data:[]})
        try{
          setState({data: [], loading: true});
          let res = await fetch(url);
          let data =await res.json();
          setState({data: data, loading: false});
        }catch(e){
          console.log(e);
          setState({data: [], loading: false})
        }
        // await fetch(url).then((res)=> res.json()).then((data)=> setState({data : data,loading : false})).catch((e)=>);
      }
      fetchData();
      // getData();
    }, [url]);

  return state;
}

export default useFetch