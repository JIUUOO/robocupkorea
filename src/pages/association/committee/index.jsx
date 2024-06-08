import { committeeData } from "./committeeData";

export default function Committee() {
  const tableRow = (no, name, affiliation, email, position) => (
    <tr className="border-b">
      <th scope="row">{no}</th>
      <td className="p-2">{name}</td>
      <td className="p-2">{affiliation}</td>
      <td className="p-2">{email}</td>
      <td className="p-2">{position}</td>
    </tr>
  );

  return (
    <div className="committee">
      <div className="container mx-auto p-5">
        <h1 className="text-3xl pb-5">한국로보컵협회 운영위원을 소개합니다</h1>

        <div className="committee__table-wrapper">
          <table className="committee__table-content">
            <thead>
              <tr className="border-b">
                <th scope="col" className="text-start">
                  #
                </th>
                <th scope="col" className="text-start">
                  Name
                </th>
                <th scope="col" className="text-start">
                  Affiliation
                </th>
                <th scope="col" className="text-start">
                  E-Mail
                </th>
                <th scope="col" className="text-start">
                  Position
                </th>
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
    </div>
  );
}
