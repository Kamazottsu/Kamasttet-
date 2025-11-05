
# Kamasttet Academy — MVP (Login, Plans, Payments, Scheduling)

Este projeto é um MVP pronto para deploy no Vercel. Ele inclui páginas básicas para:
- Login/Cadastro (mock local) com placeholders para OAuth (Google, Discord, GitHub, Riot)
- Planos & Pagamentos — botão que chama API de criação de sessão do Stripe
- Agendamento de aulas (grava em bookings.json para demonstração)
- Perfil de usuário simples (usa localStorage no navegador)

## Como usar (rápido)
1. Descompacte o ZIP e envie os arquivos para um repositório GitHub.
2. Importe o repositório no Vercel e faça Deploy (o projeto tem vercel.json configurado).

## Configurar Stripe (opcional, para pagamentos reais)
Crie uma conta Stripe e configure um Product + Prices. No Vercel, defina as variáveis de ambiente:
- STRIPE_SECRET = sua chave secreta (sk_live...)
- SUCCESS_URL = https://seusite.com/success
- CANCEL_URL = https://seusite.com/cancel

No front-end da página /plans, substitua os priceId mock por IDs reais do Stripe (ex: price_1N...)

## Configurar OAuth (Google/Discord/GitHub/Riot)
Este template usa botões simples. Para integrar NextAuth e provedores OAuth:
- Instale e configure NEXTAUTH_URL e NEXTAUTH_SECRET no Vercel
- Siga a documentação do NextAuth para adicionar providers: GoogleProvider, DiscordProvider, GitHubProvider e um provider custom para Riot
- Depois, substitua os links de login por `signIn('provider')` do NextAuth.

## Observações importantes
- O endpoint de agendamento grava em `bookings.json` no filesystem. Em ambiente serverless (Vercel) isso é efêmero — idealmente conecte a um DB (Postgres, Supabase, FaunaDB).
- Este projeto é um ponto de partida. Recomenda-se conectar um banco de dados e um sistema de autenticação real antes de produção.

Se quiser que eu já gere a versão com NextAuth configurada e integração Stripe real (com código pronto para rodar, apenas preenchendo chaves), eu posso fazer na próxima etapa.
