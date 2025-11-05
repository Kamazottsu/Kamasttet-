
import Stripe from 'stripe';
import { buffer } from 'micro';
export const config = { api: { bodyParser: false } };
export default async function handler(req,res){
  if(req.method !== 'POST') return res.status(405).end();
  const sig = req.headers['stripe-signature'];
  const secret = process.env.STRIPE_WEBHOOK_SECRET;
  const stripe = new Stripe(process.env.STRIPE_SECRET || '');
  const buf = await buffer(req);
  let event;
  try{
    if(secret){
      event = stripe.webhooks.constructEvent(buf.toString(), sig, secret);
    } else {
      event = JSON.parse(buf.toString());
    }
  } catch(e){
    console.error('Webhook error', e.message);
    return res.status(400).send(`Webhook error: ${e.message}`);
  }
  if(event.type === 'checkout.session.completed'){
    const session = event.data.object;
    console.log('Pagamento concluído', session);
    // TODO: salvar no DB ou ativar assinatura
  }
  res.json({ received: true });
}
