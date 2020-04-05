# Login

> ## Caso de sucesso:
1. ✅ Recebe uma requisição do tipo **POST** na rota **/api/login**
1. ✅ Valida dados obrigatórios **email** e **password**
1. ✅ Valida que o campo **email** é um e-mail válido
1. ✅ Busca o usuário com o email e senha fornecidos
1. ✅ Gera um token de acesso a partir do ID do usuário
1. ✅ Atualiza os dados do usuário com o token de acesso gerado
1. ✅ Retorna 200 com o token de acesso

> ## Exceções:
1. ✅ Retorna erro 404 se a API não existir
1. ✅ Retorna erro 400 se **email** ou **password** não forem fornecidos pelo client
1. ✅ Retorna erro 400 se o campo **email** for um e-mail inválido
1. ✅ Retorna erro 401 se não encontrar um usuário com os dados fornecidos
1. ✅ Retorna erro 500 se der erro ao tentar gerar o token de acesso
1. ✅ Retorna erro 500 se der erro ao tentar atualizar o usuário com o token de acesso gerado