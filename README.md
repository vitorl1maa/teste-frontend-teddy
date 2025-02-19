# teste-frontend-teddy

## 📌 Sobre o Projeto
Este projeto é uma aplicação frontend desenvolvida em **Angular**.

## 🚀 Como Rodar o Projeto

### 🛠️ Pré-requisitos
Certifique-se de ter instalado:
- **Node.js** (versão recomendada: 18 ou superior)
- **Angular CLI** (instalar via `npm install -g @angular/cli`)
- **Yarn** ou **npm** para gerenciamento de pacotes

### 🔧 Passos para rodar o projeto

1. **Clone o repositório**
```sh
  git clone https://github.com/seu-usuario/teste-frontend-teddy.git
  cd teste-frontend-teddy
```

2. **Instale as dependências**
```sh
  npm install  # ou yarn install
```

3. **Inicie o servidor de desenvolvimento**
```sh
  npm start  # ou yarn start
```

O projeto estará disponível em `http://localhost:4200/`.

## 🛠️ Ferramentas Utilizadas

- **Angular 19**: Framework para desenvolvimento frontend
- **RxJS**: Programação reativa
- **ngx-mask**: Máscara para inputs
- **ngx-pagination**: Paginação de listas
- **ngx-cookie-service**: Manipulação de cookies
- **Lucide Angular**: Ícones
- **Karma & Jasmine**: Testes unitários

## 🔀 Proxy de API
O projeto usa um proxy para requisições de API. A configuração está no arquivo `proxy.conf.json`.
```json
{
  "rewrites": [
    {
      "source": "/users/:path*",
      "destination": "https://boasorte.teddybackoffice.com.br/users/:path*"
    }
  ]
}
```
## 📦 Build
Para gerar a versão de produção:
```sh
  npm run build  # ou yarn build
```
Os arquivos serão gerados na pasta `dist/`.

## 📄 Licença
Este projeto é privado e não possui uma licença pública definida.
