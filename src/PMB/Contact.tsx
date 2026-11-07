
import { useEffect } from 'react'

function Contact() {

  useEffect(() => {
    document.title = 'Contact - Universitas Jayanusa'
  }, [])

  return (
    <section className="mx-auto max-w-6xl px-6 py-12">

      <h1 className="mb-3 text-3xl font-bold text-gray-800">
        Hubungi Kami
      </h1>

      <p className="mb-8 text-gray-600">
        Silakan hubungi kami untuk mendapatkan informasi
        mengenai pendaftaran mahasiswa baru.
      </p>

      <div className="grid gap-5 md:grid-cols-2">

        <div className="rounded-xl border border-gray-200 p-6">
          <h2 className="mb-2 text-lg font-bold text-blue-700">
            Alamat
          </h2>

          <p className="text-gray-600">
            Alamat resmi Universitas Jayanusa
          </p>
        </div>

        <div className="rounded-xl border border-gray-200 p-6">
          <h2 className="mb-2 text-lg font-bold text-blue-700">
            Email
          </h2>

          <p className="text-gray-600">
            Email resmi kampus
          </p>
        </div>

        <div className="rounded-xl border border-gray-200 p-6">
          <h2 className="mb-2 text-lg font-bold text-blue-700">
            Telepon
          </h2>

          <p className="text-gray-600">
            Nomor telepon resmi kampus
          </p>
        </div>

        <div className="rounded-xl border border-gray-200 p-6">
          <h2 className="mb-2 text-lg font-bold text-blue-700">
            Informasi PMB
          </h2>

          <p className="text-gray-600">
            Informasi penerimaan mahasiswa baru Universitas Jayanusa.
          </p>
        </div>

      </div>

    </section>
  )
}

export default Contact
