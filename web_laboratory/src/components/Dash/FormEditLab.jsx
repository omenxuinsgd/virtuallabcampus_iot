import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useHistory } from "react-router-dom";

const FormEditLab = () => {
  const [title, setTitle] = useState("");
  const [jumlah, setJumlah] = useState("");
  const [lab, setLab] = useState("");
  const [file, setFile] = useState("");
  const [preview, setPreview] = useState("");
  const { id } = useParams();
  const navigate = useHistory();
  const [msg, setMsg] = useState("");

  useEffect(() => {
    getProductById();
  }, []);

  const getProductById = async () => {
    try{
        const response = await axios.get(`http://localhost:5000/fasilitas/${id}`);
        setTitle(response.data.name);
        setFile(response.data.image);
        setPreview(response.data.url);
        setJumlah(response.data.jumlah);
        setLab(response.data.lab);
    }catch(error){
        if (error.response) {
            setMsg(error.response.data.msg);
          }
        }
    }

  const loadImage = (e) => {
    const image = e.target.files[0];
    setFile(image);
    setPreview(URL.createObjectURL(image));
  };

  const updateProduct = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    formData.append("title", title);
    formData.append("jumlah", jumlah);
    formData.append("lab", lab);
    try {
      await axios.patch(`http://localhost:5000/fasilitas/${id}`, formData, {
        headers: {
          "Content-type": "multipart/form-data",
        },
      });
      navigate.push("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="columns is-centered mt-5">
      <div className="column is-half">
      <h1 className="title">Form Edit Barang</h1>
      <h2 className="subtitle">Mengedit Data Barang yang Ada Di Lab</h2>
        <form onSubmit={updateProduct}>
        <p className="has-text-centered">{msg}</p>
          <div className="field">
            <label className="label">Nama Barang</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
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
                value={jumlah}
                onChange={(e) => setJumlah(e.target.value)}
                placeholder="Product Name"
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
            <label className="label">Image</label>
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
              </div>
            </div>
          </div>

          {preview ? (
            <figure className="image is-128x128">
              <img src={preview} alt="Preview Image" />
            </figure>
          ) : (
            ""
          )}

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
  );
};

export default FormEditLab;