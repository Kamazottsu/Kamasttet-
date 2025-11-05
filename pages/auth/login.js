
import {useRouter} from 'next/router';
import '../styles/globals.css';
export default function Login(){
  const router = useRouter();
  function fakeEmailLogin(e){
    e.preventDefault();
    const email = e.target.email.value;
    if(!email) return alert('Digite um email');
    // mock: save user in localStorage
    const user = {id: 'u_'+Date.now(), name: email.split('@')[0], email};
    localStorage.setItem('kam_user', JSON.stringify(user));
    router.push('/profile');
  }
  return (
    <div className='container'>
      <div className='card'>
        <h2>Login / Cadastro (Mock)</h2>
        <form onSubmit={fakeEmailLogin}>
          <input name='email' placeholder='seu@email.com' style={{padding:10,marginTop:8,width:'100%'}} />
          <button style={{marginTop:10}} className='button'>Entrar com Email (simulado)</button>
        </form>
        <hr style={{margin:'18px 0'}}/>
        <p>OAuth buttons abaixo são links para NextAuth providers. Configure chaves em README.</p>
        <div style={{display:'flex',gap:8,flexWrap:'wrap',marginTop:8}}>
          <a href='#' className='button'>Entrar com Google</a>
          <a href='#' className='button'>Entrar com Discord</a>
          <a href='#' className='button'>Entrar com GitHub</a>
          <a href='#' className='button'>Entrar com Riot ID</a>
        </div>
      </div>
    </div>
  )
}
