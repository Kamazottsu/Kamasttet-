
import Stripe from 'stripe';
const stripeSecret = process.env.STRIPE_SECRET || null;
export default async function handler(req,res){
  if(req.method !== 'POST') return res.status(405).end();
  const {priceId} = req.body;
  if(!stripeSecret){
    // Mock response for testing without keys
    return res.json({url: 'https://example.com/checkout-mock?price='+priceId});
  }
  try{
    const stripe = new Stripe(stripeSecret);
    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      payment_method_types: ['card'],
      line_items: [{price: priceId, quantity:1}],
      success_url: process.env.SUCCESS_URL || 'https://yourdomain.com/success',
      cancel_url: process.env.CANCEL_URL || 'https://yourdomain.com/cancel'
    });
    res.json({url: session.url});
  }catch(e){
    res.status(500).json({error: e.message});
  }
}
