import React from 'react';
import Table from 'react-bootstrap/Table';

function CarDetail({ cars }) {
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Marca</th>
            <th>Linea</th>
            <th>Modelo</th>
          </tr>
        </thead>
        <tbody>
          {cars.map((car, index) => (
            <tr key={car.id}>
              <td>{index + 1}</td>
              <td>{car.marca}</td>
              <td>{car.linea}</td>
              <td>{car.modelo}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default CarDetail;