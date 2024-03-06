import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useHistory } from "react-router-dom";

const FormEditLab2 = () => {
  const [title, setTitle] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [dosen, setDosen] = useState("");
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
        const response = await axios.get(`http://localhost:5000/labs/${id}`);
        setTitle(response.data.name);
        setFile(response.data.image);
        setPreview(response.data.url);
        setDeskripsi(response.data.deskripsi);
        setDosen(response.data.dosen);
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
    formData.append("deskripsi", deskripsi);
    formData.append("dosen", dosen);
    try {
      await axios.patch(`http://localhost:5000/labs/${id}`, formData, {
        headers: {
          "Content-type": "multipart/form-data",
        },
      });
      navigate.push("/labs");
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
                <label className="label">Laboratorium</label>
                <div className="control">
                  <div className="select is-fullwidth">
                    <select
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                    >
                      <option value="">Isi Nama Lab</option>
                      <option value="Lab. Instrumentasi & Robotika">Lab. Instrumentasi & Robotika</option>
                      <option value="Lab. Astrofisika">Lab. Astrofisika</option>
                      <option value="Lab. Fisika Bumi">Lab. Fisika Bumi</option>
                      <option value="Lab. Nuklir Medis">Lab. Nuklir Medis</option>
                      <option value="Lab. Modeling">Lab. Modeling</option>
                      <option value="Lab. Fisika Material">Lab. Fisika Material</option>
                      <option value="Lab. Karakterisasi Fisika Material">Lab. Karakterisasi Fisika Material</option>
                      <option value="Lab. Workshop">Lab. Workshop</option>
                      <option value="Lab. Fisika Dasar">Lab. Fisika Dasar</option>
                      <option value="Lab. Fiska Lanjutan">Lab. Fiska Lanjutan</option>
                    </select>
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
                <label className="label">Laboran</label>
                <div className="control">
                  <div className="select is-fullwidth">
                    <select
                      value={dosen}
                      onChange={(e) => setDosen(e.target.value)}
                    >
                      <option value="">Isi Nama Laboran</option>
                      <option value="Prof. Dr. Hj. Hasniah Aliah, S.Si., M.Si.">Prof. Dr. Hj. Hasniah Aliah, S.Si., M.Si.</option>
                      <option value="Dr. rer. nat. Imamal Muttaqien, S.Si., M.Si.">Dr. rer. nat. Imamal Muttaqien, S.Si., M.Si.</option>
                      <option value="Mada Sanjaya WS., S.Si, M.Si., Ph.D.">Mada Sanjaya WS., S.Si, M.Si., Ph.D.</option>
                      <option value="Dr. Moh. Nurul Subkhi, S.Si., M.Si.">Dr. Moh. Nurul Subkhi, S.Si., M.Si.</option>
                      <option value="Dr. Bebeh Wahid Nuryadin, S.Si., M.Si.">Dr. Bebeh Wahid Nuryadin, S.Si., M.Si.</option>
                      <option value="Dr. Yudha Satya Perkasa, S.Si., M.Si.">Dr. Yudha Satya Perkasa, S.Si., M.Si.</option>
                      <option value="Ridwan Ramdani, S.Si., M.Si.">Ridwan Ramdani, S.Si., M.Si.</option>
                      <option value="Tanti Dewinggih, S.Si., M.Si.">Tanti Dewinggih, S.Si., M.Si.</option>
                      <option value="Khoerun Nisa Syaja'ah, M.Si.">Khoerun Nisa Syaja'ah, M.Si.</option>
                      <option value="Irfan Syafar Farouk, S.Si.">Irfan Syafar Farouk, S.Si.</option>
                      <option value="Khoerun Nisa Syaja'ah, M.Si.">Rahma Sundaya Effendi, M.Si.</option>
                      <option value="Ate Mei Siskania S.Si.">Ate Mei Siskania S.Si.</option>
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

export default FormEditLab2;