
import {
  useState,
  useEffect,
  useContext,
  useRef,
  useReducer,
  useCallback,
  useMemo
} from 'react'

import { PendaftarContext } from './PendaftarContext'

const programStudi = [
  'Sistem Komputer',
  'Sistem Informasi',
  'Manajemen Informatika'
]

type FormState = {
  berhasil: boolean;
  nama: string;
}

type FormAction = {
  type: 'SUCCESS';
  nama: string;
}

function formReducer(
  state: FormState,
  action: FormAction
): FormState {
  switch (action.type) {
    case 'SUCCESS':
      return {
        berhasil: true,
        nama: action.nama
      }

    default:
      return state
  }
}

function PMB() {
  const [pencarian, setPencarian] = useState('')

  const context = useContext(PendaftarContext)

  if (!context) {
    throw new Error('PendaftarContext belum tersedia')
  }

  const { tambahPendaftar } = context

  const namaRef = useRef<HTMLInputElement>(null)

  const [state, dispatch] = useReducer(formReducer, {
    berhasil: false,
    nama: ''
  })

  useEffect(() => {
    document.title = 'PMB - Universitas Jayanusa'
  }, [])

  const hasilProdi = useMemo(() => {
    return programStudi.filter((prodi) =>
      prodi.toLowerCase().includes(pencarian.toLowerCase())
    )
  }, [pencarian])

  const handleSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault()

      const form = event.currentTarget
      const formData = new FormData(form)

      const dataMahasiswa = {
        nama: formData.get('nama'),
        nik: formData.get('nik'),
        jenisKelamin: formData.get('jenisKelamin'),
        alamat: formData.get('alamat'),
        programStudi: formData.get('programStudi'),
        email: formData.get('email'),
        nomorHP: formData.get('nomorHP')
      }

      console.log('DATA PENDAFTAR MAHASISWA:')
      console.log(dataMahasiswa)

      tambahPendaftar()

      dispatch({
        type: 'SUCCESS',
        nama: String(dataMahasiswa.nama)
      })

      form.reset()
      setPencarian('')
    },
    [tambahPendaftar]
  )

  return (
    <section className="mx-auto max-w-3xl px-6 py-12">

      <div className="mb-8">
        <h1 className="mb-2 text-3xl font-bold text-gray-800">
          Pendaftaran Mahasiswa Baru
        </h1>

        <p className="text-gray-600">
          Silakan lengkapi formulir pendaftaran berikut.
        </p>
      </div>

      <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">

        <div className="mb-6">
          <button
            type="button"
            onClick={() => namaRef.current?.focus()}
            className="rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200"
          >
            Fokus ke Nama
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">

          <div>
            <label className="mb-2 block font-medium">
              Nama Lengkap
            </label>

            <input
              ref={namaRef}
              type="text"
              name="nama"
              placeholder="Masukkan nama lengkap"
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          <div>
            <label className="mb-2 block font-medium">
              NIK
            </label>

            <input
              type="text"
              name="nik"
              placeholder="Masukkan NIK"
              minLength={16}
              maxLength={16}
              pattern="[0-9]{16}"
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          <div>
            <label className="mb-2 block font-medium">
              Jenis Kelamin
            </label>

            <select
              name="jenisKelamin"
              required
              className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none focus:border-blue-600"
            >
              <option value="">Pilih jenis kelamin</option>
              <option value="Laki-laki">Laki-laki</option>
              <option value="Perempuan">Perempuan</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block font-medium">
              Alamat
            </label>

            <textarea
              name="alamat"
              placeholder="Masukkan alamat lengkap"
              required
              className="min-h-28 w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-600"
            />
          </div>

          <div>
            <label className="mb-2 block font-medium">
              Cari Program Studi
            </label>

            <input
              type="text"
              value={pencarian}
              onChange={(event) => setPencarian(event.target.value)}
              placeholder="Cari program studi..."
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-600"
            />
          </div>

          <div>
            <label className="mb-2 block font-medium">
              Program Studi
            </label>

            <select
              name="programStudi"
              required
              className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none focus:border-blue-600"
            >
              <option value="">Pilih program studi</option>

              {hasilProdi.length > 0 ? (
                hasilProdi.map((prodi) => (
                  <option key={prodi} value={prodi}>
                    {prodi}
                  </option>
                ))
              ) : (
                <option value="" disabled>
                  Program studi tidak ditemukan
                </option>
              )}
            </select>
          </div>

          <div>
            <label className="mb-2 block font-medium">
              Email
            </label>

            <input
              type="email"
              name="email"
              placeholder="Masukkan email"
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-600"
            />
          </div>

          <div>
            <label className="mb-2 block font-medium">
              Nomor HP
            </label>

            <input
              type="tel"
              name="nomorHP"
              placeholder="Masukkan nomor HP"
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-600"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-blue-700 px-6 py-3 font-semibold text-white hover:bg-blue-800"
          >
            Daftar Sekarang
          </button>

        </form>

        {state.berhasil && (
          <div className="mt-6 rounded-lg bg-green-50 p-4 text-green-800">
            <h3 className="font-bold">
              Pendaftaran Berhasil!
            </h3>

            <p>
              Terima kasih, {state.nama}.
            </p>
          </div>
        )}

      </div>
    </section>
  )
}

export default PMB
