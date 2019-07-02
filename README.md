## Solução
Construção de um backend api restful para ser consumido por um frontend desenvolvido
em react em arquitetura SPA(Single Page Application)
- Autenticação: Desenvolvida com JWT, um token armazenado no frontend e enviado para requisões para conceder autorização ao recuso chamada.
- Para melhor teste, existe um usuario que será criado com os seed
```
{
            'name' => 'Administrador',
            'email' => 'admin@receitas.com',
            'password' => Hash::make('admin123'),
}
``` 
## Rotas de Autenticação

|URL|METODO|DESCRIÃÇÃO
 --- | --- | --- 
|`/api/login` | POST | Retorna o token para ser usado em outras solicitações, quando autenticado com sucesso..
|`/api/refresh` | POST | Atualiza o token, quando o mesmo está expirado.
|`/api/logout` | POST | Invalida o token de autenticação, para que não seja mais usado.

- Configurar um valor para  'JWT_SECRET' no Arquivo .ENV que é a chave principal para assinatura dos tokens gerados.
## Instalação
### Configuração do servidor

1. Clone ou baixe o repositório git clone https://github.com/sudeduardo/receitas.com.git
2. Entre dentro de receitas.com -> "cd receitas.com"  
3. Execute "composer install" </li>
4. Configure o ".ENV" dentro da pasta raiz com dados de acesso ao banco:

5. ```
    DB_CONNECTION=mysql
    DB_HOST=
    DB_PORT=3306
    DB_DATABASE=
    DB_USERNAME=
    DB_PASSWORD=
  ```


6. Depois de instalado as dependência do projeto será necessário rodar os arquivos de migrations e seeder para criação e preenchimento de dados gerados automaticamente no banco de dados,
   para isso na pasta do projeto execute
   "php artisan migration  --seed"
 
7. Se estiver tudo certo, iniciaremos nosso servidor embutido do laravel, caso acorra algum erro, verifique o arquivo .ENV se está certo os dados de acesso ao banco.
   Execute "php artisan serve"

8. Sua api deverá estar rodando em http://127.0.0.1:8000

## Rotas da API

|URL|METODO|DESCRIÇÃO
 --- | --- | --- 
|`api/recipe` | GET | Retorna um json com todas as receitas cadastradas.
|`api/recipe/:id` | GET | Retorna um json com a receita que tenha o id correspondente
|`api/recipe` | POST | Se dados envidas conforme os validadores requer, então cadastra uma novo receita.
|`api/recipe/:id` | PUT | Atualiza o dados da receita o qual pertence o id passado.
|`api/recipe/:id` | DELETE | Se existir uma receita com id correspondente deleta.

### Frontend
1.  Com o gerenciador de dependências NPM instalado rode o seguinte comando
Para instalar as seguintes dependências listadas no packendg.json 
"npm install"
2. 'A várias possibilidades de transpilar os códigos JS e CSS como "npm run watch" ou "npm run production" para gerar os assets e acessar a interface web'

