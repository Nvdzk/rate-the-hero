// import useAxios from 'axios-hooks';
// export function useHero(heroId) {
// 	const [{ data: hero, loading: isLoadingHero }] = useAxios(`/${heroId}`);
// 	return {
// 		hero,
// 		isLoadingHero,
// 	};
// }

// ====== Implementação de Funções para Armazenamento e Leitura de Avaliação no localStorage

// import useAxios from 'axios-hooks';

// export function useHero(heroId) {
// 	const [{ data: hero, loading: isLoadingHero }] = useAxios(`/${heroId}`);
	
// 	// Função para armazenar a avaliação do herói no localStorage
// 	function setHeroAvaliation(hero) { 
// 		localStorage.setItem(hero.id, JSON.stringify(hero));
// 	}

// 	// Função para recuperar a avaliação do herói no localStorage
// 	function getHeroAvaliation(heroId) {
// 		return JSON.parse(localStorage.getItem(heroId));
// 	}

// 	return {
// 		hero,
// 		isLoadingHero,
// 		setHeroAvaliation, // Retornando a função de armazenamento
// 		getHeroAvaliation, // Retornando a função de leitura
// 	};
// }


// ======= Ajuste do Hook useHero para Condicional de Chamada de API


import useAxios from 'axios-hooks';

export function useHero(heroId) {
	const [{ data: hero, loading: isLoadingHero }] = useAxios(`/${heroId}`, {
		manual: heroId == null, // Condicional para tornar a chamada manual se heroId não estiver presente
	});

	function setHeroAvaliation(hero) {
		localStorage.setItem(hero.id, JSON.stringify(hero));
	}

	function getHeroAvaliation(heroId) {
		return JSON.parse(localStorage.getItem(heroId));
	}

	return {
		hero,
		isLoadingHero,
		setHeroAvaliation,
		getHeroAvaliation,
	};
}
