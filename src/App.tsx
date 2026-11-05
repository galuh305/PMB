
import { useState } from 'react'
import './App.css'
import './index.css'

// Data pilihan program studi
const programStudi = [
  'Sistem Komputer',
  'Sistem Informasi',
  'Manajemen Informatika'
]

// Komponen utama
function App() {
  return (
    <main>
      <h1>PMB STMIK Jayanusa</h1>
      <p>Penerimaan Mahasiswa Baru</p>

      <InsertData
        labelTombolSimpan="Daftar Sekarang"
        defaultDeskripsi=""
        daftarProdi={programStudi}
      />
    </main>
  )
}

// Komponen formulir menggunakan Props
function InsertData({
  labelTombolSimpan,
  defaultDeskripsi,
  daftarProdi
}: {
  labelTombolSimpan: string;
  defaultDeskripsi: string;
  daftarProdi: string[];
}) {

  // State untuk conditional
  const [berhasil, setBerhasil] = useState(false)

  // Event submit form
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const form = event.currentTarget
    const formData = new FormData(form)

    const dataMahasiswa = {
      nama: formData.get('nama'),
      nik: formData.get('nik'),
      tempatLahir: formData.get('tempatLahir'),
      tanggalLahir: formData.get('tanggalLahir'),
      jenisKelamin: formData.get('jenisKelamin'),
      alamat: formData.get('alamat'),
      programStudi: formData.get('programStudi'),
      email: formData.get('email'),
      nomorHP: formData.get('nomorHP')
    }

    console.log('DATA PENDAFTAR MAHASISWA')
    console.log(dataMahasiswa)

    setBerhasil(true)

    form.reset()
  }

  return (
    <>
      <h2>Formulir Pendaftaran</h2>

      <form onSubmit={handleSubmit}>

        <label>Nama Lengkap</label>
        <br />
        <input
          type="text"
          name="nama"
          placeholder="Masukkan nama lengkap"
          required
        />
        <br /><br />

        <label>NIK</label>
        <br />
        <input
          type="integer"
          name="nik"
          placeholder="Masukkan NIK"
          required
        />
        <br /><br />

        <label>Tempat Lahir</label>
        <br />
        <input
          type="text"
          name="tempatLahir"
          placeholder="Masukkan tempat lahir"
          required
        />
        <br /><br />

        <label>Tanggal Lahir</label>
        <br />
        <input
          type="date"
          name="tanggalLahir"
          required
        />
        <br /><br />

        <label>Jenis Kelamin</label>
        <br />
        <select name="jenisKelamin" required>
          <option value="">Pilih jenis kelamin</option>
          <option value="Laki-laki">Laki-laki</option>
          <option value="Perempuan">Perempuan</option>
        </select>
        <br /><br />

        <label>Alamat</label>
        <br />
        <textarea
          name="alamat"
          defaultValue={defaultDeskripsi}
          placeholder="Masukkan alamat lengkap"
          required
        />
        <br /><br />

        <label>Program Studi</label>
        <br />
        <select name="programStudi" required>
          <option value="">Pilih program studi</option>

          {daftarProdi.map((prodi, index) => (
            <option key={index} value={prodi}>
              {prodi}
            </option>
          ))}

        </select>
        <br /><br />

        <label>Email</label>
        <br />
        <input
          type="email"
          name="email"
          placeholder="Masukkan email"
          required
        />
        <br /><br />

        <label>Nomor HP</label>
        <br />
        <input
          type="tel"
          name="nomorHP"
          placeholder="Masukkan nomor HP"
          required
        />
        <br /><br />

        <button type="submit">
          {labelTombolSimpan}
        </button>

      </form>

      {/* Conditional Rendering */}
      {berhasil && (
        <p>Pendaftaran berhasil dikirim! Cek Console.</p>
      )}

    </>
  )
}

export default App
