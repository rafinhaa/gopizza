<h4 align="center">
    <h1 align="center">
      GoPizza
    </h1>
</h4>

<h4 align="center">
    <p align="center">
      <a href="#-about">About</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <a href="#-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <a href="#-how-to-run-the-project">Run</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <a href="#-info">Info</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <a href="#-changelog">Changelog</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <a href="#-license">License</a>
  </p>
</h4>

## 🔖 About

GoPizza é um aplicativo mobile que utiliza a tecnologia do firebase para armazenar os dados.

É possível cadastrar, alterar e excluir pizzas, gerenciar pedidos e mesas.
Conta com um sistema dividido entre administrador e garçom.

As tecnologias utilizadas são:
Firebase auth;
Firebase storage;

## 🚀 Technologies

- [ReactNative](https://reactnative.dev/)
- [Expo](https://expo.io/)

## 🏁 How to run the project

#### Clone the repository

```bash
git clone https://github.com/rafinhaa/gopizza.git
cd gopizza
```

#### Install dependencies

```bash
yarn install
```

#### Build in iOS

```bash
cd ios && pod install && cd..
yarn run ios
```

#### Build in Android

```bash
yarn run android
```

## ℹ️ Info

É preciso ter uma conta no firebase e criar um projeto, criar o app para iOS e Android.

Baixar o arquivo de configuração do app do Android e mover para `android/app/google-services.json`;

Baixar o arquivo de configuração do app do iOS e mover para `ios/GoogleService-Info.plist`;

## 📝 License

[MIT](LICENSE)

**Free Software, Hell Yeah!**
