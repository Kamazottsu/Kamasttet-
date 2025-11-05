
import '../styles/globals.css';
export default function Profile(){
  let user = null;
  if (typeof window !== 'undefined'){
    try { user = JSON.parse(localStorage.getItem('kam_user')); } catch(e){}
  }
  return (
    <div className='container'>
      <div className='card'>
        <h2>Meu Perfil</h2>
        {user ? (
          <div>
            <p><strong>Nome:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Jogos conectados:</strong> Valorant (mock)</p>
          </div>
        ) : (
          <p>Você não está logado. Vá para <a href='/auth/login'>Login</a></p>
        )}
      </div>
    </div>
  )
}
