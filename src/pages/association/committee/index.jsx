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
      <div className="container pt-16">
        <div className="pb-5">
          <h1 className="text-3xl">한국로보컵협회 운영위원을 소개합니다</h1>
        </div>
        <div className="committee__table-wrapper">
          <table className="committee__table-content">
            <thead>
              <tr className="border-b">
                <th scope="col" className="text-start px-2">
                  #
                </th>
                <th scope="col" className="text-start px-2">
                  Name
                </th>
                <th scope="col" className="text-start px-2">
                  Affiliation
                </th>
                <th scope="col" className="text-start px-2">
                  E-Mail
                </th>
                <th scope="col" className="text-start px-2">
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
