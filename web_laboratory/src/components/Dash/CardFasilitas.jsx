import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import moment from 'moment-timezone';

const CardFasilitas = () => {
    const dispatch = useDispatch();
  const [fasilitas, setFasilitas] = useState([]);
  const [msg, setMsg] = useState("");
  const { user } = useSelector((state) => state.auth);
  const { lab } = useParams();

  useEffect(() => {
    const getFasilitasByLab = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/perfas/fasilitas/${lab}`);
        setFasilitas(response.data);
      } catch (error) {
        if (error.response) {
          setMsg(error.response.data.msg);
        }
      }
    };
    getFasilitasByLab();
  }, [lab]);

  // Fungsi untuk mengonversi waktu ke zona waktu Indonesia Barat (WIB)
  function convertToWIB(dateTimeString) {
    const newDate = moment(dateTimeString).tz('Asia/Jakarta');
    return newDate.format('YYYY-MM-DDTHH:mm');
  }

  return (
    <div className="container is-centered mt-5">
      <div className="columns is-multiline mt-2">
        {fasilitas.map((fas) => (
          <div className="column is-one-quarter" key={fas.id}>
            <div className="card">
              <div className="card-image">
                <figure className="image is-4by3">
                  <img src={fas.url} alt="Image" />
                </figure>
              </div>
              <div className="card-content">
                <div className="media">
                  <div className="media-content">
                    <p className="title is-5 mb-2">{fas.name}</p>
                    <p className="has-text-black mb-1" style={{fontSize: '14px'}}>Jumlah: {fas.jumlah}</p>
                    <p className="has-text-black mb-2" style={{fontSize: '14px'}}>Lokasi: Lab. {fas.lab}</p>
                  </div>
                </div>
              </div>
              {/* {user && user.role === "admin" && (
              <footer className="card-footer">
                <Link to={`edit/fasilitas/${product.id}`} className="card-footer-item">
                  Edit
                </Link>
                <a
                  onClick={() => deleteProduct(product.id)}
                  className="card-footer-item"
                >
                  Delete
                </a>
              </footer>
              )} */}
            </div>
          </div>
        ))}
      </div>
      </div>
  );
};

export default CardFasilitas;