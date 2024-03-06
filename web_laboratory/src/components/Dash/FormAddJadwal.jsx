import React, { useState } from 'react'
import axios from "axios";
import { useHistory } from "react-router-dom";
import moment from 'moment-timezone';

const FormAddJadwal = () => {
  const [lab, setLab] = useState("");
  const [sks, setSks] = useState("");
  const [dosen, setDosen] = useState("");
  const [mulai, setMulai] = useState("");
  const [berakhir, setBerakhir] = useState("");
  const [kelas, setKelas] = useState("");
  const [matkul, setMatkul] = useState("");
  const [hari, setHari] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useHistory();

  const saveJadwal = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/jadwal", {
        lab: lab,
        matkul: matkul,
        dosen: dosen,
        kelas: kelas,
        sks: sks,
        mulai: mulai,
        berakhir: berakhir,
        hari: hari,
      });
      navigate.push("/jadwal");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  function convertToWIB(dateTimeString) {
    const newDate = moment(dateTimeString).tz('Asia/Jakarta');
    return newDate.format('YYYY-MM-DDTHH:mm');
  }

  return (
    <div>
      <h1 className="title">Jadwal</h1>
      <h2 className="subtitle">Tambahkan Jadwal Baru</h2>
      <div className="card is-shadowless">
        <div className="card-content">
          <div className="content">
            <form onSubmit={saveJadwal}>
              <p className="has-text-centered">{msg}</p>
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
                <label className="label">Mata Kuliah</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={matkul}
                    onChange={(e) => setMatkul(e.target.value)}
                    placeholder="Matakuliah"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Jumlah SKS</label>
                <div className="control">
                  <div className="select is-fullwidth">
                    <select
                      value={sks}
                      onChange={(e) => setSks(e.target.value)}
                    >
                      <option value="">Isi Jumlah Sks</option>
                      <option value="0 sks">0</option>
                      <option value="1 sks">1</option>
                      <option value="2 sks">2</option>
                      <option value="3 sks">3</option>
                      <option value="4 sks">4</option>  
                    </select>
                  </div>
                </div>
              </div>
              <div className="field">
                <label className="label">Hari</label>
                <div className="control">
                  <div className="select is-fullwidth">
                    <select
                      value={hari}
                      onChange={(e) => setHari(e.target.value)}
                    >
                      <option value="">Isi Hari</option>
                      <option value="senin">Senin</option>
                      <option value="selasa">Selasa</option>
                      <option value="rabu">Rabu</option>
                      <option value="kamis">Kamis</option>
                      <option value="jum'at">Jum'at</option>
                      <option value="sabtu">Sabtu</option>  
                    </select>
                  </div>
                </div>
              </div>
              <div className="field">
                <label className="label">Jam Mulai Pembelajaran</label>
                <div className="control">
                    <input type="datetime-local" 
                    min="2024-03-01T06:00"
                    max="2024-03-01T18:00"
                    value={mulai}
                    onChange={(e) => setMulai(convertToWIB(e.target.value))}
                    />
                </div>
              </div>
              <div className="field">
                <label className="label">Jam Berakhir Pembelajaran</label>
                <div className="control">
                    <input type="datetime-local" 
                    min="2024-03-01T06:00"
                    max="2024-03-01T18:00"
                    value={berakhir}
                    onChange={(e) => setBerakhir(convertToWIB(e.target.value))}
                    />
                </div>
              </div>
              <div className="field">
                <label className="label">Kelas</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={kelas}
                    onChange={(e) => setKelas(e.target.value)}
                    placeholder="Kelas"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Dosen Pengajar</label>
                <div className="control">
                  <div className="select is-fullwidth">
                    <select
                      value={dosen}
                      onChange={(e) => setDosen(e.target.value)}
                    >
                      <option value="">Isi Nama Dosen</option>
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
                <div className="control">
                  <button type="submit" className="button is-success">
                    Simpan
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

export default FormAddJadwal