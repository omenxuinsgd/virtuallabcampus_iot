import React, {useEffect} from 'react'
import NewsList from '../../components/Dash/NewsList';
import Layout from './Layout'
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getMe } from '../../features/authSlice';

const ListNews = () => {
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
        <NewsList/>
    </Layout>
  )
}

export default ListNews