import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useHistory } from "react-router-dom";

const ViewNews = () => {
  const [title, setTitle] = useState("");
  const [file, setFile] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [dosen, setDosen] = useState("");
  const [judul, setJudul] = useState("");
  const [createdAt, setCreatedAt] = useState("");
  const [preview, setPreview] = useState("");
  const { id } = useParams();
  const navigate = useHistory();

  useEffect(() => {
    getLabsById();
  }, []);

  const getLabsById = async () => {
    const response = await axios.get(`http://localhost:5000/labs/${id}`);
    setTitle(response.data.name);
    setFile(response.data.image);
    setPreview(response.data.url);
    setDeskripsi(response.data.deskripsi);
    setDosen(response.data.dosen);
    setCreatedAt(response.data.createdAt);
    setJudul(response.data.judul);
  };

  const loadImage = (e) => {
    const image = e.target.files[0];
    setFile(image);
    setPreview(URL.createObjectURL(image));
  };
  return (
    <div className="container">
      <div className="box">
        <article className="media">
          <div className="media-content">
            <div className="content" style={{ textAlign: 'justify' }}>
              <figure className="image" >
                <img src={preview} style={{height: '400px', width:'500px'}} alt="Article" />
              </figure>
              <p className="has-text-primary is-3 mb-2" style={{fontSize: '16px'}}><span style={{backgroundColor: 'antiquewhite', marginTop: '2px', marginBottom: '2px'}}>{title}</span> {createdAt}</p>
              <h2 className="title is-3 mt-0">{judul}</h2>
              {deskripsi.split('\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
              <p><strong>Penulis: </strong>{dosen}</p>
            </div>
          </div>
        </article>
      </div>
    </div>
  )
}

export default ViewNews