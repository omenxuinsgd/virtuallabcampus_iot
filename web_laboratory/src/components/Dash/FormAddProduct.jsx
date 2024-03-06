import React, { useState } from 'react'
import { useHistory } from "react-router-dom";
import axios from 'axios';
import moment from 'moment-timezone';

const FormAddProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [tenggat, setTenggat] = useState("");
  const [tgl_pinjam, setTglPinjam] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useHistory();

  const saveProduct = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/products", {
        name: name,
        price: price,
        tgl_pinjam: tgl_pinjam,
        tenggat: tenggat,
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
    <div>
      <h1 className="title">Form Peminjaman Barang</h1>
      <h2 className="subtitle">Silahkan isi form untuk meminjam barang laboratorium fisika</h2>
      <div className="card is-shadowless">
        <div className="card-content">
          <div className="content">
            <form onSubmit={saveProduct}>
              <p className="has-text-centered">{msg}</p>
              <div className="field">
                <label className="label">Nama Barang</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Nama Barang"
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
                    placeholder="Jumlah Peminjaman Barang"
                  />
                </div>
              </div>
              <div className="field">
              <label className="label">Tanggal Peminjaman</label>
              <div className="control">
                  <input type="datetime-local"
                  value={tgl_pinjam}
                  onChange={(e) => setTglPinjam(convertToWIB(e.target.value))}
                  placeholder="Tanggal Peminjaman Barang" />
              </div>
            </div>
              <div className="field">
              <label className="label">Tenggat Peminjaman</label>
              <div className="control">
                  <input type="datetime-local"
                  min="2024-02-23T00:00"
                  max="2025-06-14T00:00"
                  value={tenggat}
                  onChange={(e) => setTenggat(convertToWIB(e.target.value))}
                  placeholder="Tenggat Peminjaman Barang" />
              </div>
            </div>

              <div className="field">
                <div className="control">
                  <button type="submit" className="button is-success">
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FormAddProduct