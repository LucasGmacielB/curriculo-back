# curriculo-back

API de currículos com Express e PostgreSQL.

## Publicação no Vercel

1. Nas configurações do projeto, defina **Root Directory** como `curriculo-api`.
2. O arquivo `curriculo-api/vercel.json` seleciona o framework **Express**. O Vercel reconhece `src/app.js`, que exporta a aplicação, como ponto de entrada.
3. Cadastre `DATABASE_URL` nas variáveis de ambiente do Vercel para o ambiente publicado.
4. Publique a versão com essas alterações em um novo deploy.

As URLs usam os mesmos caminhos do servidor local:

- `GET /`: mensagem de funcionamento da API.
- `GET /pessoas`
- `GET /formacoes`
- `GET /experiencias`
- `GET /projetos`
- `GET /habilidades`
- `GET /contatos`
- `GET /pessoas/:id/curriculo`
- `GET /pessoas/:id/projetos`

Exemplo: `https://SEU-PROJETO.vercel.app/pessoas`. As rotas não têm prefixo `/api`.

A inicialização local em `src/index.js` autentica e sincroniza o banco. O ponto de entrada do Vercel exporta a aplicação sem executar essa inicialização; as tabelas precisam existir no banco usado em produção.

Documentação: [Express no Vercel](https://vercel.com/docs/frameworks/backend/express).
