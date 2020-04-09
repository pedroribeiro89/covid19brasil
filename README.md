# Dashboard Covid-19

Dashboard sobre o COVID-19 foi desenvolvido para disciplina de Frameworks Front-end - React.
Exibe gráficos e informações para comparar a evolução da pandemia por país. O sistema exibe uma lista dos países disponibiliados pela API e o usuário pode selecionar os países e o status(Confirmados, Mortes ou Recuperados) que deseja visualizar no gráfico comparativo.

O sistema também possibilita acessar um dashboard por país, onde é exibido um gráfico comparativo entre os 3 status no país e o gráfico de mortalidade que permite visualizar a sobrecarga do sistema de saúde ou a subnotificação de casos por falta de testes.
A mortalidade é a porcentagem de mortes por casos confirmados.

Para executar é apenas instalar as dependências com **npm install** e **npm start**.

Link: https://dashboardcovid19.netlify.com/

# API
Foi utilizado a API externa [COVID 19 API]([https://covid19api.com/](https://covid19api.com/)) que usa os dados da [Johns Hopkins University Center for Systems Science and Engineering]([https://covid19api.com/](https://covid19api.com/)) 

# Requisitos do Trabalho
  
1. A solução deve ter um sistema de rotas próprio;
	> Além da home, é possível ver detalhes sobre um país específico acessando a rota /slug onde slug é o nome normalizado do país fornecido pela COVID-19 API

2. A solução deve possuir, no mínimo 7 componentes próprios;
	 - Home.tsx - Componente da home
	 - TitleHeader.tsx - Cabeçalho
	 - MainContent.tsx  - Conteúdo principal
	 - Info.tsx - Informações sobre o dashboard
	 - CountryList.tsx - Lista de países 
	 - SelectedCountryBtn.tsx - Botão de país selecionado
	 - StatusSelect.tsx - Seletor de status(Casos Confirmados, Mortes e Recuperados) 
	 - CountryLineChart.tsx  - Gráfico que compara o status selecionado entre os países selecionados
	 - CountryDetailList.tsx - Lista de links para detalhe dos países
	 
	- CountryDashboard.tsx - Dashboard do país
	- CountryDetailMortalityChart.tsx  - Gráfico de mortalidade
	- CountryDetailChart.tsx - Gráfico com os status do país
	
3. Necessário apresentar, em algum momento, compartilhamento de dados entre componentes
	> Diversos componentes usam props para compartilhar dados. Foi utilizado interfaces do Typescript para especificar como são esses props.

4. A solução deve conter um gerenciamento de estados com Redux, com no mínimo 4 actions
	- CreateCountryList - criar lista de países
	- selectCountry - selecionar um país da lista
	- removeCountry - remover um país da lista de selecionados
	- selectStatus - trocar o status a ser exibido pelo gráfico

5. A solução deverá consumir dados de alguma API externa. Exemplos: Reddit Marvel Google Maps. Não é permitido a API do TheMovieDatabase
	> Foi utilizado a COVID-19 API
	
6. A aplicação deverá ser construída utilizando o conceito de Hooks do React;
7. A solução deverá apresentar, em algum momento, um hook próprio desenvolvido por você
	- useCountryListChartData.ts - Para carregar os dados da lista de países selecionados
	- useCountryList - Para carregar a lista de países
​
# Extra

1. Implementar 4 componentes utilizando TypeScript.
	> Typescript foi utilizado no projeto inteiro
		- Interfaces para definir propriedades de componentes
		- Classes para definir CSS
		- Interfaces e Type para definir Actions do Redux 
		- Classes para definição de models dos dados coletados na API
		- Interface para definir state do Redux
		- Além da utilização de types definidos pelo próprio react e libs utilizadas.

# Libs
1. Redux - Para controle de estados
2. Recharts - Para gráficos
3. axios - Para requisições HTTP


##Aluno: Pedro Ribeiro Bastos Soares
