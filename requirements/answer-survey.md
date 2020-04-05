# Responder enquete

> ## Caso de sucesso:
1. ⛔️ Recebe uma requisição do tipo **PUT** na rota **/api/surveys/{survey_id}/results**
1. ⛔️ Valida se a requisição foi feita por um usuário
1. ⛔️ Valida se a resposta é um valor válido
1. ⛔️ Cria um resultado de enquete com os dados fornecidos
1. ⛔️ Retorna 200 com os dados do resultado da enquete

> ## Exceções:
1. ⛔️ Retorna erro 404 se a API não existir
1. ⛔️ Retorna erro 403 se não for um usuário
1. ⛔️ Retorna erro 500 se a resposta enviada pelo client for uma resposta inválida
1. ⛔️ Retorna erro 500 se der erro ao tentar criar o resultado da enquete