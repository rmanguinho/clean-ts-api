# Cadastro

> ## Caso de sucesso:
1. ✅ Recebe uma requisição do tipo **POST** na rota **/api/signup**
1. ✅ Valida dados obrigatórios **name**, **email**, **password** e **passwordConfirmation**
1. ✅ Valida que **password** e **passwordConfirmation** são iguais
1. ✅ Valida que o campo **email** é um e-mail válido
1. ⛔️ Valida se já existe um usuário com o email fornecido
1. ✅ Gera uma senha criptografada (essa senha não pode ser descriptografada)
1. ✅ Cria uma conta para o usuário com os dados informados, substituindo a senha pela senha criptorafada
1. ⛔️ Gera um token de acesso a partir do ID do usuário
1. ⛔️ Atualiza os dados do usuário com o token de acesso gerado
1. ⛔️ Retorna 200 com o token de acesso

> ## Exceções:
1. ✅ Retorna erro 404 se a API não existir
1. ✅ Retorna erro 400 se **name**, **email**, **password** ou **passwordConfirmation** não forem fornecidos pelo client
1. ✅ Retorna erro 400 se **password** e **passwordConfirmation** não forem iguais
1. ✅ Retorna erro 400 se o campo **email** for um e-mail inválido
1. ⛔️ Retorna erro 403 se o email fornecido já estiver em uso
1. ✅ Retorna erro 500 se der erro ao tentar gerar uma senha criptografada
1. ✅ Retorna erro 500 se der erro ao tentar criar a conta do usuário
1. ⛔️ Retorna erro 500 se der erro ao tentar gerar o token de acesso
1. ⛔️ Retorna erro 500 se der erro ao tentar atualizar o usuário com o token de acesso gerado