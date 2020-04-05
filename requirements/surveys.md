# Listar enquetes

> ## Caso de sucesso:
1. ⛔️ Recebe uma requisição do tipo **GET** na rota **/api/surveys**
1. ⛔️ Valida se a requisição foi feita por um usuário
1. ⛔️ Retorna 200 com os dados das enquetes

> ## Exceções:
1. ⛔️ Retorna erro 404 se a API não existir
1. ⛔️ Retorna erro 403 se não for um usuário
1. ⛔️ Retorna erro 500 se der erro ao tentar listar as enquetes