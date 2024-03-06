import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import DetailLab from "./DetailLab";
import { useDispatch, useSelector } from "react-redux";

const NewsList = () => {
    const dispatch = useDispatch();
    const [products, setProducts] = useState([]);
    const [labs, setLabs] = useState([]);
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const response = await axios.get("http://localhost:5000/news");
    setProducts(response.data);
  };

  const deleteProduct = async (productId) => {
    await axios.delete(`http://localhost:5000/news/${productId}`);
    getProducts();
  };

  return (
    <div>
    <h1 className="title">Input Artikel Baru</h1>
      <h2 className="subtitle">List Data Artikel</h2>
      <Link to="/add/news" className="button is-primary mb-2">
        Tambah Artikel Baru
      </Link>
      <h5 style={{fontSize: '20px', marginTop: '12px', marginBottom: '12px'}}>Data Barang Lab</h5>
      <table className="table is-striped is-fullwidth">
        <thead>
          <tr>
            <th>No</th>
            <th>Judul</th>
            <th>Deskripsi</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={product.uuid}>
              <td>{index + 1}</td>
              <td>{product.name}</td>
              <td><p className="has-text-black" style={{
                        fontSize: '18px',
                        textOverflow: 'ellipsis',
                        width: '250px',
                        whiteSpace: 'nowrap',
                        overflow:'hidden'}}>
                   {product.deskripsi}
                </p>
            </td>
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
    </div>
  );
};

export default NewsList;