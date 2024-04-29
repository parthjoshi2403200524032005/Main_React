import React  from 'react';
import { useAtom } from 'jotai';


import { tab as tabAtom } from '../jotaistore';
// import { useState } from 'react';


export const Tab = () => {
 const parth = '10'

 const [tabValue, setTabValue] = useAtom(parth);
  
  console.log(tabValue);

  return (
    <>    <p>{}dsfdsfd</p>
    <p>{}</p>
    </>

  );
};
