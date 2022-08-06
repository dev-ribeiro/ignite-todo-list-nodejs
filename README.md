# TodoAPI

## Requisitos

- [x] Deve ser possível cadastrar o nome e username na seguinte estrutura:

    ```js
        { 
         id: 'uuid', // precisa ser um uuid
         name: 'Danilo Vieira', 
         username: 'danilo', 
         todos: []
        }
    ```

- [x] Deve ser possível listar os TODOS de cada usuário (username passado no Headers)
- [x] Deve ser possível criar um TODO, com as seguintes especificações:

    ```js
    {
        id: 'uuid', // precisa ser um uuid
        title: 'Nome da tarefa',
        done: false,
        deadline: '2021-02-27T00:00:00.000Z',
        created_at: '2021-02-22T00:00:00.000Z'
    }
    ```

- [x] Deve ser possível atualizar um title e deadline de um TODO
- [x] Deve ser possível mudar o status do done
- [x] Deve ser possível excluir um TODO

***

## Regras de negócio

- [x] Não deve ser possível cadastrar um usuário com um username já existente
- [x] Não deve ser possível atualizar um TODO inexistente
- [x] Não deve ser possível deletar um TODO inexistente
