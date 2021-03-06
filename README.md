# Desenvolvimento de uma aplicação em Node.Js, autenticação de tokens protegidos com JWT. (Json Web Token)

projeto desenvolvido a fins de estudos, cliente legado
OBS: Foi desenvolvido um Front-end, Junção de ambos: https://github.com/Gab096/Fontend-twitterclone

Vídeo demonstrativo pegando juntamente com o front-end: https://www.linkedin.com/posts/gabrielnogueira0000_reactjs-nodejs-javascript-ugcPost-6899493490452238336-yfKG?utm_source=linkedin_share&utm_medium=member_desktop_web


## Recursos utilizados no desenvolvimento:

- Node.Js;
- Express.Js ~ v.4.0
- JWT;
- MongoDb;
- Mongoose ~4.x;
- JSON data (para retornar os dados);
- PostMan (testar a API criada);
- mLab;
- Visual Studio Code

## Testando a Aplicação no Postman:

Caso queira testar as API's criadas no projeto, primeiro baixe o [Postman](https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop).
Depois de realizar o download do Postman, basta agora realizar os passos abaixo para 
poder testar cada API criada!

## Executar Localmente

Caso você deseja executar o projeto na sua máquina local, basta seguir os passos abaixo:

## Começando..

Para começar, você deve simplesmente clonar o repositório do projeto na sua máquina e instalar as dependências.

### Pre-Requisitos

Antes de instalar as dependências no projeto, você precisa já ter instalado na sua máquina:

* **Node.Js**: Caso não tenha, basta realizar o download [Aqui](https://nodejs.org/en/)
* **MongoDb**: Caso também não tenha, basta realizar o download [Aqui](https://www.mongodb.com/download-center#community)

p.s.: o MongoDb caso você decida conectar a sua base de dados de maneira local. Caso não, basta usar 
a base de dados do MongoDb em Cloud:

* [Modulus](https://modulus.io/)
* [MLab](https://mlab.com/)

### Instalando as Dependências

Abre o cmd (caso esteja utilizando o Windows) e digite a path do seu projeto

```
cd "C:\Users\NomeDoComputador\Documents\..."
```

Depois, quando estiver na pasta do projeto, basta digitar no cmd a seguinte instrução:

```
npm install
```

Ao digitar a instrução acima, automaticamente ele irá baixar todas as dependências listadas no arquivo package.json:

* `node_modules` - que contêm os packages do npm que precisará para o projeto.

### Executando a Aplicação

Bom, agora na mesma tela do cmd, basta iniciar o server para o projeto ser executado localmente.

```
npm run start
```

Depois, você precisará abrir um outro terminal na sua máquina e iniciar o MongoDb. Basta digitar na tela do cmd o seguinte comando:

```
mongod
```

Caso o MongoDb esteja devidamente instalado em sua máquina, ele iniciará o serviço mostrando que a port 27017 foi iniciada.


Agora, abre a página da aplicação em `http://localhost:8000`. E pronto a aplicação será executada de maneira local na sua máquina.        


p.s.: no projeto, disponibilizei 2 maneiras de realizar a conexão de dados com o MongoDb através do Mongoose (contido no arquivo: 'config.js'):

* **De maneira local**: utilizando o MongoDb;
* **De maneira em cloud**: utilizando o mLab;

Fiquem à vontade em usar ou até mesmo testar ambas as conexões!! :)
