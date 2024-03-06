import React from 'react'
import { useSelector } from "react-redux";
import Card from './Card';
import DetailFasilitas from './DetailFasilitas';

const Welcome = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <div>
      <h1 className="title is-size-5-mobile">Dashboard</h1>
      <h2 className="subtitle is-size-5-mobile">
        Welcome Back <strong>{user && user.name}</strong>
      </h2>
      <DetailFasilitas/>
    </div>
    
  )
}

export default Welcome