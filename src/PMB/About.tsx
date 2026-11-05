import { useEffect } from "react";

function About() {
  useEffect(() => {
    document.title = "About - STMIK Jayanusa";
  }, []);
  return (
    <section>
      <h1>Tentang Kami</h1>

      <p>
        STMIK Jayanusa merupakan perguruan tinggi yang berfokus pada bidang
        teknologi informasi dan komputer.
      </p>

      <h3>Visi</h3>
      <p>
        Menjadi institusi pendidikan yang mendukung pengembangan ilmu
        pengetahuan dan teknologi.
      </p>

      <h3>Program Pendidikan</h3>
      <ul>
        <li>Sistem Komputer</li>
        <li>Sistem Informasi</li>
        <li>Manajemen Informatika</li>
      </ul>
    </section>
  );
}

export default About;
