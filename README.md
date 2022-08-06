# TodoAPI

## Requisitos

- [] Deve ser possível cadastrar o nome e username na seguinte estrutura:

    ```js
        { 
         id: 'uuid', // precisa ser um uuid
         name: 'Danilo Vieira', 
         username: 'danilo', 
         todos: []
        }
    ```

- [] Deve ser possível listar os TODOS de cada usuário (username passado no Headers)
- [] Deve ser possível criar um TODO, com as seguintes especificações:

    ```js
    {
        id: 'uuid', // precisa ser um uuid
        title: 'Nome da tarefa',
        done: false,
        deadline: '2021-02-27T00:00:00.000Z',
        created_at: '2021-02-22T00:00:00.000Z'
    }
    ```

- [] Deve ser possível alterar o nome de um usuário
- [] Deve ser possível atualizar um title de um TODO
- [] Deve ser possível mudar o status do done
- [] Deve ser possível excluir um TODO
- [] Deve ser possível excluir um usuário

***

## Regras de negócio

- [] Não deve ser possível cadastrar um usuário com um username já existente,
- [] Não deve ser possível excluir um usuário inexistente
