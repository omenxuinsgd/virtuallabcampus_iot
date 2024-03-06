import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import moment from 'moment-timezone';

const FormEditProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [status, setStatus] = useState("");
  const [tenggat, setTenggat] = useState("");
  const [tgl_pinjam, setTglPinjam] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useHistory();
  const { id } = useParams();

  useEffect(() => {
    const getProductById = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/products/${id}`
        );
        setName(response.data.name);
        setPrice(response.data.price);
        setTglPinjam(response.data.tgl_pinjam);
        setTenggat(response.data.tenggat);
        setStatus(response.data.status);
      } catch (error) {
        if (error.response) {
          setMsg(error.response.data.msg);
        }
      }
    };
    getProductById();
  }, [id]);

  const updateProduct = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/products/${id}`, {
        name: name,
        price: price,
        tgl_pinjam: tgl_pinjam,
        tenggat: tenggat,
        status: status
      });
      navigate.push("/products");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  // Fungsi untuk mengonversi waktu ke zona waktu Indonesia Barat (WIB)
  function convertToWIB(dateTimeString) {
    const newDate = moment(dateTimeString).tz('Asia/Jakarta');
    return newDate.format('YYYY-MM-DDTHH:mm');
  }

  return (
    <div className="columns is-centered mt-5">
      <div className="column is-half">
      <h1 className="title">Peminjaman Barang</h1>
      <h2 className="subtitle">Edit Peminjaman Barang</h2>
      <div className="card is-shadowless">
        <div className="card-content">
          <div className="content">
            <form onSubmit={updateProduct}>
              <p className="has-text-centered">{msg}</p>
              <div className="field">
                <label className="label">Nama Barang</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Product Name"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Jumlah</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    placeholder="Price"
                  />
                </div>
              </div>
              <div className="field">
              <label className="label">Tanggal Peminjaman</label>
              <div className="control">
                  <input type="datetime-local" 
                  value={tgl_pinjam}
                  onChange={(e) => setTglPinjam(convertToWIB(e.target.value))}
                  />
              </div>
            </div>
              <div className="field">
              <label className="label">Tenggat Peminjaman</label>
              <div className="control">
                  <input type="datetime-local" 
                  value={tenggat}
                  onChange={(e) => setTenggat(convertToWIB(e.target.value))}
                  />
              </div>
            </div>

              <div className="field">
              <label className="label">Status</label>
              <div className="control">
                <div className="select is-fullwidth">
                  <select
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                  >
                    <option value="Dipinjam">Dipinjam</option>
                    <option value="Dikembalikan">Dikembalikan</option>
                  </select>
                </div>
              </div>
            </div>

              <div className="field">
                <div className="control">
                  <button type="submit" className="button is-success">
                    Update
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default FormEditProduct