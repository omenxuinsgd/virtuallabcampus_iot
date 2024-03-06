import React, {useEffect} from 'react'
import Layout from './Layout'
import JadwalList from '../../components/Dash/JadwalList'
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getMe } from '../../features/authSlice';

const ListJadwal = () => {
  const dispatch = useDispatch();
  const navigate = useHistory();
  const { isError } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  useEffect(() => {
    if (isError) {
      navigate.push("/Login");
    }
  }, [isError, navigate]);
  
  return (
    <Layout>
        <JadwalList/>
    </Layout>
  )
}

export default ListJadwal