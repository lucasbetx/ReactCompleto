// import React from 'react';
// import { GlobalContext } from './GlobalContext';

// const Produto = ({ dados }) => {
//   return (
//     <div>
//       <h1>{dados.nome}</h1>
//       <p>R$ {dados.preco}</p>
//       <img src={dados.fotos[0].src} alt={dados.fotos[0].titulo} />
//     </div>
//   );
// };

// export default Produto;

// const Produto = ({ produto }) => {
//   const [dados, setDados] = React.useState(null);

//   React.useEffect(() => {
//     if (produto !== null) {
//       fetch(`https://ranekapi.origamid.dev/json/api/produto/${produto}`)
//         .then((response) => response.json())
//         .then((json) => setDados(json));
//     }
//   }, [produto]);

//   if (dados === null) return null;
//   return (
//     <>
//       <div>
//         <h1>{dados.nome}</h1>
//         <p>R$ {dados.preco}</p>
//       </div>
//     </>
//   );
// };

// // export default Produto;

// const Produto = () => {
//   const { dados } = React.useContext(GlobalContext);
//   if (dados === null) return null;
//   return (
//     <div>
//       Produto:{' '}
//       {dados.map((produto) => (
//         <li key={produto.id}>{produto.nome}</li>
//       ))}
//     </div>
//   );
// };

// export default Produto;
