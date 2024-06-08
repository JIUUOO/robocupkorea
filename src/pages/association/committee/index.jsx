import { committeeData } from "./committeeData";

export default function Committee() {
  const tableRow = (no, name, affiliation, email, position) => (
    <tr>
      <th scope="row">{no}</th>
      <td>{name}</td>
      <td>{affiliation}</td>
      <td>{email}</td>
      <td>{position}</td>
    </tr>
  );

  return (
    <div className="about ">
      <div className="container mx-auto p-5">
        <h1 className="text-3xl pb-5">한국로보컵협회 운영위원을 소개합니다</h1>

        <table className="table-auto">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Affiliation</th>
              <th>E-Mail</th>
              <th>Position</th>
            </tr>
          </thead>
          <tbody>
            {committeeData.map((row) => {
              return tableRow(
                row.no,
                row.name,
                row.affiliation,
                row.email,
                row.position,
                row.no
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
