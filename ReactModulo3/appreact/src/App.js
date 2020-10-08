// import React from 'react';
// import useLocalStorage from './useLocalStorage';
// import useFetch from './useFetch';

// import Produto from './Produto';
// import { GlobalStorage } from './GlobalContext';
// import Limpar from './Limpar';

// const App = () => {
//   const [dados, setDados] = React.useState(null);
//   const [carregando, setCarregando] = React.useState(null);

//   async function handleClick(event) {
//     setCarregando(true);
//     const response = await fetch(
//       `https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText}`,
//     );
//     const json = await response.json();
//     setDados(json);
//     setCarregando(false);
//   }

//   return (
//     <>
//       <button onClick={handleClick} style={{ margin: 10 }}>
//         Notebook
//       </button>
//       <button onClick={handleClick} style={{ margin: 10 }}>
//         Smartphone
//       </button>
//       <button onClick={handleClick} style={{ margin: 10 }}>
//         Tablet
//       </button>
//       {carregando && <p>Carregando...</p>}
//       {!carregando && dados && <Produto dados={dados} />}
//     </>
//   );
// };

// export default App;

// const App = () => {
//   const [produto, setProduto] = React.useState(null);

//   React.useEffect(() => {
//     const produtoLocal = window.localStorage.getItem('produto');
//     if (produtoLocal !== null) setProduto(produtoLocal);
//   }, []);

//   React.useEffect(() => {
//     if (produto !== null) window.localStorage.setItem('produto', produto);
//   }, [produto]);

//   //target pega o texto de dentro do botão
//   function handleClick({ target }) {
//     setProduto(target.innerText);
//   }

//   return (
//     <>
//       <h1>Preferencia: {produto}</h1>

//       <button onClick={handleClick} style={{ margin: 10 }}>
//         Notebook
//       </button>
//       <button onClick={handleClick}>Smartphone</button>
//       <Produto produto={produto} />
//     </>
//   );
// };

// export default App;

// const App = () => {
//   return (
//     <GlobalStorage>
//       <Produto />
//       <Limpar />
//     </GlobalStorage>
//   );
// };

// export default App;

// const App = () => {
//   const [produto, setProduto] = useLocalStorage('produto', '');

//   function handleClick({ target }) {
//     setProduto(target.innerText);
//   }

//   return (
//     <div>
//       <p>Produto preferido: {produto}</p>
//       <button onclick={handleClick}>Notebook</button>
//       <button onClick={handleClick}>Smartphone</button>
//     </div>
//   );
// };

// export default App;
import React from 'react';
import useLocalStorage from './useLocalStorage';
import useFetch from './useFetch';

const App = () => {
  const [produto, setProduto] = useLocalStorage('produto', '');
  const { request, data, loading, error } = useFetch();

  React.useEffect(() => {
    async function fetchData() {
      const { response, json } = await request(
        'https://ranekapi.origamid.dev/json/api/produto/',
      );
      console.log(response, json);
    }
    fetchData();
  }, [request]);

  function handleClick({ target }) {
    setProduto(target.innerText);
  }

  if (error) return <p>{error}</p>;
  if (loading) return <p>Carregando...</p>;
  if (data)
    return (
      <div>
        <p>Produto preferido: {produto}</p>
        <button onClick={handleClick}>notebook</button>
        <button onClick={handleClick}>smartphone</button>

        {data.map((produto) => (
          <div key={produto.id}>
            <h1>{produto.nome}</h1>
          </div>
        ))}
      </div>
    );
  else return null;
};

export default App;
