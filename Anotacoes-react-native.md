## Instalação

yarn global add react-native-cli

react-native init startReactNative

estrutura do projeto

**tests**: onde ficam os testes unitários
.vscode: criado pelo editor
android: onde fica o código nativo do android
ios: onde fica o código nativo do ios
App.js: arquivo de entrada da aplicação react native

Startar emuladores

react-native run-ios
react-native run-android

Esses precisam apenas nas primeiras vezes ou quando linkamos alguma dependência nativa nova.
Ex: react-native link lib

Depois executa apenas o packager:
react-native start

react-native start --reset-cache: inicia o packager limpando cache e possíveis erros

## Componentização

Separar nosso código em vários componentes

## Stateful e Stateless componentes

Statefull: possui estado
Stateless: não possui estado e não usa o {Component} do React

## Ciclo de vida do componente

componentDidMount: chamada ao iniciar o componente. Tenho acesso as propriedades e estado do componente
getDerivedStateFromProps: executado tanto antes do componentDidMount ou qualquer alteração no componente.
shouldComponentUpdate: Chamado cada vez antes do render ser executado. É ele que define se componente deve ser atualizado ou não. Ele retorna true ou false
componentDidUpdate: Executado depois que o component ja executou o render
componentWillUnmount: executado antes do componente ser destruído

Nesses ciclo de vida não é possível setar o estado de uma propriedade, com setState

## Flexbox

Por padrão todos componentes no react tem um display flex. Ele transforma todo os componentes para um tamanho flexível e se adapta ao resto do componente.
flex: 1 - ele ocupa todo o espaço possivel de tela

flexDirection: por padrão ele é column

align-items por padrão é flex-start

No react native não temos herança de estilos. Pai não passa para o filho.
Salvo exceção quando estiver um text dentro do outro. Ai o filho herda a cor e o textSize
