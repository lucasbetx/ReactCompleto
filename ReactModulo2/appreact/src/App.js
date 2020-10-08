import React from 'react';
import Home from './Home';
import Produtos from './Produtos';

// Mostre os dados da aplicação, como aprensetado no vídeo
// Não utilize CSS externo, use o style para mudar as cores
// Se a situação estiver ativa pinte de verde, inativa vermelho
// Se o gasto for maior que 10000 mostre uma mensagem
// const luana = {
//   cliente: 'Luana',
//   idade: 27,
//   compras: [
//     { nome: 'Notebook', preco: 'R$ 2500' },
//     { nome: 'Geladeira', preco: 'R$ 3000' },
//     { nome: 'Smartphone', preco: 'R$ 1500' },
//   ],
//   ativa: true,
// };

// const mario = {
//   cliente: 'Mario',
//   idade: 31,
//   compras: [
//     { nome: 'Notebook', preco: 'R$ 2500' },
//     { nome: 'Geladeira', preco: 'R$ 3000' },
//     { nome: 'Smartphone', preco: 'R$ 1500' },
//     { nome: 'Guitarra', preco: 'R$ 3500' },
//   ],
//   ativa: false,
// };

// const App = () => {
//   const dados = mario;

//   const total = dados.compras
//     .map((item) => Number(item.preco.replace('R$ ', ''))) // array com todos os preços
//     .reduce((a, b) => a + b); //efetuando soma do array

//   return (
//     <>
//       <>
//         <div>Nome: {dados.cliente} </div>
//         <div>Idade: {dados.idade}</div>
//         <span>
//           Situação:{' '}
//           <span style={{ color: dados.ativa ? 'green' : 'red' }}>
//             {' '}
//             {dados.ativa ? 'Ativa' : 'Inativa'}{' '}
//           </span>
//         </span>
//         <div>Total gasto: R$ {total} </div>
//         {total > 10000 && <div>Você esta gastando muito</div>}
//         {/* // se for
//         verdadeira ele continua se não ele para*/}
//       </>
//     </>
//   );
// };

// Organize os produtos como mostrado no vídeo
// Mostre apenas produtos que forem mais caros que R$ 1500
// const produtos = [
//   {
//     id: 1,
//     nome: 'Smartphone',
//     preco: 'R$ 2000',
//     cores: ['#29d8d5', '#252a34', '#fc3766'],
//   },
//   {
//     id: 2,
//     nome: 'Notebook',
//     preco: 'R$ 3000',
//     cores: ['#ffd045', '#d4394b', '#f37c59'],
//   },
//   {
//     id: 3,
//     nome: 'Tablet',
//     preco: 'R$ 1500',
//     cores: ['#365069', '#47c1c8', '#f95786'],
//   },
// ];

// const App = () => {
//   return (
//     <section>
//       {produtos
//         .filter((produto) => Number(produto.preco.replace('R$ ', '')) >= 1500)
//         .map((produto) => (
//           <div key={produto.id}>
//             <h1>{produto.nome}</h1>
//             <p>Preço: {produto.preco}</p>
//             <ul>
//               {produto.cores.map((cor) => (
//                 <li key={cor} style={{ backgroundColor: cor, color: 'white' }}>
//                   {cor}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         ))}
//     </section>
//   );
// };

// Replique a interface como a apresentada na aula
// Utilize a array abaixo para mostrar os produtos
// Quebre em componentes o que precisar ser reutilizado
// Dica: const { pathname } = window.location; (puxa o caminho do URL)

const App = () => {
  const { pathname } = window.location;

  let Component;

  if (pathname === '/produtos') {
    Component = Produtos;
  } else {
    Component = Home;
  }

  return (
    <>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/produtos">Produtos</a>
        </li>
      </ul>

      <Component />
    </>
  );
};

export default App;
