// // // // export function Search() {
// // // // 	return <div>Hello, tela de busca!</div>;
// // // // }

// // // import { Button } from '../common-components/Button/Button';
// // // export function Search() {
// // // 	return (
// // // 		<div>
// // // 			{/* <Button>Buscar</Button> */}
// // // 			<Button ghost={true}>Buscar</Button>
// // // 		</div>
// // // 	);
// // // }

// // // ------------------------------------------------------------------------- 

// // // // Importação dos componentes necessários
// // // import { Button } from '../common-components/Button/Button';
// // // import { Header } from '../common-components/Header/Header';

// // // // Componente Search com a nova estrutura
// // // export function Search() {
// // // 	return (
// // // 		<div>
// // // 			{/* Novo componente Header inserido na interface */}
// // // 			<Header />
			
// // // 			{/* Botão com a propriedade ghost, mantendo a lógica do código antigo */}
// // // 			<Button ghost={true}>Buscar</Button>
// // // 		</div>
// // // 	);
// // // }

// // // ---------------------------------------------------------

// // // // Importação dos componentes necessários
// // // import { Button } from '../common-components/Button/Button'; 
// // // import { Card } from '../common-components/Card/Card'; // Novo componente SearchField adicionado
// // // import { Header } from '../common-components/Header/Header'; 
// // // import { SearchField } from '../common-components/SearchField/SearchField'; // Novo componente SearchField adicionado

// // // // Componente Search atualizado com o novo SearchField
// // // export function Search() {
// // // 	return (
// // // 		<div>
// // // 			<Header /> 
// // // 			{/* Adicionamos um campo de busca (SearchField) para permitir a entrada de texto */}
// // // 			<SearchField placeholder="Digite um nome de herói ou heroína" />
			
// // // 			{/* O botão Buscar permanece com a propriedade ghost para manter a aparência transparente */}
// // // 			<Button ghost={true}>Buscar</Button> 
// // // 			<Card>Aqui temos um Card</Card>
// // // 		</div>
// // // 	);
// // // }

// // // ------------------------------------------------------------------

// // // Importação dos componentes necessários
// // // import { Button } from '../common-components/Button/Button';
// // // import { Caption } from '../common-components/Caption/Caption'; // Novo componente Caption adicionado
// // // import { Card } from '../common-components/Card/Card';
// // // import { Description } from '../common-components/Description/Description'; // Novo componente Description adicionado
// // // import { Header } from '../common-components/Header/Header';
// // // import { HeadingOne } from '../common-components/HeadingOne/HeadingOne'; // Novo componente HeadingOne adicionado
// // // import { HeadingTwo } from '../common-components/HeadingTwo/HeadingTwo'; // Novo componente HeadingTwo adicionado
// // // import { SearchField } from '../common-components/SearchField/SearchField';
// // // import { Subtitle } from '../common-components/Subtitle/Subtitle'; // Novo componente Subtitle adicionado

// // // // Componente Search atualizado com novos elementos e componentes
// // // export function Search() {
// // // 	return (
// // // 		<div>
// // // 			{/* Mantemos o Header na interface */}
// // // 			<Header />
			
// // // 			{/* O SearchField permanece para permitir a entrada de texto */}
// // // 			<SearchField placeholder="Digite um nome de herói ou heroína" />

// // // 			{/* O botão Buscar segue com estilo ghost */}
// // // 			<Button ghost={true}>Buscar</Button>

// // // 			{/* Atualizamos o conteúdo do Card com novos componentes tipográficos */}
// // // 			<Card>
// // // 				{/* Adicionamos HeadingOne como título principal */}
// // // 				<HeadingOne>Heading One</HeadingOne>

// // // 				{/* Adicionamos HeadingTwo como subtítulo */}
// // // 				<HeadingTwo>Heading Two</HeadingTwo>

// // // 				{/* Agrupamos o componente Subtitle em uma <div> */}
// // // 				<div>
// // // 					<Subtitle>Subtitle</Subtitle>
// // // 				</div>

// // // 				{/* Adicionamos a descrição com o componente Description */}
// // // 				<Description>Description</Description>

// // // 				{/* Agrupamos o Caption em uma <div> */}
// // // 				<div>
// // // 					<Caption>Caption</Caption>
// // // 				</div>
// // // 			</Card>
// // // 		</div>
// // // 	);
// // // }

// // // -----------------------------------------------

// // import { Button } from '../common-components/Button/Button';
// // import { ButtonLink } from '../common-components/ButtonLink/ButtonLink';
// // import { Caption } from '../common-components/Caption/Caption';
// // import { Card } from '../common-components/Card/Card';
// // import { Description } from '../common-components/Description/Description';
// // import { Header } from '../common-components/Header/Header';
// // import { HeadingOne } from '../common-components/HeadingOne/HeadingOne';
// // import { HeadingTwo } from '../common-components/HeadingTwo/HeadingTwo';
// // import { SearchField } from '../common-components/SearchField/SearchField';
// // import { Subtitle } from '../common-components/Subtitle/Subtitle';
// // export function Search() {
// // 	return (
// // 		<div>
// // 			<Header />
// // 			<SearchField placeholder="Digite um nome de herói ou heroína" />
// // 			<Button ghost={true}>Buscar</Button>
// // 			<Card>
// // 				<HeadingOne>Heading One</HeadingOne>
// // 				<HeadingTwo>Heading Two</HeadingTwo>
// // 				<div>
// // 					<Subtitle>Subtitle</Subtitle>
// // 				</div>
// // 				<Description>Description</Description>
// // 				<div>
// // 					<Caption>Caption</Caption>
// // 				</div>
// // 			</Card>
// // 			<ButtonLink>Ver Mais</ButtonLink>
// // 		</div>
// // 	);
// // }

// // ------------------------------------------

// import { Button } from '../common-components/Button/Button';
// import { ButtonLink } from '../common-components/ButtonLink/ButtonLink';
// import { Caption } from '../common-components/Caption/Caption';
// import { Card } from '../common-components/Card/Card';
// import { Description } from '../common-components/Description/Description';
// import { Header } from '../common-components/Header/Header';
// import { HeadingOne } from '../common-components/HeadingOne/HeadingOne';
// import { HeadingTwo } from '../common-components/HeadingTwo/HeadingTwo';
// import { SearchField } from '../common-components/SearchField/SearchField';
// import {
// 	SelectField,
// 	Option,
// } from '../common-components/SelectField/SelectField';
// import { Subtitle } from '../common-components/Subtitle/Subtitle';
// export function Search() {
// 	return (
// 		<div>
// 			<Header />
// 			<SearchField placeholder="Digite um nome de herói ou heroína" />
// 			<Button ghost={true}>Buscar</Button>
// 			<Card>
// 				<HeadingOne>Heading One</HeadingOne>
// 				<HeadingTwo>Heading Two</HeadingTwo>
// 				<div>
// 					<Subtitle>Subtitle</Subtitle>
// 				</div>
// 				<Description>Description</Description>
// 				<div>
// 					<Caption>Caption</Caption>
// 				</div>
// 			</Card>
// 			<ButtonLink>Ver Mais</ButtonLink>
// 			<SelectField placeholder="Nota">
// 				<Option>Opção 1</Option>
// 			</SelectField>
// 		</div>
// 	);
// }

// ---------------------------------------------

// import { Alert } from '../common-components/Alert/Alert';
// import { Button } from '../common-components/Button/Button';
// import { ButtonLink } from '../common-components/ButtonLink/ButtonLink';
// import { Caption } from '../common-components/Caption/Caption';
// import { Card } from '../common-components/Card/Card';
// import { Description } from '../common-components/Description/Description';
// import { Header } from '../common-components/Header/Header';
// import { HeadingOne } from '../common-components/HeadingOne/HeadingOne';
// import { HeadingTwo } from '../common-components/HeadingTwo/HeadingTwo';
// import { SearchField } from '../common-components/SearchField/SearchField';
// import {
// 	SelectField,
// 	Option,
// } from '../common-components/SelectField/SelectField';
// import { Subtitle } from '../common-components/Subtitle/Subtitle';
// export function Search() {
// 	return (
// 		<div>
// 			<Header />
// 			<SearchField placeholder="Digite um nome de herói ou heroína" />
// 			<Button ghost={true}>Buscar</Button>
// 			<Card>
// 				<HeadingOne>Heading One</HeadingOne>
// 				<HeadingTwo>Heading Two</HeadingTwo>
// 				<div>
// 					<Subtitle>Subtitle</Subtitle>
// 				</div>
// 				<Description>Description</Description>
// 				<div>
// 					<Caption>Caption</Caption>
// 				</div>
// 			</Card>
// 			<ButtonLink>Ver Mais</ButtonLink>
// 			<SelectField placeholder="Nota">
// 				<Option>Opção 1</Option>
// 			</SelectField>
// 			<Alert type="info">Nenhum herói ou heroína encontrado</Alert>
// 			<Alert type="success" small={true}>
// 				Sua avaliação foi atribuída com sucesso!
// 			</Alert>
// 			<Alert type="error" small={true}>
// 				Ocorreu um erro ao avaliar
// 			</Alert>
// 		</div>
// 	);
// }

// ----------------------------------------------------------------

// export function Search() {
// 	return <div />;
// }

// ---------- ALTERANDO COM O FLEX BOX INSTALADO ------------------

// import { Flex, Box } from 'reflexbox'; 
// // Importa os componentes Flex e Box para organizar layout com flexbox.

// import { Button } from '../common-components/Button/Button'; 
// // Importa o componente de botão personalizado.

// import { SearchField } from '../common-components/SearchField/SearchField'; 
// // Importa o campo de busca personalizado.

// import { Spaces } from '../shared/DesignTokens'; 
// // Importa tokens de espaçamento reutilizáveis.

// export function Search() { 
// 	// Define o componente funcional Search.
// 	return (
// 		<Flex
// 			width={['100%', '600px']} 
// 			// Define a largura como 100% para telas pequenas e 600px para maiores.
// 			mx={[Spaces.None, 'auto']} 
// 			// Define a margem horizontal como "nenhuma" em telas pequenas e centraliza em telas maiores.
// 			mt={[Spaces.THREE, Spaces.FIVE]} 
// 			// Define a margem superior com valores diferentes para diferentes tamanhos de tela.
// 			px={[Spaces.ONE, Spaces.NONE]} 
// 			// Define padding horizontal como 1 unidade em telas pequenas e nenhum em maiores.
// 		>
// 			<Box flexGrow="1"> 
// 				{/* Cria um box que cresce para ocupar o máximo de espaço disponível. */}
// 				<SearchField placeholder="Digite um nome de herói ou heroína" /> 
// 				{/* Campo de busca com texto de placeholder. */}
// 			</Box>
// 			<Box ml={Spaces.TWO}> 
// 				{/* Cria um box com margem esquerda de duas unidades. */}
// 				<Button>Buscar</Button> 
// 				{/* Botão para acionar a busca. */}
// 			</Box>
// 		</Flex>
// 	);
// }

// --------------- ALTERADO PARA ADICIONAR O HERO CARD ---------------

// import { Flex, Box } from 'reflexbox'; 
// // Continua sendo usado para organizar layout com flexbox.

// import styled from 'styled-components'; 
// // Mantida importação do styled-components para estilização personalizada.

// import { Button } from '../common-components/Button/Button'; 
// // Mantido botão personalizado.

// import { SearchField } from '../common-components/SearchField/SearchField'; 
// // Campo de busca inalterado.

// import { HeroCard } from '../components/HeroCard/HeroCard'; 
// // Componente para exibir detalhes do herói, agora renderizado em grid.

// import { Spaces } from '../shared/DesignTokens'; 
// // Tokens de espaçamento mantidos.

// const HeroesGrid = styled(Box)` 
//   // Novo componente `HeroesGrid` criado com styled-components para layout em grid.
// 	display: grid; 
// 	// Define o layout como grid.
// 	grid-template-columns: 1fr; 
// 	// Em telas pequenas, as colunas ocupam 100% da largura.
// 	gap: ${Spaces.ONE_HALF}; 
// 	// Define o espaçamento entre os itens para 0.5 unidade.

// 	@media (min-width: 1024px) { 
// 	  // Em telas grandes (largura mínima de 1024px):
// 		grid-template-columns: 1fr 1fr 1fr 1fr; 
// 		// Layout com quatro colunas.
// 		gap: ${Spaces.TWO}; 
// 		// Espaçamento aumentado para 2 unidades.
// 	}
// `;

// export function Search() { 
// 	// Define o componente Search.
// 	return (
// 		<>
// 			<Flex
// 				width={['100%', '600px']} 
// 				mx={[Spaces.None, 'auto']} 
// 				mt={[Spaces.THREE, Spaces.FIVE]} 
// 				px={[Spaces.ONE, Spaces.NONE]} 
// 				mb={[Spaces.TWO, Spaces.FOUR]} 
// 				// Margem inferior mantida para espaçamento entre campo de busca e o grid.
// 			>
// 				<Box flexGrow="1">
// 					<SearchField placeholder="Digite um nome de herói ou heroína" />
// 				</Box>
// 				<Box ml={Spaces.TWO}>
// 					<Button>Buscar</Button>
// 				</Box>
// 			</Flex>

// 			<HeroesGrid 
// 				px={[Spaces.ONE, Spaces.TWO]} 
// 				pb={[Spaces.ONE, Spaces.TWO]} 
// 				// Padding inferior adicionado para evitar que o grid encoste na borda inferior.
// 			>
// 				<HeroCard /> 
// 				<HeroCard /> 
// 				<HeroCard /> 
// 				<HeroCard /> 
// 				<HeroCard /> 
// 				{/* Renderizando múltiplos cards para exibir vários heróis. */}
// 			</HeroesGrid>
// 		</>
// 	);
// }

// import { Flex, Box } from 'reflexbox'; 
// import styled from 'styled-components'; 
// import { Button } from '../common-components/Button/Button'; 
// import { SearchField } from '../common-components/SearchField/SearchField'; 
// import { HeroCard } from '../components/HeroCard/HeroCard'; 
// import { Spaces } from '../shared/DesignTokens'; 

// const HeroesGrid = styled(Box)` 
// 	display: grid; 
// 	grid-template-columns: 1fr; 
// 	gap: ${Spaces.ONE_HALF}; 

// 	@media (min-width: 1024px) { 
// 		grid-template-columns: 1fr 1fr 1fr 1fr; 
// 		gap: ${Spaces.TWO}; 
// 	}
// `;

// export function Search() { 
// 	return (
// 		<>
// 			<Flex
// 				width={['100%', '600px']} 
// 				mx={[Spaces.None, 'auto']} 
// 				mt={[Spaces.THREE, Spaces.FIVE]} 
// 				px={[Spaces.ONE, Spaces.NONE]} 
// 				mb={[Spaces.TWO, Spaces.FOUR]} 
// 			>
// 				<Box flexGrow="1">
// 					<SearchField placeholder="Digite um nome de herói ou heroína" />
// 				</Box>
// 				<Box ml={Spaces.TWO}>
// 					<Button>Buscar</Button>
// 				</Box>
// 			</Flex>

// 			<HeroesGrid 
// 				px={[Spaces.ONE, Spaces.TWO]} 
// 				pb={[Spaces.ONE, Spaces.TWO]} 
// 			>
// 				<HeroCard /> 
// 				<HeroCard /> 
// 				<HeroCard /> 
// 				<HeroCard /> 
// 				<HeroCard /> 
// 			</HeroesGrid>
// 		</>
// 	);
// }


// --------------- ALTERADO PARA RECEBER OS PROPS DINAMICOS --------------

// import { Flex, Box } from 'reflexbox'; 
// import styled from 'styled-components'; 
// import { Button } from '../common-components/Button/Button'; 
// import { SearchField } from '../common-components/SearchField/SearchField'; 
// import { HeroCard } from '../components/HeroCard/HeroCard'; 
// import { Spaces } from '../shared/DesignTokens'; 

// const HeroesGrid = styled(Box)` 
// 	display: grid; 
// 	grid-template-columns: 1fr; 
// 	gap: ${Spaces.ONE_HALF}; 

// 	@media (min-width: 1024px) { 
// 		grid-template-columns: 1fr 1fr 1fr 1fr; 
// 		gap: ${Spaces.TWO}; 
// 	}
// `;

// export function Search() { 
// 	return (
// 		<>
// 			<Flex
// 				width={['100%', '600px']} 
// 				mx={[Spaces.None, 'auto']} 
// 				mt={[Spaces.THREE, Spaces.FIVE]} 
// 				px={[Spaces.ONE, Spaces.NONE]} 
// 				mb={[Spaces.TWO, Spaces.FOUR]} 
// 			>
// 				<Box flexGrow="1">
// 					<SearchField placeholder="Digite um nome de herói ou heroína" />
// 				</Box>
// 				<Box ml={Spaces.TWO}>
// 					<Button>Buscar</Button>
// 				</Box>
// 			</Flex>

// 			<HeroesGrid
// 				px={[Spaces.ONE, Spaces.TWO]}
// 				pb={[Spaces.ONE, Spaces.TWO]}
// 			>
// 				{/* Alterado: agora cada HeroCard recebe props dinâmicas */}
// 				<HeroCard
// 					secretIdentity="Terry McGinnis"
// 					name="Batman"
// 					picture="https://www.superherodb.com/pictures2/portraits/10/100/10441.jpg"
// 					universe="DC Comics"
// 				/>
// 				<HeroCard
// 					secretIdentity="Bruce Wayne"
// 					name="Batman"
// 					picture="https://www.superherodb.com/pictures2/portraits/10/100/639.jpg"
// 					universe="DC Comics"
// 				/>
// 				<HeroCard
// 					secretIdentity="Dick Grayson"
// 					name="Batman II"
// 					picture="https://www.superherodb.com/pictures2/portraits/10/100/1496.jpg"
// 					universe="DC Comics"
// 				/>
// 			</HeroesGrid>
// 		</>
// 	);
// }

// ------------ gerenciamento dinâmico de heróis com useState ---------------------

// import React from 'react'; // Adicionado React para usar o hook useState
// import { Flex, Box } from 'reflexbox';
// import styled from 'styled-components';
// import { Button } from '../common-components/Button/Button';
// import { SearchField } from '../common-components/SearchField/SearchField';
// import { HeroCard } from '../components/HeroCard/HeroCard';
// import { Spaces } from '../shared/DesignTokens';

// // Mantida a estrutura original do grid
// const HeroesGrid = styled(Box)`
// 	display: grid;
// 	grid-template-columns: 1fr;
// 	gap: ${Spaces.ONE_HALF};
// 	@media (min-width: 1024px) {
// 		grid-template-columns: 1fr 1fr 1fr 1fr;
// 		gap: ${Spaces.TWO};
// 	}
// `;

// export function Search() {
// 	// Alterado: agora usamos o hook useState para armazenar o array de heróis
// 	const initialState = [
// 		{
// 			secretIdentity: 'Terry McGinnis',
// 			name: 'Batman',
// 			picture:
// 				'https://www.superherodb.com/pictures2/portraits/10/100/10441.jpg',
// 			universe: 'DC Comics',
// 		},
// 		{
// 			secretIdentity: 'Bruce Wayne',
// 			name: 'Batman',
// 			picture:
// 				'https://www.superherodb.com/pictures2/portraits/10/100/639.jpg',
// 			universe: 'DC Comics',
// 		},
// 		{
// 			secretIdentity: 'Dick Grayson',
// 			name: 'Batman II',
// 			picture:
// 				'https://www.superherodb.com/pictures2/portraits/10/100/1496.jpg',
// 			universe: 'DC Comics',
// 		},
// 	];
// 	// Alterado: setamos o estado inicial de 'heroes' com a lista de heróis
// 	const [heroes, setHeroes] = React.useState(initialState);

// 	return (
// 		<>
// 			<Flex
// 				width={['100%', '600px']}
// 				mx={[Spaces.None, 'auto']}
// 				mt={[Spaces.THREE, Spaces.FIVE]}
// 				px={[Spaces.ONE, Spaces.NONE]}
// 				mb={[Spaces.TWO, Spaces.FOUR]}
// 			>
// 				<Box flexGrow="1">
// 					<SearchField placeholder="Digite um nome de herói ou heroína" />
// 				</Box>
// 				<Box ml={Spaces.TWO}>
// 					<Button>Buscar</Button>
// 				</Box>
// 			</Flex>

// 			<HeroesGrid
// 				px={[Spaces.ONE, Spaces.TWO]}
// 				pb={[Spaces.ONE, Spaces.TWO]}
// 			>
								
// 				{/* Alterado: Agora iteramos sobre o array 'heroes' usando map */}
// 				{heroes.map((hero) => (
// 					<HeroCard
// 						secretIdentity={hero.secretIdentity}
// 						name={hero.name}
// 						picture={hero.picture}
// 						universe={hero.universe}
// 					/>
// 				))}
// 			</HeroesGrid>
// 		</>
// 	);
// }


// // ----------- Adição de Busca de Heróis com Requisição Assíncrona à API -------------


// import React from 'react'; // Adicionado React para usar o hook useState e useEffect
// import axios from 'axios'; // Adicionado axios para fazer a requisição à API
// import { Flex, Box } from 'reflexbox';
// import styled from 'styled-components';
// import { Button } from '../common-components/Button/Button';
// import { SearchField } from '../common-components/SearchField/SearchField';
// import { HeroCard } from '../components/HeroCard/HeroCard';
// import { Spaces } from '../shared/DesignTokens';

// // Mantida a estrutura original do grid
// const HeroesGrid = styled(Box)`
// 	display: grid;
// 	grid-template-columns: 1fr;
// 	gap: ${Spaces.ONE_HALF};
// 	@media (min-width: 1024px) {
// 		grid-template-columns: 1fr 1fr 1fr 1fr;
// 		gap: ${Spaces.TWO};
// 	}
// `;

// // Adicionada função assíncrona para buscar heróis da API
// async function searchHero(heroName) {
// 	// Faz a requisição à API SuperHero e retorna os resultados ou uma lista vazia
// 	const { data } = await axios.get(`/search/${heroName}`, {
// 		baseURL: `${process.env.REACT_APP_SUPER_HERO_API_BASE_URL}/${process.env.REACT_APP_SUPER_HERO_API_KEY}`,
// 	});
// 	return data.results || [];
// }

// export function Search() {
// 	// Alterado: agora usamos um array vazio como estado inicial dos heróis
// 	const [heroes, setHeroes] = React.useState([]);

// 	// Adicionado: useEffect para realizar a requisição quando o componente carregar
// 	React.useEffect(() => {
// 		// Chama a função de busca com 'captain' como parâmetro e imprime o resultado no console
// 		searchHero('captain').then((heroes) => {
// 			setHeroes(heroes);
// 		});
// 	}, []); // Array de dependências vazio para que a busca ocorra apenas na montagem do componente

// 	return (
// 		<>
// 			<Flex
// 				width={['100%', '600px']}
// 				mx={[Spaces.None, 'auto']}
// 				mt={[Spaces.THREE, Spaces.FIVE]}
// 				px={[Spaces.ONE, Spaces.NONE]}
// 				mb={[Spaces.TWO, Spaces.FOUR]}
// 			>
// 				<Box flexGrow="1">
// 					<SearchField placeholder="Digite um nome de herói ou heroína" />
// 				</Box>
// 				<Box ml={Spaces.TWO}>
// 					<Button>Buscar</Button>
// 				</Box>
// 			</Flex>

// 			<HeroesGrid
// 				px={[Spaces.ONE, Spaces.TWO]}
// 				pb={[Spaces.ONE, Spaces.TWO]}
// 			>
// 				{/* Alterado: Agora iteramos sobre o array 'heroes' usando map */}
// 				{heroes.map((hero) => (
// 					<HeroCard
// 						secretIdentity={hero.secretIdentity}
// 						name={hero.name}
// 						picture={hero.picture}
// 						universe={hero.universe}
// 					/>
// 				))}
// 			</HeroesGrid>
// 		</>
// 	);
// }


// ----------- Alterando o Herocard ajustando-o a API -------------


// import React from 'react'; // Adicionado React para usar o hook useState e useEffect
// import axios from 'axios'; // Adicionado axios para fazer a requisição à API
// import { Flex, Box } from 'reflexbox';
// import styled from 'styled-components';
// import { Button } from '../common-components/Button/Button';
// import { SearchField } from '../common-components/SearchField/SearchField';
// import { HeroCard } from '../components/HeroCard/HeroCard';
// import { Spaces } from '../shared/DesignTokens';

// // Mantida a estrutura original do grid
// const HeroesGrid = styled(Box)`
// 	display: grid;
// 	grid-template-columns: 1fr;
// 	gap: ${Spaces.ONE_HALF};
// 	@media (min-width: 1024px) {
// 		grid-template-columns: 1fr 1fr 1fr 1fr;
// 		gap: ${Spaces.TWO};
// 	}
// `;

// // Adicionada função assíncrona para buscar heróis da API
// async function searchHero(heroName) {
// 	// Faz a requisição à API SuperHero e retorna os resultados ou uma lista vazia
// 	const { data } = await axios.get(`/search/${heroName}`, {
// 		baseURL: `${process.env.REACT_APP_SUPER_HERO_API_BASE_URL}/${process.env.REACT_APP_SUPER_HERO_API_KEY}`,
// 	});
// 	return data.results || [];
// }

// export function Search() {
// 	// Alterado: agora usamos um array vazio como estado inicial dos heróis
// 	const [heroes, setHeroes] = React.useState([]);

// 	// Adicionado: useEffect para realizar a requisição quando o componente carregar
// 	React.useEffect(() => {
// 		// Chama a função de busca com 'captain' como parâmetro e imprime o resultado no console
// 		searchHero('captain').then((heroes) => {
// 			setHeroes(heroes);
// 		});
// 	}, []); // Array de dependências vazio para que a busca ocorra apenas na montagem do componente

// 	return (
// 		<>
// 			<Flex
// 				width={['100%', '600px']}
// 				mx={[Spaces.None, 'auto']}
// 				mt={[Spaces.THREE, Spaces.FIVE]}
// 				px={[Spaces.ONE, Spaces.NONE]}
// 				mb={[Spaces.TWO, Spaces.FOUR]}
// 			>
// 				<Box flexGrow="1">
// 					<SearchField placeholder="Digite um nome de herói ou heroína" />
// 				</Box>
// 				<Box ml={Spaces.TWO}>
// 					<Button>Buscar</Button>
// 				</Box>
// 			</Flex>

// 			<HeroesGrid
// 				px={[Spaces.ONE, Spaces.TWO]}
// 				pb={[Spaces.ONE, Spaces.TWO]}
// 			>
// 				{/* Alterado: Agora iteramos sobre o array 'heroes' usando map */}
// 				{heroes.map((hero) => (

// 					// Herocard alterado para valores da API
// 					<HeroCard
// 						key={hero.id}
// 						id={hero.id}
// 						secretIdentity={hero.biography['full-name']}
// 						name={hero.name}
// 						picture={hero.image.url}
// 						universe={hero.biography.publisher}
// 					/>
// 				))}
// 			</HeroesGrid>
// 		</>
// 	);
// }


// --- Alterações: Implementando Estado para Controle de Busca e Funções de Eventos ---

// import React from 'react'; // Adicionado React para usar o hook useState e useEffect
// import axios from 'axios'; // Adicionado axios para fazer a requisição à API
// import { Flex, Box } from 'reflexbox';
// import styled from 'styled-components';
// import { Button } from '../common-components/Button/Button';
// import { SearchField } from '../common-components/SearchField/SearchField';
// import { HeroCard } from '../components/HeroCard/HeroCard';
// import { Spaces } from '../shared/DesignTokens';

// // Mantida a estrutura original do grid
// const HeroesGrid = styled(Box)`
// 	display: grid;
// 	grid-template-columns: 1fr;
// 	gap: ${Spaces.ONE_HALF};
// 	@media (min-width: 1024px) {
// 		grid-template-columns: 1fr 1fr 1fr 1fr;
// 		gap: ${Spaces.TWO};
// 	}
// `;

// // Adicionada função assíncrona para buscar heróis da API
// async function searchHero(heroName) {
// 	// Faz a requisição à API SuperHero e retorna os resultados ou uma lista vazia
// 	const { data } = await axios.get(`/search/${heroName}`, {
// 		baseURL: `${process.env.REACT_APP_SUPER_HERO_API_BASE_URL}/${process.env.REACT_APP_SUPER_HERO_API_KEY}`,
// 	});
// 	return data.results || [];
// }

// export function Search() {
// 	// Alterado: agora usamos um array vazio como estado inicial dos heróis
// 	const [heroes, setHeroes] = React.useState([]);
	
// 	// Novo estado 'search' para controlar o valor da busca e se pode realizar outra busca
// 	const [search, setSearch] = React.useState({
// 		value: null,
// 		doSearch: false,
// 	});

// 	// useEffect para realizar a requisição à API quando a busca for possível
// 	React.useEffect(() => {
// 		// Faz a busca apenas se doSearch for true e houver um valor de busca
// 		if (search.doSearch && search.value) {
// 			searchHero(search.value).then((heroes) => {
// 				setHeroes(heroes);
// 				// Reseta a flag 'doSearch' após a busca
// 				setSearch((prevValue) => ({ ...prevValue, doSearch: false }));
// 			});
// 		}
// 	}, [search]);

// 	// Função para atualizar o valor do campo de busca
// 	function handleUpdateSearchValue({ target: { value } }) {
// 		setSearch((prevValue) => ({ ...prevValue, value }));
// 	}

// 	// Função para realizar a busca
// 	function handleSearch() {
// 		setSearch((prevValue) => ({ ...prevValue, doSearch: true }));
// 	}

// 	return (
// 		<>
// 			<Flex
// 				width={['100%', '600px']}
// 				mx={[Spaces.None, 'auto']}
// 				mt={[Spaces.THREE, Spaces.FIVE]}
// 				px={[Spaces.ONE, Spaces.NONE]}
// 				mb={[Spaces.TWO, Spaces.FOUR]}
// 			>
// 				<Box flexGrow="1">
// 					{/* O campo de busca agora utiliza a função handleUpdateSearchValue */}
// 					<SearchField
// 						placeholder="Digite um nome de herói ou heroína"
// 						onChange={handleUpdateSearchValue} // Evento de mudança de valor
// 					/>
// 				</Box>
// 				<Box ml={Spaces.TWO}>
// 					{/* O botão agora utiliza a função handleSearch para disparar a busca */}
// 					<Button onClick={handleSearch}>Buscar</Button>
// 				</Box>
// 			</Flex>

// 			<HeroesGrid
// 				px={[Spaces.ONE, Spaces.TWO]}
// 				pb={[Spaces.ONE, Spaces.TWO]}
// 			>
// 				{/* Alterado: Agora iteramos sobre o array 'heroes' usando map */}
// 				{heroes.map((hero) => (
					
// 					// Herocard alterado para valores da API
// 					<HeroCard
// 						key={hero.id}
// 						id={hero.id}
// 						secretIdentity={hero.biography['full-name']}
// 						name={hero.name}
// 						picture={hero.image.url}
// 						universe={hero.biography.publisher}
// 					/>
// 				))}
// 			</HeroesGrid>
// 		</>
// 	);
// }


// --- Atualizações: Adicionando Novo Evento e useEffect para Controle da Busca ----

// import React from 'react'; // Adicionado React para usar o hook useState e useEffect
// import axios from 'axios'; // Adicionado axios para fazer a requisição à API
// import { Flex, Box } from 'reflexbox';
// import styled from 'styled-components';
// import { Button } from '../common-components/Button/Button';
// import { SearchField } from '../common-components/SearchField/SearchField';
// import { HeroCard } from '../components/HeroCard/HeroCard';
// import { Spaces } from '../shared/DesignTokens';

// // Mantida a estrutura original do grid
// const HeroesGrid = styled(Box)`
// 	display: grid;
// 	grid-template-columns: 1fr;
// 	gap: ${Spaces.ONE_HALF};
// 	@media (min-width: 1024px) {
// 		grid-template-columns: 1fr 1fr 1fr 1fr;
// 		gap: ${Spaces.TWO};
// 	}
// `;

// // Adicionada função assíncrona para buscar heróis da API
// async function searchHero(heroName) {
// 	// Faz a requisição à API SuperHero e retorna os resultados ou uma lista vazia
// 	const { data } = await axios.get(`/search/${heroName}`, {
// 		baseURL: `${process.env.REACT_APP_SUPER_HERO_API_BASE_URL}/${process.env.REACT_APP_SUPER_HERO_API_KEY}`,
// 	});
// 	return data.results || [];
// }

// export function Search() {
// 	// Alterado: agora usamos um array vazio como estado inicial dos heróis
// 	const [heroes, setHeroes] = React.useState([]);
	
// 	// Novo estado 'search' para controlar o valor da busca e se pode realizar outra busca
// 	const [search, setSearch] = React.useState({
// 		value: null,
// 		doSearch: false,
// 	});

// 	// useEffect para realizar a requisição à API apenas se o campo de busca for preenchido e a flag 'doSearch' estiver ativada
// 	React.useEffect(() => {
// 		if (search.doSearch) {
// 			searchHero(search.value).then((heroes) => {
// 				setHeroes(heroes);
// 				// Reseta a flag 'doSearch' após a busca
// 				setSearch((prevValue) => ({ ...prevValue, doSearch: false }));
// 			});
// 		}
// 	}, [search]);

// 	// Função para atualizar o valor do campo de busca
// 	function handleUpdateSearchValue({ target: { value } }) {
// 		setSearch((prevValue) => ({ ...prevValue, value }));
// 	}

// 	// Função para realizar a busca
// 	function handleSearch() {
// 		setSearch((prevValue) => ({ ...prevValue, doSearch: true }));
// 	}

// 	return (
// 		<>
// 			<Flex
// 				width={['100%', '600px']}
// 				mx={[Spaces.None, 'auto']}
// 				mt={[Spaces.THREE, Spaces.FIVE]}
// 				px={[Spaces.ONE, Spaces.NONE]}
// 				mb={[Spaces.TWO, Spaces.FOUR]}
// 			>
// 				<Box flexGrow="1">
// 					{/* O campo de busca agora utiliza o evento onKeyUp para atualizar o estado da busca */}
// 					<SearchField
// 						placeholder="Digite um nome de herói ou heroína"
// 						onKeyUp={handleUpdateSearchValue} // Evento para atualizar o valor da busca conforme o usuário digita
// 					/>
// 				</Box>
// 				<Box ml={Spaces.TWO}>
// 					{/* O botão agora utiliza a função handleSearch para disparar a busca quando clicado */}
// 					<Button onClick={handleSearch}>Buscar</Button>
// 				</Box>
// 			</Flex>

// 			<HeroesGrid
// 				px={[Spaces.ONE, Spaces.TWO]}
// 				pb={[Spaces.ONE, Spaces.TWO]}
// 			>
// 				{/* Alterado: Agora iteramos sobre o array 'heroes' usando map */}
// 				{heroes.map((hero) => (
					
// 					// Herocard alterado para valores da API
// 					<HeroCard
// 						key={hero.id}
// 						id={hero.id}
// 						secretIdentity={hero.biography['full-name']}
// 						name={hero.name}
// 						picture={hero.image.url}
// 						universe={hero.biography.publisher}
// 					/>
// 				))}
// 			</HeroesGrid>
// 		</>
// 	);
// }


// ---- Simplificação do Estado e Efeito de Busca com useAxios ------

// import React from 'react'; // Adicionado React para usar o hook useState e useEffect
// import axios from 'axios'; // Adicionado axios para fazer a requisição à API
// import { Flex, Box } from 'reflexbox';
// import styled from 'styled-components';
// import { Button } from '../common-components/Button/Button';
// import { SearchField } from '../common-components/SearchField/SearchField';
// import { HeroCard } from '../components/HeroCard/HeroCard';
// import { Spaces } from '../shared/DesignTokens';

// // Mantida a estrutura original do grid
// const HeroesGrid = styled(Box)`
// 	display: grid;
// 	grid-template-columns: 1fr;
// 	gap: ${Spaces.ONE_HALF};
// 	@media (min-width: 1024px) {
// 		grid-template-columns: 1fr 1fr 1fr 1fr;
// 		gap: ${Spaces.TWO};
// 	}
// `;

// // Adicionada função assíncrona para buscar heróis da API
// async function searchHero(heroName) {
// 	// Faz a requisição à API SuperHero e retorna os resultados ou uma lista vazia
// 	const { data } = await axios.get(`/search/${heroName}`, {
// 		baseURL: `${process.env.REACT_APP_SUPER_HERO_API_BASE_URL}/${process.env.REACT_APP_SUPER_HERO_API_KEY}`,
// 	});
// 	return data.results || [];
// }

// export function Search() {
// 	// Removido o estado `heroes` para simplificar e passar a usar `useAxios`
	
// 	// Novo estado 'search' para controlar o valor da busca e se pode realizar outra busca
// 	const [search, setSearch] = React.useState({
// 		value: null,
// 		doSearch: false,
// 	});

// 	// useEffect simplificado para realizar a requisição usando apenas a função `searchHero`
// 	React.useEffect(() => {
// 		searchHero(); // Agora chama apenas a função `searchHero` sem manipular `heroes`
// 	}, []); // UseEffect inicializado uma única vez

// 	// Função para atualizar o valor do campo de busca
// 	function handleUpdateSearchValue({ target: { value } }) {
// 		setSearch((prevValue) => ({ ...prevValue, value }));
// 	}

// 	// Função para realizar a busca
// 	function handleSearch() {
// 		setSearch((prevValue) => ({ ...prevValue, doSearch: true }));
// 	}

// 	return (
// 		<>
// 			<Flex
// 				width={['100%', '600px']}
// 				mx={[Spaces.None, 'auto']}
// 				mt={[Spaces.THREE, Spaces.FIVE]}
// 				px={[Spaces.ONE, Spaces.NONE]}
// 				mb={[Spaces.TWO, Spaces.FOUR]}
// 			>
// 				<Box flexGrow="1">
// 					{/* O campo de busca agora utiliza o evento onKeyUp para atualizar o estado da busca */}
// 					<SearchField
// 						placeholder="Digite um nome de herói ou heroína"
// 						onKeyUp={handleUpdateSearchValue} // Evento para atualizar o valor da busca conforme o usuário digita
// 					/>
// 				</Box>
// 				<Box ml={Spaces.TWO}>
// 					{/* O botão agora utiliza a função handleSearch para disparar a busca quando clicado */}
// 					<Button onClick={handleSearch}>Buscar</Button>
// 				</Box>
// 			</Flex>

// 			<HeroesGrid
// 				px={[Spaces.ONE, Spaces.TWO]}
// 				pb={[Spaces.ONE, Spaces.TWO]}
// 			>
// 				{/* Alterado: Agora iteramos sobre o array 'heroes' usando map */}
// 				{heroes.map((hero) => (
					
// 					// Herocard alterado para valores da API
// 					<HeroCard
// 						key={hero.id}
// 						id={hero.id}
// 						secretIdentity={hero.biography['full-name']}
// 						name={hero.name}
// 						picture={hero.image.url}
// 						universe={hero.biography.publisher}
// 					/>
// 				))}
// 			</HeroesGrid>
// 		</>
// 	);
// }


// ====  Uso do useAxios e Validação de Carregamento para Exibição de Heróis =========

// import React from 'react';
// import axios from 'axios';
// import useAxios from 'axios-hooks';
// import { Flex, Box } from 'reflexbox';
// import styled from 'styled-components';
// import { Button } from '../common-components/Button/Button';
// import { SearchField } from '../common-components/SearchField/SearchField';
// import { HeroCard } from '../components/HeroCard/HeroCard';
// import { Spaces } from '../shared/DesignTokens';
// import { Alert } from '../common-components/Alert/Alert';

// const HeroesGrid = styled(Box)`
// 	display: grid;
// 	grid-template-columns: 1fr;
// 	gap: ${Spaces.ONE_HALF};
// 	@media (min-width: 1024px) {
// 		grid-template-columns: 1fr 1fr 1fr 1fr;
// 		gap: ${Spaces.TWO};
// 	}
// `;

// export function Search() {
// 	const [search, setSearch] = React.useState({
// 		value: 'captain',
// 		doSearch: false,
// 	});
	
// 	// Utilizando o hook `useAxios` para requisição automática e controle de carregamento
// 	const [{ data: heroes, loading: isLoadingHeroes }, searchHero] = useAxios(
// 		`/search/${search.value}`,
// 		{ manual: true }
// 	);

// 	// Função para atualizar o valor do campo de busca
// 	function handleUpdateSearchValue({ target: { value } }) {
// 		setSearch((prevValue) => ({ ...prevValue, value }));
// 	}

// 	// Função para realizar a busca
// 	function handleSearch() {
// 		setSearch((prevValue) => ({ ...prevValue, doSearch: true }));
// 		searchHero();
// 	}

// 	return (
// 		<>
// 			<Flex
// 				width={['100%', '600px']}
// 				mx={[Spaces.None, 'auto']}
// 				mt={[Spaces.THREE, Spaces.FIVE]}
// 				px={[Spaces.ONE, Spaces.NONE]}
// 				mb={[Spaces.TWO, Spaces.FOUR]}
// 			>
// 				<Box flexGrow="1">
// 					<SearchField
// 						placeholder="Digite um nome de herói ou heroína"
// 						onKeyUp={handleUpdateSearchValue}
// 					/>
// 				</Box>
// 				<Box ml={Spaces.TWO}>
// 					<Button onClick={handleSearch}>Buscar</Button>
// 				</Box>
// 			</Flex>

// 			{/* Validação da exibição com carregamento e tratamento de erro */}
// 			{!isLoadingHeroes && heroes && heroes.error ? (
// 				<Box
// 					px={[Spaces.ONE, Spaces.TWO]}
// 					pb={[Spaces.ONE, Spaces.TWO]}
// 				>
// 					<Alert type="info">
// 						Nenhum registro de herói ou heroína foi encontrado.
// 					</Alert>
// 				</Box>
// 			) : (
// 				<HeroesGrid
// 					px={[Spaces.ONE, Spaces.TWO]}
// 					pb={[Spaces.ONE, Spaces.TWO]}
// 				>
// 					{/* Exibe os heróis caso não esteja carregando e os dados estejam disponíveis */}
// 					{!isLoadingHeroes && 
// 						heroes && 
// 						heroes.results.map((hero) => (
// 							<HeroCard
// 								key={hero.id}
// 								id={hero.id}
// 								secretIdentity={hero.biography['full-name']}
// 								name={hero.name}
// 								picture={hero.image.url}
// 								universe={hero.biography.publisher}
// 							/>
// 						))}
// 				</HeroesGrid>
// 			)}
// 		</>
// 	);
// }

// ============= Componente de Busca com Skeleton Loader para Carregamento de Cards ======

// import React from 'react';
// import axios from 'axios';
// import useAxios from 'axios-hooks';
// import { Flex, Box } from 'reflexbox';
// import styled from 'styled-components';
// import { Button } from '../common-components/Button/Button';
// import { SearchField } from '../common-components/SearchField/SearchField';
// import { HeroCard } from '../components/HeroCard/HeroCard';
// import { HeroCardLoader } from '../components/HeroCard/HeroCardLoader'; // Import do loader para os cards
// import { Spaces } from '../shared/DesignTokens';
// import { Alert } from '../common-components/Alert/Alert';

// const HeroesGrid = styled(Box)`
// 	display: grid;
// 	grid-template-columns: 1fr;
// 	gap: ${Spaces.ONE_HALF};
// 	@media (min-width: 1024px) {
// 		grid-template-columns: 1fr 1fr 1fr 1fr;
// 		gap: ${Spaces.TWO};
// 	}
// `;

// export function Search() {
// 	const [search, setSearch] = React.useState({
// 		value: 'captain',
// 		doSearch: false,
// 	});
	
// 	const [{ data: heroes, loading: isLoadingHeroes }, searchHero] = useAxios(
// 		`/search/${search.value}`,
// 		{ manual: true }
// 	);

// 	function handleUpdateSearchValue({ target: { value } }) {
// 		setSearch((prevValue) => ({ ...prevValue, value }));
// 	}

// 	function handleSearch() {
// 		setSearch((prevValue) => ({ ...prevValue, doSearch: true }));
// 		searchHero();
// 	}

// 	return (
// 		<>
// 			<Flex
// 				width={['100%', '600px']}
// 				mx={[Spaces.None, 'auto']}
// 				mt={[Spaces.THREE, Spaces.FIVE]}
// 				px={[Spaces.ONE, Spaces.NONE]}
// 				mb={[Spaces.TWO, Spaces.FOUR]}
// 			>
// 				<Box flexGrow="1">
// 					<SearchField
// 						placeholder="Digite um nome de herói ou heroína"
// 						onKeyUp={handleUpdateSearchValue}
// 					/>
// 				</Box>
// 				<Box ml={Spaces.TWO}>
// 					<Button onClick={handleSearch}>Buscar</Button>
// 				</Box>
// 			</Flex>

// 			{!isLoadingHeroes && heroes && heroes.error ? (
// 				<Box
// 					px={[Spaces.ONE, Spaces.TWO]}
// 					pb={[Spaces.ONE, Spaces.TWO]}
// 				>
// 					<Alert type="info">
// 						Nenhum registro de herói ou heroína foi encontrado.
// 					</Alert>
// 				</Box>
// 			) : (
// 				<HeroesGrid
// 					px={[Spaces.ONE, Spaces.TWO]}
// 					pb={[Spaces.ONE, Spaces.TWO]}
// 				>
// 					{/* Renderiza os loaders enquanto a requisição está carregando */}
// 					{isLoadingHeroes && (
// 						<>
// 							<HeroCardLoader />
// 							<HeroCardLoader />
// 							<HeroCardLoader />
// 							<HeroCardLoader />
// 						</>
// 					)}
					
// 					{/* Exibe os heróis após o carregamento, se os dados estiverem disponíveis */}
// 					{!isLoadingHeroes && 
// 						heroes && 
// 						heroes.results.map((hero) => (
// 							<HeroCard
// 								key={hero.id}
// 								id={hero.id}
// 								secretIdentity={hero.biography['full-name']}
// 								name={hero.name}
// 								picture={hero.image.url}
// 								universe={hero.biography.publisher}
// 							/>
// 						))}
// 				</HeroesGrid>
// 			)}
// 		</>
// 	);
// }


import React, { useEffect } from 'react'; // Certifique-se de importar useEffect
import axios from 'axios';
import useAxios from 'axios-hooks';
import { Flex, Box } from 'reflexbox';
import styled from 'styled-components';
import { Button } from '../common-components/Button/Button';
import { SearchField } from '../common-components/SearchField/SearchField';
import { HeroCard } from '../components/HeroCard/HeroCard';
import { HeroCardLoader } from '../components/HeroCard/HeroCardLoader'; // Import do loader para os cards
import { Spaces } from '../shared/DesignTokens';
import { Alert } from '../common-components/Alert/Alert';

const HeroesGrid = styled(Box)`
	display: grid;
	grid-template-columns: 1fr;
	gap: ${Spaces.ONE_HALF};
	@media (min-width: 1024px) {
		grid-template-columns: 1fr 1fr 1fr 1fr;
		gap: ${Spaces.TWO};
	}
`;

export function Search() {
	const [search, setSearch] = React.useState({
		value: 'captain',
		doSearch: false,
	});
	
	const [{ data: heroes, loading: isLoadingHeroes }, searchHero] = useAxios(
		`/search/${search.value}`,
		{ manual: true }
	);

	// Chamada automática ao montar o componente
	useEffect(() => {
		searchHero(); // Chama a API para buscar o herói "captain"
	}, []); // Chama apenas na montagem do componente

	function handleUpdateSearchValue({ target: { value } }) {
		setSearch((prevValue) => ({ ...prevValue, value }));
	}

	function handleSearch() {
		setSearch((prevValue) => ({ ...prevValue, doSearch: true }));
		searchHero();
	}

	return (
		<>
			<Flex
				width={['100%', '600px']}
				mx={[Spaces.None, 'auto']}
				mt={[Spaces.THREE, Spaces.FIVE]}
				px={[Spaces.ONE, Spaces.NONE]}
				mb={[Spaces.TWO, Spaces.FOUR]}
			>
				<Box flexGrow="1">
					<SearchField
						placeholder="Digite um nome de herói ou heroína"
						onKeyUp={handleUpdateSearchValue}
					/>
				</Box>
				<Box ml={Spaces.TWO}>
					<Button onClick={handleSearch}>Buscar</Button>
				</Box>
			</Flex>

			{isLoadingHeroes ? (
				<HeroesGrid
					px={[Spaces.ONE, Spaces.TWO]}
					pb={[Spaces.ONE, Spaces.TWO]}
				>
					{/* Renderiza os loaders enquanto a requisição está carregando */}
					<HeroCardLoader />
					<HeroCardLoader />
					<HeroCardLoader />
					<HeroCardLoader />
				</HeroesGrid>
			) : heroes && heroes.error ? (
				<Box
					px={[Spaces.ONE, Spaces.TWO]}
					pb={[Spaces.ONE, Spaces.TWO]}
				>
					<Alert type="info">
						Nenhum registro de herói ou heroína foi encontrado.
					</Alert>
				</Box>
			) : (
				<HeroesGrid
					px={[Spaces.ONE, Spaces.TWO]}
					pb={[Spaces.ONE, Spaces.TWO]}
				>
					{/* Exibe os heróis após o carregamento, se os dados estiverem disponíveis */}
					{heroes && heroes.results.map((hero) => (
						<HeroCard
							key={hero.id}
							id={hero.id}
							secretIdentity={hero.biography['full-name']}
							name={hero.name}
							picture={hero.image.url}
							universe={hero.biography.publisher}
						/>
					))}
				</HeroesGrid>
			)}
		</>
	);
}
