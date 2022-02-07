import { Table } from "reactstrap";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import {FaUserEdit} from 'react-icons/fa';

function Dashboard() {
  return (
    <div className="tablecontainer">
      <h1>Welcome to the Dash</h1>

      <Table>
        <thead>
          <tr>
            <th>
              #
            </th>
            <th>
              Name
            </th>
            <th>
              Role
            </th>
            <th>
              Category
            </th>
            <th>
              Edit
            </th>
            <th>
              Delete
            </th>

          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">
              1
            </th>
            <td>
              Sagar
            </td>
            <td>
             Web developer
            </td>
            <td>
             Designing
            </td>
         <td> </td>
          <td></td>
          </tr>
          <tr>
            <th scope="row">
              2
            </th>
            <td>
             John
            </td>
            <td>
             Senior developer 
            </td>
            <td>
             Advance developememt
            </td>
           <td></td>
            <td></td>
          </tr>
          <tr>
            <th scope="row">
              3
            </th>
            <td>
             Karl
            </td>
            <td>
              Process manager
            </td>
            <td>
             Head 
            </td>
          
          </tr>
        </tbody>
      </Table>

    </div>
  );
}

export default Dashboard