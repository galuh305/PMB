import { useEffect } from 'react'

function Contact() {
  useEffect(() => {
  document.title = 'Contact - STMIK Jayanusa'
}, [])
  return (
    <section>
      <h1>Contact</h1>

      <p>Hubungi kami untuk informasi pendaftaran.</p>

      <p>Nama: STMIK Jayanusa</p>
      <p>Email: Jayanusa.co.id</p>
      <p>Telepon: +628937492283</p>
      <p>Alamat: Jl.Damar</p>
    </section>
  )
}

export default Contact
