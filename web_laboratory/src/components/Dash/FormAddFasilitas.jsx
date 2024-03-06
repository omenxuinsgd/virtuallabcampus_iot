import React, { useState } from 'react'
import { useHistory } from "react-router-dom";
import axios from 'axios';

const FormAddFasilitas = () => {
    const [title, setTitle] = useState("");
  const [file, setFile] = useState("");
  const [lab, setLab] = useState("");
  const [jumlah, setJumlah] = useState("");
  const [preview, setPreview] = useState("");
  const navigate = useHistory();
  const [msg, setMsg] = useState("");

  const loadImage = (e) => {
    const image = e.target.files[0];
    setFile(image);
    setPreview(URL.createObjectURL(image));
  };

  const saveProduct = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    formData.append("title", title);
    formData.append("jumlah", jumlah);
    formData.append("lab", lab);
    try {
      await axios.post("http://localhost:5000/fasilitas", formData, {
        headers: {
          "Content-type": "multipart/form-data",
        },
      });
      navigate.push("/dashboard");
    } catch (error) {
        if (error.response) {
            setMsg(error.response.data.msg);
          }
    }
  };

  return (
    <div>
      <div className="column is-half">
      <h1 className="title">Input Fasilitas Lab</h1>
      <h2 className="subtitle">Tambahkan Perangkat Baru Laboratorium</h2>
        <form onSubmit={saveProduct}>
        <p className="has-text-centered">{msg}</p>
        <div className="field">
                <label className="label">Nama Alat</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Nama Barang"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Laboratorium</label>
                <div className="control">
                  <div className="select is-fullwidth">
                    <select
                      value={lab}
                      onChange={(e) => setLab(e.target.value)}
                    >
                      <option value="">Isi Nama Lab</option>
                      <option value="instrument">Lab. Instrumentasi & Robotika</option>
                      <option value="astrofisika">Lab. Astrofisika</option>
                      <option value="geofisika">Lab. Fisika Bumi</option>
                      <option value="nuklir">Lab. Nuklir Medis</option>
                      <option value="modeling">Lab. Modeling</option>
                      <option value="fismat">Lab. Fisika Material</option>
                      <option value="karmat">Lab. Karakterisasi Fisika Material</option>
                      <option value="workshop">Lab. Workshop</option>
                      <option value="basic">Lab. Fisika Dasar</option>
                      <option value="advance">Lab. Fiska Lanjutan</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="field">
                <label className="label">Jumlah</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={jumlah}
                    onChange={(e) => setJumlah(e.target.value)}
                    placeholder="Nama Barang"
                  />
                </div>
              </div>
          <div className="field">
            <label className="label">Gambar Alat</label>
            <div className="control">
              <div className="file">
                <label className="file-label">
                  <input
                    type="file"
                    className="file-input"
                    onChange={loadImage}
                  />
                  <span className="file-cta">
                    <span className="file-label">Choose a file...</span>
                  </span>
                </label>
                {preview ? (
                    <figure className="image is-128x128">
                    <img src={preview} alt="Preview Image" />
                    </figure>
                ) : (
                    ""
                )}
              </div>
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
  );
}

export default FormAddFasilitas