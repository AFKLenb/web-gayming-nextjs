"use client";
import GlobalApi from '@/utils/GlobalApi';
import React, { useEffect, useState } from 'react';

const useBenefits = () => {
    const [benefitsList, setBenefitsList] = useState([]);

    useEffect(() => {
      getBenef();
    },[]);
  
    const getBenef = () => {
      GlobalApi.getBenefists().then(resp => {
        setBenefitsList(resp.data.data);
      });
    }

    return benefitsList;
}

export default useBenefits
