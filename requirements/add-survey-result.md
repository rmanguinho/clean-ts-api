# Responder enquete

> ## Caso de sucesso

1. ⛔️ Recebe uma requisição do tipo **POST** na rota **/api/surveys/{survey_id}/results**
2. ⛔️ Valida se a requisição foi feita por um **usuário**
3. ⛔️ Valida o parâmetro **survey_id**
4. ⛔️ Valida se o campo **answer** é uma resposta válida
5. ⛔️ **Cria** um resultado de enquete com os dados fornecidos
6. ⛔️ Retorna **200** com os dados do resultado da enquete

> ## Exceções

1. ⛔️ Retorna erro **404** se a API não existir
2. ⛔️ Retorna erro **403** se não for um usuário
3. ⛔️ Retorna erro **403** se o survey_id passado na URL for inválido
4. ⛔️ Retorna erro **403** se a resposta enviada pelo client for uma resposta inválida
5. ⛔️ Retorna erro **500** se der erro ao tentar criar o resultado da enquete