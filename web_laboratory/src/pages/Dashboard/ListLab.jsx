import React, {useEffect} from 'react'
import LabList from '../../components/Dash/LabList';
import Layout from './Layout'
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getMe } from '../../features/authSlice';

const ListLab = () => {
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
        <LabList/>
    </Layout>
  )
}

export default ListLab