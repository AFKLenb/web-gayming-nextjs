"use client";
import GlobalApi from '@/utils/GlobalApi';
import React, { useEffect, useState } from 'react';

const usePakages = () => {
    const [packagesList, setPackagesList] = useState([]);

    useEffect(() => {
      getBenef();
    },[]);
  
    const getBenef = () => {
      GlobalApi.getPackages().then(resp => {
        console.log(resp.data.data)
        setPackagesList(resp.data.data);
      });
    }

    return packagesList;
}

export default usePakages
