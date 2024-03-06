import React, { useState, useEffect } from "react";
import moment from 'moment-timezone';
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

import TimeTable from "react-timetable-events";

const CardLab = () => {
  const [labs, setLabs] = useState([]);
  const [msg, setMsg] = useState("");
  const { lab } = useParams();
  // const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    const getLabsByLab = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/labs/perlab/${lab}`);
        setLabs(response.data);
      } catch (error) {
        if (error.response) {
          setMsg(error.response.data.msg);
        }
      }
    };
    getLabsByLab();
  }, [lab]);

  // Fungsi untuk mengonversi waktu ke zona waktu Indonesia Barat (WIB)
  function convertToWIB(dateTimeString) {
    const newDate = moment(dateTimeString).tz('Asia/Jakarta');
    return newDate.format('YYYY-MM-DDTHH:mm');
  }
  
  return(
    <div className="container is-centered mt-5">
      <div className="columns is-multiline mt-2">
        {labs.map((labo) => (
          <div className="column is-one-quarter" key={labo.id}>
            <div className="card">
              <div className="card-image mb-0">
                <figure className="image is-4by3">
                  <img src={labo.url} alt="Image" />
                </figure>
              </div>
              <div className="card-content mt-0">
                <div className="media">
                  <div className="media-content">
                    <p className="title is-6 mb-3 mt-0" 
                                style={{color: 'Highlight',
                                        backgroundColor: 'blanchedalmond',
                                        fontSize: '14px',
                                        paddingTop: '2px',
                                        paddingBottom: '2px'}}>{labo.name}</p>
                    <p className="title is-6 mb-1">{labo.judul}</p>
                    <p className="has-text-primary mb-2" style={{fontSize: '12px'}}>{labo.createdAt}</p>
                    <p className="has-text-black mb-0" style={{fontSize: '12px', 
                        textOverflow: 'ellipsis',
                        width: '250px',
                        whiteSpace: 'nowrap',
                        overflow:'hidden'}}>{labo.deskripsi}</p>
                  </div>
                </div>
              </div>
              <footer className="card-footer mt-0">
                <Link to={`detail/labs/${labo.uuid}`} className="card-footer-item">
                    Detail Artikel
                </Link>
              </footer>
            </div>
          </div>
        ))}
      </div>
      </div>
)};

export default CardLab;