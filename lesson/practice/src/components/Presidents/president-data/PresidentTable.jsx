import PresidentRow from "./PresidentRow";

const PresidentTable = (props) => {
  return (
    <>
      <h2>{props.tableTitle}</h2>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Year</th>
            <th>Year Passed</th>
          </tr>
        </thead>
        <tbody>
          <PresidentRow />
        </tbody>
      </table>
    </>
  );
};

export default PresidentTable;
