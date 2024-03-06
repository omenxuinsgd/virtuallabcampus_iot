import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import moment from 'moment-timezone';

const JadwalList = () => {
  const [jadwal, setJadwal] = useState([]);

  useEffect(() => {
    getJadwal();
  }, []);

  const getJadwal = async () => {
    const response = await axios.get("http://localhost:5000/jadwal");
    setJadwal(response.data);
  };

  const deleteJadwal = async (jadwalId) => {
    await axios.delete(`http://localhost:5000/jadwal/${jadwalId}`);
    getJadwal();
  };

  // Fungsi untuk mengonversi waktu ke zona waktu Indonesia Barat (WIB)
  function convertToWIB(dateTimeString) {
    const newDate = moment(dateTimeString).tz('Asia/Jakarta');
    return newDate.format('HH:mm');
  }

  return (
    <div>
      <h1 className="title">Jadwal</h1>
      <h2 className="subtitle">Menambahkan Jadwal Kegiatan Laboratorium</h2>
      <Link to="/add/jadwal" className="button is-primary mb-2">
        Tambah Baru
      </Link>
      <h5 className='mt-5 mb-2' style={{fontSize: '20px'}}>Lab. Instrumentasi</h5>
      <table className="table is-striped is-fullwidth">
        <thead>
          <tr>
            <th>No</th>
            <th>Matakuliah (Kelas)</th>
            <th>Hari (Jam)</th>
            <th>Lokasi (Dosen)</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
        {jadwal.filter(jdwl => jdwl.lab === 'instrument').map((jdwl, index) => (
            <tr key={jdwl.uuid}>
              <td>{index + 1}</td>
              <td>{jdwl.matkul} ({jdwl.kelas})</td>
              <td>{jdwl.hari} ({convertToWIB(jdwl.mulai)}-{convertToWIB(jdwl.berakhir)})</td>
              <td>{jdwl.lab} ({jdwl.dosen})</td>
              <td>
                <Link
                  to={`/edit/jadwal/${jdwl.uuid}`}
                  className="button is-small is-info"
                >
                  Edit
                </Link>
                <button
                  onClick={() => deleteJadwal(jdwl.uuid)}
                  className="button is-small is-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h5 className='mt-5 mb-2' style={{fontSize: '20px'}}>Lab. Modeling</h5>
      <table className="table is-striped is-fullwidth">
        <thead>
          <tr>
            <th>No</th>
            <th>Matakuliah (Kelas)</th>
            <th>Hari (Jam)</th>
            <th>Lokasi (Dosen)</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
        {jadwal.filter(jdwl => jdwl.lab === 'modeling').map((jdwl, index) => (
            <tr key={jdwl.uuid}>
              <td>{index + 1}</td>
              <td>{jdwl.matkul} ({jdwl.kelas})</td>
              <td>{jdwl.hari} ({convertToWIB(jdwl.mulai)}-{convertToWIB(jdwl.berakhir)})</td>
              <td>{jdwl.lab} ({jdwl.dosen})</td>
              <td>
                <Link
                  to={`/edit/jadwal/${jdwl.uuid}`}
                  className="button is-small is-info"
                >
                  Edit
                </Link>
                <button
                  onClick={() => deleteJadwal(jdwl.uuid)}
                  className="button is-small is-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h5 className='mt-5 mb-2' style={{fontSize: '20px'}}>Lab. Astrofisika</h5>
      <table className="table is-striped is-fullwidth">
        <thead>
          <tr>
            <th>No</th>
            <th>Matakuliah (Kelas)</th>
            <th>Hari (Jam)</th>
            <th>Lokasi (Dosen)</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
        {jadwal.filter(jdwl => jdwl.lab === 'astrofisika').map((jdwl, index) => (
            <tr key={jdwl.uuid}>
              <td>{index + 1}</td>
              <td>{jdwl.matkul} ({jdwl.kelas})</td>
              <td>{jdwl.hari} ({convertToWIB(jdwl.mulai)}-{convertToWIB(jdwl.berakhir)})</td>
              <td>{jdwl.lab} ({jdwl.dosen})</td>
              <td>
                <Link
                  to={`/edit/jadwal/${jdwl.uuid}`}
                  className="button is-small is-info"
                >
                  Edit
                </Link>
                <button
                  onClick={() => deleteJadwal(jdwl.uuid)}
                  className="button is-small is-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h5 className='mt-5 mb-2' style={{fontSize: '20px'}}>Lab. Fisika Bumi</h5>
      <table className="table is-striped is-fullwidth">
        <thead>
          <tr>
            <th>No</th>
            <th>Matakuliah (Kelas)</th>
            <th>Hari (Jam)</th>
            <th>Lokasi (Dosen)</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
        {jadwal.filter(jdwl => jdwl.lab === 'geofisika').map((jdwl, index) => (
            <tr key={jdwl.uuid}>
              <td>{index + 1}</td>
              <td>{jdwl.matkul} ({jdwl.kelas})</td>
              <td>{jdwl.hari} ({convertToWIB(jdwl.mulai)}-{convertToWIB(jdwl.berakhir)})</td>
              <td>{jdwl.lab} ({jdwl.dosen})</td>
              <td>
                <Link
                  to={`/edit/jadwal/${jdwl.uuid}`}
                  className="button is-small is-info"
                >
                  Edit
                </Link>
                <button
                  onClick={() => deleteJadwal(jdwl.uuid)}
                  className="button is-small is-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h5 className='mt-5 mb-2' style={{fontSize: '20px'}}>Lab. Nuklir Medis</h5>
      <table className="table is-striped is-fullwidth">
        <thead>
          <tr>
            <th>No</th>
            <th>Matakuliah (Kelas)</th>
            <th>Hari (Jam)</th>
            <th>Lokasi (Dosen)</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
        {jadwal.filter(jdwl => jdwl.lab === 'nuklir').map((jdwl, index) => (
            <tr key={jdwl.uuid}>
              <td>{index + 1}</td>
              <td>{jdwl.matkul} ({jdwl.kelas})</td>
              <td>{jdwl.hari} ({convertToWIB(jdwl.mulai)}-{convertToWIB(jdwl.berakhir)})</td>
              <td>{jdwl.lab} ({jdwl.dosen})</td>
              <td>
                <Link
                  to={`/edit/jadwal/${jdwl.uuid}`}
                  className="button is-small is-info"
                >
                  Edit
                </Link>
                <button
                  onClick={() => deleteJadwal(jdwl.uuid)}
                  className="button is-small is-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h5 className='mt-5 mb-2' style={{fontSize: '20px'}}>Lab. Fisika Material</h5>
      <table className="table is-striped is-fullwidth">
        <thead>
          <tr>
            <th>No</th>
            <th>Matakuliah (Kelas)</th>
            <th>Hari (Jam)</th>
            <th>Lokasi (Dosen)</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
        {jadwal.filter(jdwl => jdwl.lab === 'fismat').map((jdwl, index) => (
            <tr key={jdwl.uuid}>
              <td>{index + 1}</td>
              <td>{jdwl.matkul} ({jdwl.kelas})</td>
              <td>{jdwl.hari} ({convertToWIB(jdwl.mulai)}-{convertToWIB(jdwl.berakhir)})</td>
              <td>{jdwl.lab} ({jdwl.dosen})</td>
              <td>
                <Link
                  to={`/edit/jadwal/${jdwl.uuid}`}
                  className="button is-small is-info"
                >
                  Edit
                </Link>
                <button
                  onClick={() => deleteJadwal(jdwl.uuid)}
                  className="button is-small is-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h5 className='mt-5 mb-2' style={{fontSize: '20px'}}>Lab. Karakterisasi Fisika Material</h5>
      <table className="table is-striped is-fullwidth">
        <thead>
          <tr>
            <th>No</th>
            <th>Matakuliah (Kelas)</th>
            <th>Hari (Jam)</th>
            <th>Lokasi (Dosen)</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
        {jadwal.filter(jdwl => jdwl.lab === 'karmat').map((jdwl, index) => (
            <tr key={jdwl.uuid}>
              <td>{index + 1}</td>
              <td>{jdwl.matkul} ({jdwl.kelas})</td>
              <td>{jdwl.hari} ({convertToWIB(jdwl.mulai)}-{convertToWIB(jdwl.berakhir)})</td>
              <td>{jdwl.lab} ({jdwl.dosen})</td>
              <td>
                <Link
                  to={`/edit/jadwal/${jdwl.uuid}`}
                  className="button is-small is-info"
                >
                  Edit
                </Link>
                <button
                  onClick={() => deleteJadwal(jdwl.uuid)}
                  className="button is-small is-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h5 className='mt-5 mb-2' style={{fontSize: '20px'}}>Lab. Workshop</h5>
      <table className="table is-striped is-fullwidth">
        <thead>
          <tr>
            <th>No</th>
            <th>Matakuliah (Kelas)</th>
            <th>Hari (Jam)</th>
            <th>Lokasi (Dosen)</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
        {jadwal.filter(jdwl => jdwl.lab === 'workshop').map((jdwl, index) => (
            <tr key={jdwl.uuid}>
              <td>{index + 1}</td>
              <td>{jdwl.matkul} ({jdwl.kelas})</td>
              <td>{jdwl.hari} ({convertToWIB(jdwl.mulai)}-{convertToWIB(jdwl.berakhir)})</td>
              <td>{jdwl.lab} ({jdwl.dosen})</td>
              <td>
                <Link
                  to={`/edit/jadwal/${jdwl.uuid}`}
                  className="button is-small is-info"
                >
                  Edit
                </Link>
                <button
                  onClick={() => deleteJadwal(jdwl.uuid)}
                  className="button is-small is-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h5 className='mt-5 mb-2' style={{fontSize: '20px'}}>Lab. Fisika Dasar</h5>
      <table className="table is-striped is-fullwidth">
        <thead>
          <tr>
            <th>No</th>
            <th>Matakuliah (Kelas)</th>
            <th>Hari (Jam)</th>
            <th>Lokasi (Dosen)</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
        {jadwal.filter(jdwl => jdwl.lab === 'basic').map((jdwl, index) => (
            <tr key={jdwl.uuid}>
              <td>{index + 1}</td>
              <td>{jdwl.matkul} ({jdwl.kelas})</td>
              <td>{jdwl.hari} ({convertToWIB(jdwl.mulai)}-{convertToWIB(jdwl.berakhir)})</td>
              <td>{jdwl.lab} ({jdwl.dosen})</td>
              <td>
                <Link
                  to={`/edit/jadwal/${jdwl.uuid}`}
                  className="button is-small is-info"
                >
                  Edit
                </Link>
                <button
                  onClick={() => deleteJadwal(jdwl.uuid)}
                  className="button is-small is-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h5 className='mt-5 mb-2' style={{fontSize: '20px'}}>Lab. Fisika Lanjutan</h5>
      <table className="table is-striped is-fullwidth">
        <thead>
          <tr>
            <th>No</th>
            <th>Matakuliah (Kelas)</th>
            <th>Hari (Jam)</th>
            <th>Lokasi (Dosen)</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
        {jadwal.filter(jdwl => jdwl.lab === 'advance').map((jdwl, index) => (
            <tr key={jdwl.uuid}>
              <td>{index + 1}</td>
              <td>{jdwl.matkul} ({jdwl.kelas})</td>
              <td>{jdwl.hari} ({convertToWIB(jdwl.mulai)}-{convertToWIB(jdwl.berakhir)})</td>
              <td>{jdwl.lab} ({jdwl.dosen})</td>
              <td>
                <Link
                  to={`/edit/jadwal/${jdwl.uuid}`}
                  className="button is-small is-info"
                >
                  Edit
                </Link>
                <button
                  onClick={() => deleteJadwal(jdwl.uuid)}
                  className="button is-small is-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
    </div>
  );
}

export default JadwalList