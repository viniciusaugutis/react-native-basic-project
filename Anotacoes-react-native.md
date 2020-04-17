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
