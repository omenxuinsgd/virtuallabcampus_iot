import React, {useEffect} from 'react'
import Layout from './Layout'
import CardVirtualLab from '../../components/Dash/CardVirtualLab';
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getMe } from '../../features/authSlice';

const KartuVirtualLab = () => {
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
        <CardVirtualLab/>
    </Layout>
  )
}

export default KartuVirtualLab