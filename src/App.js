import React from 'react';
import './App.css';

const data = [
  {nombre: "Juan", apellido: "Perez", edad: 10, fechaNac: "10-Enero-2012"},
  {nombre: "Antonio", apellido: "Solis", edad: 45, fechaNac: "25-Diciembre-1977"},
  {nombre: "Isai", apellido: "Silva", edad: 24, fechaNac: "08-Septiembre-1998"},
  {nombre: "Paco", apellido: "Negrete", edad: 24, fechaNac: "22-Septiembre-1998"}
]

function App() {
  return (
    <div className="App">
      <h1>Personas random</h1>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Edad</th>
            <th>Fecha de nacimiento</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((value, key) => {
              return (
                <tr key={key}>
                  <td>{value.nombre}</td>
                  <td>{value.apellido}</td>
                  <td>{value.edad}</td>
                  <td>{value.fechaNac}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  );
}

export default App;
