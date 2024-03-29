import TableStyled from "./Table.styled";

const Table = () => {
  return (
    <TableStyled className="table">
      <tr className="tr">
        <td className="days">M:</td>
        <td>Push Dom Monday</td>
      </tr>
      <tr className="tr">
        <td className="days">T:</td>
        <td>Pull Dom Tuesday</td>
      </tr>
      <tr className="tr">
        <td className="days">W:</td>
        <td>Leg Dom Wednesday</td>
      </tr>
      <tr className="tr">
        <td className="days">T:</td>
        <td>Blazing Abs Thursday</td>
      </tr>
      <tr className="tr">
        <td className="days">F:</td>
        <td>The Sacred Friday</td>
      </tr>
      <tr className="tr">
        <td className="days">S:</td>
        <td>Junk in the Trunk Sunday</td>
      </tr>
    </TableStyled>
  );
};

export default Table;
