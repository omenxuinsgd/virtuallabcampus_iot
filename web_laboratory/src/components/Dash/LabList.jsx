import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import DetailLab from "./DetailLab";
import { useDispatch, useSelector } from "react-redux";

const LabList = () => {
    const dispatch = useDispatch();
    const [products, setProducts] = useState([]);
    const [labs, setLabs] = useState([]);
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    getProducts();
    getLabs();
  }, []);

  const getProducts = async () => {
    const response = await axios.get("http://localhost:5000/fasilitas");
    setProducts(response.data);
  };

  const deleteProduct = async (productId) => {
    await axios.delete(`http://localhost:5000/fasilitas/${productId}`);
    getProducts();
  };

  const getLabs = async () => {
    const response = await axios.get("http://localhost:5000/labs");
    setLabs(response.data);
  };

  const deleteLabs = async (productId) => {
    try {
      await axios.delete(`http://localhost:5000/labs/${productId}`);
      getLabs();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
    <h1 className="title">Input Data Laboratorium</h1>
      <h2 className="subtitle">List Detail Data Laboratorium</h2>
      <Link to="/add/labs" className="button is-primary mb-2">
        Tambah Lab Baru
      </Link>
      <Link to="/add/fasilitas" className="button is-info mb-2 ml-3">
        Tambah Barang Lab
      </Link>
      <h5 style={{fontSize: '20px', marginTop: '12px', marginBottom: '12px'}}>Data Barang Lab</h5>
      <table className="table is-striped is-fullwidth">
        <thead>
          <tr>
            <th>No</th>
            <th>Nama Barang</th>
            <th>Jumlah</th>
            <th>Lokasi</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={product.uuid}>
              <td>{index + 1}</td>
              <td>{product.name}</td>
              <td>{product.jumlah}</td>
              <td>{product.lab}</td>
              {user && user.role === "admin" && (
                <td>
                  <Link
                    to={`/edit/fasilitas/${product.id}`}
                    className="button is-small is-info"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => deleteProduct(product.id)}
                    className="button is-small is-danger"
                  >
                    Delete
                  </button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
      <h5 style={{fontSize: '20px', marginTop: '12px', marginBottom: '12px'}}>Data Laboratorium</h5>
      <table className="table is-striped is-fullwidth">
        <thead>
          <tr>
            <th>No</th>
            <th>Nama Lab</th>
            <th>Laboran</th>
            <th>Deskripsi</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {labs.map((lab, index) => (
            <tr key={lab.uuid} >
              <td>{index + 1}</td>
              <td>{lab.name}</td>
              <td>{lab.dosen}</td>
              <td><p className="has-text-black" style={{
                        fontSize: '18px',
                        textOverflow: 'ellipsis',
                        width: '250px',
                        whiteSpace: 'nowrap',
                        overflow:'hidden'}}>
                   {lab.deskripsi}
                </p>
            </td>
              {user && user.role === "admin" && (
                <td>
                  <Link
                    to={`/edit/labs/${lab.id}`}
                    className="button is-small is-info"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => deleteLabs(lab.id)}
                    className="button is-small is-danger"
                  >
                    Delete
                  </button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LabList;