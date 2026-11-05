export default function UserTable() {
  return (
    <table border={1} cellPadding={10} cellSpacing={0}>
      <thead>
        <tr>
          <th scope="col">Nama</th>
          <th scope="col">Jenis Kelamin</th>
          <th scope="col">Umur</th>
        </tr>
      </thead>
      <tbody>
        <tr>
            <td>Andi</td>
            <td>Laki-laki</td>
            <td>20</td>
        </tr>
        <tr>
            <td>Siti</td>
            <td>Perempuan</td>
            <td>22</td>
        </tr>
        <tr>
            <td>Budi</td>
            <td>Laki-laki</td>
            <td>19</td>
        </tr>
        <tr></tr>
        </tbody>
    </table>
  )
}