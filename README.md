# To-Do List (Lista de Tarefas)

## Uma lista de afazeres onde é possível registrar, visualizar, atualizar e deletar suas tarefas.

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com) e [Node.js](https://nodejs.org/en/). 
Além disto é bom ter um editor para trabalhar com o código, como o [VSCode](https://code.visualstudio.com/)

### 🎲 Rodando o Back End (servidor)

```bash
# Clone este repositório
$ git clone <https://github.com/eusouolukkas/todo-list-back>

# Acesse a pasta do projeto no terminal/cmd
$ cd tarefas-back

# Instale as dependências
$ yarn

# Execute a aplicação em modo de desenvolvimento
$ yarn start

# O servidor inciará na porta:3000 - acesse <http://localhost:3000>
```

### 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção desse projeto:

- [Node.js](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/)


## Estrutura do projeto

./src - fica toda a aplicação.
./src/app - fica a aplicação em si, com a Feature das Tasks juntamente com as Rotas, Models e Controllers.
/src/main - arquivos de configuração do express e servidor.
.env - credenciais para rodar o projeto, como a Porta e o URL da conta do MongoDB Atlas.