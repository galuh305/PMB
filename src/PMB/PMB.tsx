import {
  useState,
  useEffect,
  useContext,
  useRef,
  useReducer,
  useCallback,
  useMemo,
} from "react";

import { PendaftarContext } from "./PendaftarContext";

// Data program studi
const programStudi = [
  "Sistem Komputer",
  "Sistem Informasi",
  "Manajemen Informatika",
];

// Tipe data reducer
type FormState = {
  berhasil: boolean;
  nama: string;
};

type FormAction = {
  type: "SUCCESS";
  nama: string;
};

// Reducer untuk mengatur status form
function formReducer(state: FormState, action: FormAction): FormState {
  switch (action.type) {
    case "SUCCESS":
      return {
        berhasil: true,
        nama: action.nama,
      };

    default:
      return state;
  }
}

function PMB() {
  // useState: menyimpan kata pencarian prodi
  const [pencarian, setPencarian] = useState("");

  // useContext: mengambil fungsi dan jumlah pendaftar
  const context = useContext(PendaftarContext);

  if (!context) {
    throw new Error("PendaftarContext belum tersedia");
  }

  const { tambahPendaftar } = context;

  // useRef: mengakses input nama secara langsung
  const namaRef = useRef<HTMLInputElement>(null);

  // useReducer: mengelola status pendaftaran
  const [state, dispatch] = useReducer(formReducer, {
    berhasil: false,
    nama: "",
  });

  // useEffect: mengatur judul halaman
  useEffect(() => {
    document.title = "PMB - STMIK Jayanusa";
  }, []);

  // useMemo: memfilter daftar program studi
  const hasilProdi = useMemo(() => {
    return programStudi.filter((prodi) =>
      prodi.toLowerCase().includes(pencarian.toLowerCase()),
    );
  }, [pencarian]);

  // useCallback: menyimpan fungsi submit
  const handleSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      const form = event.currentTarget;
      const formData = new FormData(form);

      const dataMahasiswa = {
        nama: formData.get("nama"),
        nik: formData.get("nik"),
        jenisKelamin: formData.get("jenisKelamin"),
        alamat: formData.get("alamat"),
        programStudi: formData.get("programStudi"),
        email: formData.get("email"),
        nomorHP: formData.get("nomorHP"),
      };

      console.log("DATA PENDAFTAR MAHASISWA:");
      console.log(dataMahasiswa);

      // Menambah jumlah pendaftar di Context
      tambahPendaftar();

      // Mengubah status menggunakan reducer
      dispatch({
        type: "SUCCESS",
        nama: String(dataMahasiswa.nama),
      });

      // Mengosongkan form
      form.reset();
    },
    [tambahPendaftar],
  );

  return (
    <section>
      <h1>Pendaftaran Mahasiswa Baru</h1>

      <p>Silakan lengkapi formulir pendaftaran berikut.</p>

      <button type="button" onClick={() => namaRef.current?.focus()}>
        Fokus ke Nama
      </button>

      <form onSubmit={handleSubmit}>
        <label>Nama Lengkap</label>
        <br />

        <input
          ref={namaRef}
          type="text"
          name="nama"
          placeholder="Masukkan nama lengkap"
          required
        />

        <br />
        <br />

        <label>NIK</label>
        <br />

        <input
          type="text"
          name="nik"
          placeholder="Masukkan NIK"
          minLength={16}
          maxLength={16}
          pattern="[0-9]{16}"
          required
        />

        <br />
        <br />

        <label>Jenis Kelamin</label>
        <br />

        <select name="jenisKelamin" required>
          <option value="">Pilih jenis kelamin</option>
          <option value="Laki-laki">Laki-laki</option>
          <option value="Perempuan">Perempuan</option>
        </select>

        <br />
        <br />

        <label>Alamat</label>
        <br />

        <textarea
          name="alamat"
          placeholder="Masukkan alamat lengkap"
          required
        />

        <br />
        <br />

        <label>Cari Program Studi</label>
        <br />

        <input
          type="text"
          value={pencarian}
          onChange={(event) => setPencarian(event.target.value)}
          placeholder="Cari program studi..."
        />

        <br />
        <br />

        <label>Program Studi</label>
        <br />

        <select name="programStudi" required>
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

        <br />
        <br />

        <label>Email</label>
        <br />

        <input
          type="email"
          name="email"
          placeholder="Masukkan email"
          required
        />

        <br />
        <br />

        <label>Nomor HP</label>
        <br />

        <input
          type="tel"
          name="nomorHP"
          placeholder="Masukkan nomor HP"
          required
        />

        <br />
        <br />

        <button type="submit">Daftar Sekarang</button>
      </form>

      {/* Conditional Rendering */}
      {state.berhasil && (
        <div>
          <h3>Pendaftaran Berhasil!</h3>
          <p>Terima kasih, {state.nama}.</p>
        </div>
      )}
    </section>
  );
}

export default PMB;
