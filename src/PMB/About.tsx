
import { useEffect } from 'react'

function About() {

  useEffect(() => {
    document.title = 'About - Universitas Jayanusa'
  }, [])

  return (
    <section className="mx-auto max-w-6xl px-6 py-12">

      <div className="mb-8">
        <h1 className="mb-3 text-3xl font-bold text-gray-800">
          Tentang Universitas Jayanusa
        </h1>

        <p className="max-w-3xl leading-relaxed text-gray-600">
          Universitas Jayanusa merupakan institusi pendidikan tinggi
          yang berfokus pada pengembangan ilmu pengetahuan,
          teknologi informasi, dan komputer.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">

        <div className="rounded-xl border border-gray-200 p-6">
          <h2 className="mb-3 text-xl font-bold text-blue-700">
            Visi
          </h2>

          <p className="leading-relaxed text-gray-600">
            Menjadi institusi pendidikan yang mendukung
            pengembangan ilmu pengetahuan dan teknologi.
          </p>
        </div>

        <div className="rounded-xl border border-gray-200 p-6">
          <h2 className="mb-3 text-xl font-bold text-blue-700">
            Misi
          </h2>

          <p className="leading-relaxed text-gray-600">
            Menyelenggarakan pendidikan yang berkualitas
            serta mendorong kreativitas dan kemampuan mahasiswa.
          </p>
        </div>

      </div>

      <div className="mt-8 rounded-xl bg-gray-50 p-6">
        <h2 className="mb-4 text-xl font-bold">
          Program Studi
        </h2>

        <ul className="list-inside list-disc space-y-2 text-gray-700">
          <li>Sistem Komputer</li>
          <li>Sistem Informasi</li>
          <li>Manajemen Informatika</li>
        </ul>
      </div>

    </section>
  )
}

export default About
