
// -----  Arquivo padrão do cra -----------------

// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

// -------------------------------------------------------------------

// ----------   Normalização  ------------------------

// export function App() {
//   return (
//     <div>
//       Rate the Hero!
//     </div>
//   );
// }

// ---------------------------------------------------------------------


// import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import { Search } from './screens/Search';
// import { Details } from './screens/Details';
// export function App() {
// 	return (
// 		<BrowserRouter>
// 			<Switch>
// 				<Route path="/detalhes/:id" exact>
// 					<Details />
// 				</Route>
// 				<Route path="/" exact>
// 					<Search />
// 				</Route>
// 				<Route path="*">Página não encontrada</Route>
// 			</Switch>
// 		</BrowserRouter>
// 	);
// }

// import { BrowserRouter, Switch, Route } from 'react-router-dom';
// // Foi importado acima as dependencias routes
// import { Search } from './screens/Search';
// import { Details } from './screens/Details';
// export function App() {
// 	return (
//  		<BrowserRouter>
//  			<Switch>
//  				<Route path="/detalhes/:id" exact>
//  					<Details />
//  				</Route>
//  				<Route path="/" exact>
//  					<Search />
//  				</Route>
//  				<Route path="*">Página não encontrada</Route>
//  			</Switch>
//  		</BrowserRouter>
//  	);
//  }

// ----------------------------------------------------------------------------------


// Codigo correto. Abaixo terá o codigo com comentarios das mudanças

// import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Mudando as importações
// // Foi importado acima as dependencias routes
// import { Search } from './screens/Search';
// import { Details } from './screens/Details';

// export function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/detalhes/:id" element={<Details />} />
//         <Route path="/" element={<Search />} />
//         <Route path="*" element={<div>Página não encontrada</div>} />
//       </Routes>
//     </BrowserRouter>
//   );
// }


 
// Antes vv

// 		<>
// 			<Search />
// 			<Details />
// 		</>
// 	);
// }



// // Importações do react-router-dom atualizadas para a versão 6
// import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
// import { Search } from './screens/Search';
// import { Details } from './screens/Details';
// import { NotFound } from './screens/NotFound';
// // Importação do normalize styles js
// import { NormalizeStyles } from './shared/NormalizeStyles';

// export function App() {
//   return (
//     <BrowserRouter>
//       {/* 
//       1. Substituímos o `Switch` por `Routes`. 
//       O `Switch` foi removido na versão 6 do `react-router-dom`. Agora, o `Routes` é responsável 
//       por garantir que apenas uma rota seja renderizada por vez, exatamente como o `Switch` fazia antes.
//       */}
//       <Routes>
//         {/* 
//         2. Usamos `element={<Details />}` no lugar de `component={Details}`.
//         Na versão 6, `Route` não usa mais `component`. Agora é necessário passar o componente diretamente 
//         através da propriedade `element`, e o valor de `element` deve ser um JSX, ou seja, um componente React 
//         entre `< >`.
//         */}
//         <Route path="/detalhes/:id" element={<Details />} />
//         {/* 
//         3. Mesmo ajuste para a rota de `/` com o componente `Search`. 
//         Agora usamos `element={<Search />}` em vez de `component={Search}`.
//         */}
//         <Route path="/" element={<Search />} />
//         {/* 
//         4. Rota de "Página não encontrada" (404).
//         A rota com `path="*"` captura qualquer URL que não coincida com as anteriores.
//         Agora, também usamos `element={<div>Página não encontrada</div>}` para mostrar a mensagem de erro.
//         */}
//         <Route path="*" element={<NotFound />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// ---------------------------------------------------------------

// Importações do react-router-dom atualizadas para a versão 6
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Search } from './screens/Search';
import { Details } from './screens/Details';
import { NotFound } from './screens/NotFound';
// Importação do normalize styles js
import { NormalizeStyles } from './shared/NormalizeStyles';
import { Header } from './common-components/Header/Header'; // Adicionando o Header do código antigo

export function App() {
  return (
    <>
      <NormalizeStyles /> {/* Mantém a normalização de estilos */}

      <BrowserRouter>
        {/* Adiciona o Header fixo em todas as rotas */}
        <Header /> 

        <Routes>
          {/* Rota para os detalhes, usando JSX na propriedade `element` */}
          <Route path="/detalhes/:id" element={<Details />} />

          {/* Rota principal, que exibe o componente Search */}
          <Route path="/" element={<Search />} />

          {/* Rota de "Página não encontrada" */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
