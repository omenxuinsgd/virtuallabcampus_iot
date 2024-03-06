import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import moment from 'moment-timezone';

const Productlist = () => {
  const [products, setProducts] = useState([]);
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const response = await axios.get("http://localhost:5000/products");
    setProducts(response.data);
  };

  const deleteProduct = async (productId) => {
    await axios.delete(`http://localhost:5000/products/${productId}`);
    getProducts();
  };

  // Fungsi untuk mengonversi waktu ke zona waktu Indonesia Barat (WIB)
  function convertToWIB(dateTimeString) {
    const newDate = moment(dateTimeString).tz('Asia/Jakarta');
    return newDate.format('YYYY-MM-DDTHH:mm');
  }

  return (
    <div>
      <h1 className="title is-size-5-mobile">Permohonan Peminjaman Barang</h1>
      <h2 className="subtitle is-size-6-mobile">List Peminjaman Barang</h2>
      <Link to="/products/add" className="button is-primary mb-5 is-size-7-mobile">
        Tambah Baru
      </Link>
      <div className="table-container">
      <table className="table is-striped is-fullwidth is-size-7-mobile" >
        <thead>
          <tr>
            <th>No</th>
            <th>Nama Barang</th>
            <th>Jumlah</th>
            <th>Peminjam</th>
            <th>Tgl. Peminjaman</th>
            <th>Tenggat Peminjaman</th>
            <th>Status</th>
            {user && user.role === "admin" && (
              <th>Actions</th>
            )}
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={product.uuid}>
              <td>{index + 1}</td>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.user.name}</td>
              <td>{convertToWIB(product.tgl_pinjam)}</td>
              <td>{convertToWIB(product.tenggat)}</td>
              <td>{product.status}</td>
              {user && user.role === "admin" && (
                <td>
                  <Link
                    to={`/products/edit/${product.uuid}`}
                    className="button is-small is-info"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => deleteProduct(product.uuid)}
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
    </div>
  );
}

export default Productlist