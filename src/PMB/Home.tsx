
import { useState, useEffect, useContext, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { PendaftarContext } from './PendaftarContext'

const informasi = [
  'Pendaftaran Mahasiswa Baru',
  'Program Studi',
  'Informasi Kampus',
  'Kegiatan Mahasiswa'
]

function Home() {
  const [pencarian, setPencarian] = useState('')

  const context = useContext(PendaftarContext)

  if (!context) {
    throw new Error('PendaftarContext belum tersedia')
  }

  const { totalPendaftar } = context

  useEffect(() => {
    document.title = 'Home - Universitas Jayanusa'
  }, [])

  const hasilPencarian = useMemo(() => {
    return informasi.filter((item) =>
      item.toLowerCase().includes(pencarian.toLowerCase())
    )
  }, [pencarian])

  return (
    <section className="mx-auto max-w-6xl px-6 py-12">

      <div className="rounded-xl bg-blue-700 px-8 py-16 text-white">
        <h1 className="mb-4 text-3xl font-bold md:text-4xl">
          Selamat Datang di Universitas Jayanusa
        </h1>

        <p className="mb-6 max-w-2xl text-lg text-blue-100">
          Wujudkan masa depanmu bersama Universitas Jayanusa.
          Kembangkan pengetahuan dan keterampilan di bidang teknologi.
        </p>

        <Link
          to="/pmb"
          className="inline-block rounded-lg bg-white px-6 py-3 font-semibold text-blue-700 hover:bg-blue-100"
        >
          Daftar Mahasiswa Baru
        </Link>
      </div>

      <div className="my-8 grid gap-5 md:grid-cols-2">

        <div className="rounded-lg border border-gray-200 p-6">
          <h2 className="mb-2 text-lg font-semibold">
            Informasi Pendaftar
          </h2>

          <p className="text-3xl font-bold text-blue-700">
            {totalPendaftar}
          </p>

          <p className="text-gray-500">
            Total pendaftar pada sesi aplikasi ini
          </p>
        </div>

        <div className="rounded-lg border border-gray-200 p-6">
          <h2 className="mb-2 text-lg font-semibold">
            Pendaftaran Mahasiswa
          </h2>

          <p className="mb-3 text-gray-600">
            Silakan isi formulir untuk mendaftar sebagai mahasiswa baru.
          </p>

          <Link
            to="/pmb"
            className="font-medium text-blue-700 hover:underline"
          >
            Buka Formulir PMB →
          </Link>
        </div>

      </div>

      <div className="rounded-lg border border-gray-200 p-6">
        <h2 className="mb-4 text-xl font-bold">
          Cari Informasi Kampus
        </h2>

        <input
          type="text"
          value={pencarian}
          onChange={(event) => setPencarian(event.target.value)}
          placeholder="Cari informasi..."
          className="mb-4 w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
        />

        <ul className="list-inside list-disc space-y-2 text-gray-700">
          {hasilPencarian.length > 0 ? (
            hasilPencarian.map((item) => (
              <li key={item}>{item}</li>
            ))
          ) : (
            <li>Informasi tidak ditemukan.</li>
          )}
        </ul>
      </div>

    </section>
  )
}

export default Home
