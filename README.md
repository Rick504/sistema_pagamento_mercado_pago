# Projeto de Integração com Mercado Pago

Este projeto é uma API Node.js que integra o sistema de pagamento Mercado Pago usando o `mercadopago` SDK. A API fornece um endpoint para criar pagamentos utilizando métodos como PIX.

## Tecnologias Utilizadas

- Node.js
- Express
- Mercado Pago SDK
- dotenv

## Configuração do Projeto

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/Rick504/sistema_pagamento_mercado_pago.git
   cd sistema_pagamento_mercado_pago
   ```

2. **Instale as dependências**

```bash
npm install
```

3. **Configuração do Token de Acesso**

ACCESS_TOKEN usado no backend e PUBLIC_KEY usado no FrontEnd, nesse caso como não estamos trabalhando com o Front vamos usar somente o ACCESS_TOKEN, mas deixar o
PUBLIC_KEY para caso possamos integrar o FrontEnd.

```bash
ACCESS_TOKEN=
PUBLIC_KEY=
```

2. **Inicie o servidor**

```bash
node app
```

## Criar Pagamento

URL: /create_payment
Método: POST
Descrição: Cria um pagamento no Mercado Pago com os dados fornecidos.
Exemplo de Requisição
Para criar um pagamento via PIX, envie uma requisição POST para /create_payment com o corpo em JSON conforme o exemplo abaixo:

```bash
{
    "transaction_amount": 1,
    "description": "Pagamento teste",
    "paymentMethodId": "pix",
    "email": "test@gmail.com"
}
```

Na resposta da requisição vamos ter um link para obter o pix gerado na propriedade ticket_url.

Parâmetros

- transaction_amount (float): O valor da transação. Exemplo: 1.0 (para R$ 1,00).
- description (string): A descrição da transação. Exemplo: "Pagamento teste".
- paymentMethodId (string): O método de pagamento a ser utilizado. Para PIX, use "pix".
- email (string): O e-mail do pagador.
- identificationType (string): O tipo de identificação do pagador (ex.: "CPF" para brasileiros).
- number (string): O número do documento de identificação do pagador.

Respostas

- 200 OK: Retorna os dados da transação criada.
- 500 Erro Interno: Ocorre se houver um problema com a criação do pagamento. A mensagem de erro será exibida no console do servidor para diagnóstico.

Redirecionamento de Status do Pagamento

- Sucesso: /success – Página de confirmação de pagamento aprovado.
- Falha: /failure – Página de notificação de falha no pagamento.
- Pendente: /pending – Página de notificação de pagamento pendente.

Documentação Mercado Pago: [https://www.mercadopago.com.br/developers/pt/reference]
Videos de exemplos: [https://www.youtube.com/watch?v=Breblubtu-I&ab_channel=DanielSoares]
