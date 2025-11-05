
import {useState} from 'react';
import '../styles/globals.css';
export default function Schedule(){
  const [name,setName]=useState('');
  const [date,setDate]=useState('');
  const [msg,setMsg]=useState('');
  async function book(e){ e.preventDefault();
    const res = await fetch('/api/book', {method:'POST',headers:{'Content-Type':'application/json'},body: JSON.stringify({name,date})});
    const data = await res.json();
    if(data.ok) setMsg('Aula marcada com sucesso!');
    else setMsg('Erro ao marcar: '+(data.error||'unknown'));
  }
  return (
    <div className='container'>
      <h2>Agendar Aula</h2>
      <div className='card'>
        <form onSubmit={book}>
          <input placeholder='Nome' value={name} onChange={e=>setName(e.target.value)} style={{width:'100%',padding:10}} />
          <input type='datetime-local' value={date} onChange={e=>setDate(e.target.value)} style={{width:'100%',padding:10,marginTop:8}} />
          <button className='button' style={{marginTop:8}}>Agendar</button>
        </form>
        {msg && <p style={{marginTop:8}}>{msg}</p>}
      </div>
    </div>
  )
}
