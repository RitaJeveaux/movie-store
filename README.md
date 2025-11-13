# Movie Store

Um projeto de catálogo de filmes desenvolvido com Angular para fins de estudo. A aplicação permite aos usuários visualizar uma lista de filmes, adicionar novos filmes ao catálogo e ver detalhes de cada um.

## ✨ Funcionalidades

-   Listagem de filmes em formato de cards.
-   Adição de novos filmes através de um formulário.
-   Design responsivo utilizando componentes do Angular Material.
-   Persistência de dados simulada através de um serviço local.

## 🛠️ Tecnologias Utilizadas

-   [Angular](https://angular.io/)
-   [TypeScript](https://www.typescriptlang.org/)
-   [Angular Material](https://material.angular.io/) para componentes de UI.
-   HTML5 & CSS3

## 🚀 Como Começar

Siga as instruções abaixo para configurar e executar o projeto em seu ambiente local.

### Pré-requisitos

-   [Node.js](https://nodejs.org/en/) (versão 18.x ou superior)
-   [Angular CLI](https://angular.io/cli) (versão 20.x ou superior)

### Instalação

1.  Clone o repositório para sua máquina local:
    ```bash
    git clone <URL_DO_SEU_REPOSITORIO>
    ```

2.  Navegue até o diretório raiz do projeto:
    ```bash
    cd movie-store
    ```

3.  Instale as dependências do projeto:
    ```bash
    npm install
    ```

## 🏃‍♀️ Executando a Aplicação

1.  Para iniciar o servidor de desenvolvimento, execute o comando:
    ```bash
    npm start
    ```
    *Este comando utiliza `ng serve` por baixo dos panos.*

2.  Abra seu navegador e acesse `http://localhost:4200/`. A aplicação será recarregada automaticamente sempre que você salvar uma alteração nos arquivos.

## 📦 Build

Para criar uma versão de produção do projeto, execute o comando:

```bash
npm run build
```

Os arquivos compilados serão gerados no diretório `dist/movie-store/`.

## ✅ Testes

Para executar os testes unitários via [Karma](https://karma-runner.github.io), utilize o comando:

```bash
npm test
```

admin@admin.com
admin1234

{
  "username": "admin",
  "email": "admin@admin.com",
  "password": "admin1234"
}
{
  "username": "test",
  "email": "test@example.com",
  "password": "test1234"
}

_______________________

# Projeto Final - Angular II



Implementar um projeto de Ecommerce (pode ser do tema que quiser, filmes, livros, produtos em geral) que contenha:



* Catálogo com os itens, com cada um representado como um card contendo: imagem, título, preço e descrição
* Para cada item do catálogo, devem haver três botões: adicionar ao carrinho, edição e remoção (usem ícones)
* Os botões de edição e remoção só aparecerão para alguém com papel de admin
* Cada item deve possuir: título/nome, descrição, data de criação, preço, quantidade no estoque, imagem ilustrativa
* Deve haver uma página de login e uma página de cadastro, caso a pessoa não possua conta
* Deve haver um header com navegação e um botão para fazer o login ou logout (o botão de login só aparece quando o usuário esta deslogado, e o de logout no caso contrário)
* Um usuário é definido por: nome, email, senha e papel no sistema (admin ou usuário comum)
* Só o admin pode acessar QUALQUER página de cadastro, independente se é cadastro de item ou de usuário
* Um usuário deslogado só poderá ver/acessar a página de catálogo
* Na página de cadastro de um item, deve ser feito o upload da imagem (se quiser se desafiar, inclua o preview aqui)
* A página de edição de um item deve ser igual à de cadastro, porém trazendo os valores atuais e um preview da imagem ilustrativa
* Ao clicar no botão de remoção de um item, deve ser aberto um pop-up perguntando se o usuário tem certeza desta ação
* Ao clicar no botão de adicionar ao carrinho, o item deve ser dinamicamente adicionado ao carrinho
* Deve haver internacionalização através da escolha da língua PT ou EN através de um botão no header
                                                                                                                                                                                                                        
curl -X POST http://localhost:3000/users -H "Content-Type: application/json" -d "{"email\": \"email@exemplo.com\", \"password\": \"senha_forte\"}"

**EXTRA**

* Ao clicar no botão, dentro do carrinho, de concluir compra, o usuário deve ser redirecionado para uma página de gateway de pagamento contendo as etapas tradicionais de dados de pagamento (não serão salvos no banco, somente usados para realizar a compra) 
* Fazer a própria API ao invés de utilizar a API do professor



OBS.: A API que deverá ser utilizada, com todas as rotas necessárias, será disponibilizada o quanto antes



OBS 2.: É obrigatório uso de lazy loading e deferrable views no projeto

a proteção de rota tb vai valer para edit e delete
como fazer para utilizar a api sem tirar da api a proteção de rota da api