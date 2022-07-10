import logo from "./logo.svg";
import "./App.css";
import { Table } from "react-bootstrap";
function App() {
  //const Info=['anil','sidhu','satyam','sonu']
  const student = [
    {
      name:"satyam",
      contact: 9301428519,
      adhar: [
        { House: "12", Owner: "Ramlal" },
        { House: "12", Owner: "Ramlal" },
        { House: "12", Owner: "Ramlal" },
        { House: "12", Owner: "Ramlal" },
        { House: "12", Owner: "Ramlal" },
      ],
    },
    {
      name: "satyam2",
      contact: 9301428519,
      adhar: [
        { House: "12", Owner: "Ramlal" },
        { House: "12", Owner: "Ramlal" },
        { House: "12", Owner: "Ramlal" },
        { House: "12", Owner: "Ramlal" },
        { House: "12", Owner: "Ramlal" },
      ],
    },
    {
      name: "ram",
      contact: 9301428519,
      adhar: [
        { House: "12", Owner: "Ramlal" },
        { House: "12", Owner: "Ramlal" },
        { House: "12", Owner: "Ramlal" },
        { House: "12", Owner: "Ramlal" },
        { House: "12", Owner: "Ramlal" },
      ],
    },
    {
      name: "saars",
      contact: 9301428519,
      adhar: [
        { House: "12", Owner: "Ramlal" },
        { House: "12", Owner: "Ramlal" },
        { House: "12", Owner: "Ramlal" },
        { House: "12", Owner: "Ramlal" },
        { House: "12", Owner: "Ramlal" },
      ],
    },
    {
      name: "satyam1",
      contact: 9301428519,
      adhar: [
        { House: "12", Owner: "Ramlal" },
        { House: "12", Owner: "Ramlal" },
        { House: "12", Owner: "Ramlal" },
        { House: "12", Owner: "Ramlal" },
        { House: "12", Owner: "Ramlal" },
      ],
    },
    {
      name: "satyam1",
      contact: 9301428519,
      adhar: [
        { House: "12", Owner: "Ramlal" },
        { House: "12", Owner: "Ramlal" },
        { House: "12", Owner: "Ramlal" },
        { House: "12", Owner: "Ramlal" },
        { House: "12", Owner: "Ramlal" },
      ],
    },
    {
      name: "satyam1",
      contact: 9301428519,
      adhar: [
        { House: "12", Owner: "Ramlal" },
        { House: "12", Owner: "Ramlal" },
        { House: "12", Owner: "Ramlal" },
        { House: "12", Owner: "Ramlal" },
        { House: "12", Owner: "Ramlal" },
      ],
    }, {
      name: "satyam1",
      contact: 9301428519,
      adhar:[{House:"12",Owner:"Ramlal"},
      {House:"12",Owner:"Ramlal"},
      {House:"12",Owner:"Ramlal"},
      {House:"12",Owner:"Ramlal"},
      {House:"12",Owner:"Ramlal"}] }
  ];

  return (
    <div className="App">
      <Table striped bordered hover variant="dark">
        <tbody>
          <tr>
            <td> Sno.     </td>
            <td> Name    </td>
            <td> contact   </td>
            <td> adhar     </td>
          </tr>
        </tbody>
      </Table>
      <Table striped bordered hover variant="dark">
        <tbody>
          {student.map((item, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{item.name}</td>
              <td>{item.contact}</td>
              <td>
                <Table striped bordered hover variant="dark">
                  <tbody>
                    {item.adhar.map((data, j) => (
                      <tr key={j}>
                        <td>{data.House}</td>
                        <td>{data.Owner}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default App;
