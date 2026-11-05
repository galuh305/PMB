
import { useState, useEffect, useContext, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { PendaftarContext } from './PendaftarContext'

function Home() {
  // useState: menyimpan kata pencarian
  const [pencarian, setPencarian] = useState('')

  // useContext: mengambil data jumlah pendaftar
  const context = useContext(PendaftarContext)

  if (!context) {
    throw new Error('PendaftarContext belum tersedia')
  }

  const { totalPendaftar } = context

  // useEffect: mengubah judul browser
  useEffect(() => {
    document.title = 'Home - Universitas Jayanusa'
  }, [])

  // Data informasi kampus
  const informasi = [
    'Pendaftaran Mahasiswa Baru',
    'Program Studi',
    'Informasi Kampus',
    'Kegiatan Mahasiswa'
  ]

  // useMemo: memfilter informasi berdasarkan pencarian
  const hasilPencarian = useMemo(() => {
    return informasi.filter((item) =>
      item.toLowerCase().includes(pencarian.toLowerCase())
    )
  }, [pencarian])

  return (
    <section>
      <h1>Selamat Datang di Universitas Jayanusa</h1>

      <p>
        Wujudkan masa depanmu bersama Universitas Jayanusa.
      </p>

      <h3>Informasi Pendaftaran</h3>

      <p>
        Total pendaftar: {totalPendaftar} mahasiswa
      </p>

      <Link to="/pmb">
        Daftar Mahasiswa Baru
      </Link>

      <hr />

      <h3>Cari Informasi</h3>

      <input
        type="text"
        placeholder="Cari informasi..."
        value={pencarian}
        onChange={(event) => setPencarian(event.target.value)}
      />

      <ul>
        {hasilPencarian.length > 0 ? (
          hasilPencarian.map((item, index) => (
            <li key={index}>{item}</li>
          ))
        ) : (
          <p>Informasi tidak ditemukan.</p>
        )}
      </ul>
    </section>
  )
}

export default Home
