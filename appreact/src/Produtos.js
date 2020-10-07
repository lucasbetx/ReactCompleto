import React from 'react';

const produtos = [
  { nome: 'Notebook', propriedades: ['16gb ram', '512gb'] },
  { nome: 'Smartphone', propriedades: ['2gb ram', '128gb'] },
];

const Produtos = () => {
  return (
    <>
      <h2 style={{ paddingTop: 20, color: '#4c8b64' }}>Produtos</h2>

      {produtos.map(({ nome, propriedades }) => (
        <div key={nome} style={{ padding: 10, border: 'solid', margin: 5 }}>
          <h3>{nome}</h3>
          <ul>
            {propriedades.map((prop) => (
              <li key={prop}>{prop}</li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
};

export default Produtos;
