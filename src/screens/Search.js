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

import { Flex, Box } from 'reflexbox'; 
import styled from 'styled-components'; 
import { Button } from '../common-components/Button/Button'; 
import { SearchField } from '../common-components/SearchField/SearchField'; 
import { HeroCard } from '../components/HeroCard/HeroCard'; 
import { Spaces } from '../shared/DesignTokens'; 

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
					<SearchField placeholder="Digite um nome de herói ou heroína" />
				</Box>
				<Box ml={Spaces.TWO}>
					<Button>Buscar</Button>
				</Box>
			</Flex>

			<HeroesGrid
				px={[Spaces.ONE, Spaces.TWO]}
				pb={[Spaces.ONE, Spaces.TWO]}
			>
				{/* Alterado: agora cada HeroCard recebe props dinâmicas */}
				<HeroCard
					secretIdentity="Terry McGinnis"
					name="Batman"
					picture="https://www.superherodb.com/pictures2/portraits/10/100/10441.jpg"
					universe="DC Comics"
				/>
				<HeroCard
					secretIdentity="Bruce Wayne"
					name="Batman"
					picture="https://www.superherodb.com/pictures2/portraits/10/100/639.jpg"
					universe="DC Comics"
				/>
				<HeroCard
					secretIdentity="Dick Grayson"
					name="Batman II"
					picture="https://www.superherodb.com/pictures2/portraits/10/100/1496.jpg"
					universe="DC Comics"
				/>
			</HeroesGrid>
		</>
	);
}

