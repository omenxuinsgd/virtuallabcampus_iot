import React, {useEffect} from 'react'
import TabelJadwal from '../../components/Dash/TabelJadwal'
import Layout from './Layout'
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getMe } from '../../features/authSlice';
// import { Schedule } from '../../components/Schedule/Schedule'

const Jadwal = () => {
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
        <TabelJadwal/>
    </Layout>
  )
}

export default Jadwal