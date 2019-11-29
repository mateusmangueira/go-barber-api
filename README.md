## Rodando pela primeira vez
Para rodar a aplicação, você irá precisar [Git](https://git-scm.com), [Node.js v10.16][nodejs] + [Yarn v1.13][yarn] instalados no seu computador. No terminal rode:

```bash
# Clone este repositório
$ git clone https://github.com/mateusmangueira/go-barber-api

# Entre na pasta criada
$ cd go-barber-api

# Instale as dependências
$ yarn install

# Crie um container postgres no Docker
$ docker run --name database -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres:11

# Crie o banco de dados chamado goBarber utilizando o Postbird.

# Rode as Migrations
$ yarn sequelize db:migrate


# Renomeie o arquivo .env.example para .env e preencha as variáveis ambiente

# Roder o servidor
$ yarn dev
