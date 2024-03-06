import React, { useState } from 'react'
import { useHistory } from "react-router-dom";
import axios from 'axios';

const FormAddNews = () => {
    const [title, setTitle] = useState("");
  const [file, setFile] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
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
    formData.append("deskripsi", deskripsi);
    try {
      await axios.post("http://localhost:5000/news", formData, {
        headers: {
          "Content-type": "multipart/form-data",
        },
      });
      navigate.push("/list/news");
    } catch (error) {
        if (error.response) {
            setMsg(error.response.data.msg);
          }
    }
  };

  return (
    <div>
      <div className="column is-half">
      <h1 className="title">Input Artikel</h1>
      <h2 className="subtitle">Tambahkan Artikel Baru</h2>
        <form onSubmit={saveProduct}>
        <p className="has-text-centered">{msg}</p>
        <div className="field">
                <label className="label">Judul</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Judul Artikel"
                  />
                </div>
              </div>
          <div className="field">
            <label className="label">Thumbnail</label>
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
                <label className="label">Deskripsi Lab</label>
                <div className="control">
                  <textarea
                    type="text"
                    className="input"
                    value={deskripsi}
                    onChange={(e) => setDeskripsi(e.target.value)}
                    placeholder="Deskripsi Lab"
                  />
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

export default FormAddNews