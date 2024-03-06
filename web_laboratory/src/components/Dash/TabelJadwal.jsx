import React, { useState, useEffect } from "react";
import moment from 'moment-timezone';
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

import TimeTable from "react-timetable-events";

const TabelJadwal = () => {
  const [jadwalLab, setJadwalLab] = useState([]);
  const [msg, setMsg] = useState("");
  const { lab } = useParams();
  // const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    const getJadwalByLab = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/jadwal/perlab/${lab}`);
        setJadwalLab(response.data);
      } catch (error) {
        if (error.response) {
          setMsg(error.response.data.msg);
        }
      }
    };
    getJadwalByLab();
  }, [lab]);

  // useEffect(() => {
  //   getJadwalByLab(lab);
  // }, [lab]);

  // const getJadwalByLab = async (lab) => {
  //   try {
  //     const response = await axios.get(`http://localhost:5000/jadwal/${lab}`);
  //     setJadwalLab(response.data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // Fungsi untuk mengonversi waktu ke zona waktu Indonesia Barat (WIB)
  function convertToWIB(dateTimeString) {
    const newDate = moment(dateTimeString).tz('Asia/Jakarta');
    return newDate.format('YYYY-MM-DDTHH:mm');
  }

    // Ubah struktur events berdasarkan data dari products
    const events = {};
    jadwalLab.forEach(jadwal => {
      const { kelas, sks, hari } = jadwal;
      if (!events[hari]) {
        events[hari] = [];
      }
      events[hari].push({
        id: jadwal.id,
        name: [jadwal.matkul, ": ", sks, " (", kelas, ")"],
        type: "custom",
        startTime: new Date(convertToWIB(jadwal.mulai)),
        endTime: new Date(convertToWIB(jadwal.berakhir)),
      });
    });
  
  return(
    <div style={{ overflowX: 'auto' }}>
      <p className="mt-4 mb-2 is-size-6-mobile has-text-weight-bold">Lab. {lab}</p>
      
      <TimeTable
        events={events}
        hoursInterval={{ from: 6, to: 18 }}
        style={{ height: '500px', fontSize: '16px' }}
        
  />
    </div>
    
)};

export default TabelJadwal;