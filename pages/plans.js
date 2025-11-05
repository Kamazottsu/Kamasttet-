
import '../styles/globals.css';
export default function Plans(){
  async function checkout(priceId){
    const res = await fetch('/api/stripe/create-checkout-session', {
      method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({priceId})
    });
    const data = await res.json();
    if(data.url) window.location = data.url;
    else alert('Erro: ' + (data.error || 'unknown'));
  }
  return (
    <div className='container'>
      <h2>Planos & Pagamentos</h2>
      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:12,marginTop:12}}>
        <div className='card'>
          <h3>Mensal — R$49</h3>
          <p>Assinatura mensal</p>
          <button onClick={()=>checkout('price_monthly_mock')} className='button'>Assinar Mensal</button>
        </div>
        <div className='card'>
          <h3>Anual — R$499</h3>
          <p>Assinatura anual</p>
          <button onClick={()=>checkout('price_annual_mock')} className='button'>Assinar Anual</button>
        </div>
        <div className='card'>
          <h3>Aula avulsa — R$80</h3>
          <p>Compra única de 1 aula</p>
          <button onClick={()=>checkout('price_single_lesson')} className='button'>Comprar Aula</button>
        </div>
        <div className='card'>
          <h3>Pacote 5 aulas — R$350</h3>
          <p>5 aulas preparatórias</p>
          <button onClick={()=>checkout('price_pack5')} className='button'>Comprar Pacote</button>
        </div>
      </div>
      <p style={{marginTop:12}}>Nota: preços mock. Substitua priceId por IDs reais do Stripe no painel de administração.</p>
    </div>
  )
}
