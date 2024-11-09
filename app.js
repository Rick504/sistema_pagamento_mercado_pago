import { Payment, MercadoPagoConfig } from 'mercadopago';
import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

const app = express();
const PORT = 3000;
const client = new MercadoPagoConfig({
    accessToken: process.env.ACCESS_TOKEN,
    options: {
        timeout: null
    }
});
const payment = new Payment(client);

dotenv.config();
app.use(bodyParser.json());

app.post('/create_payment', (req, res) => {
    const { transaction_amount, description, paymentMethodId, email } = req.body;

    payment.create({
        body: {
            transaction_amount,
            description,
            payment_method_id: paymentMethodId,
            payer: {
                email,
            },
        },
    })
    .then((result) => {
        res.status(200).json(result);
    })
    .catch((error) => {
        console.error('Erro no pagamento:', error);
        res.status(500).send('Erro ao processar o pagamento.');
    });
});


app.get('/success', (req, res) => res.send('Pagamento aprovado!'));
app.get('/failure', (req, res) => res.send('Pagamento falhou.'));
app.get('/pending', (req, res) => res.send('Pagamento pendente.'));


app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
