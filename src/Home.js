import React, { useEffect } from 'react'
import { BioTable, Loader } from './components';
import { AddFrom } from './containers'
import { useDispatch, useSelector } from 'react-redux';
import { GetBioDetails } from './actions';
import { makeSelectLoading } from './selector';

function Home() {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(GetBioDetails())
  },[])

  const loading = useSelector(makeSelectLoading())

  return (
    <div className='container'>
        <AddFrom />
        <BioTable />
        { loading && <Loader /> }
    </div>
  )
}

export default  Home;