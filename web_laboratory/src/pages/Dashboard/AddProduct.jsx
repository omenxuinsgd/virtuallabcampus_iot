import React, { useEffect } from 'react'
import Layout from './Layout'
import FormAddProduct from '../../components/Dash/FormAddProduct'
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getMe } from '../../features/authSlice';

const AddProduct = () => {
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
        <FormAddProduct/>
    </Layout>
  )
}

export default AddProduct