import React, { useEffect } from "react";
import Layout from "./Layout";
import Productlist2 from "../../components/Dash/ProductList2";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getMe } from "../../features/authSlice";

const Products2 = () => {
    const dispatch = useDispatch();
    const navigate = useHistory();
    const { isError } = useSelector((state) => state.auth);
  
    useEffect(() => {
      dispatch(getMe());
    }, [dispatch]);
  
    useEffect(() => {
      if (isError) {
        navigate.push("/");
      }
    }, [isError, navigate]);
    return (
      <Layout>
        <Productlist2 />
      </Layout>
    );
}

export default Products2