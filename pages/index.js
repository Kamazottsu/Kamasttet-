
import Link from 'next/link';
import '../styles/globals.css';
export default function Home(){
  return (
    <div className="container">
      <h1 style={{color:'#3a5fcd'}}>Kamasttet Academy — MVP</h1>
      <p>Bem-vindo! Use as opções abaixo para testar login, planos e agendamento.</p>
      <div style={{display:'flex',gap:12,marginTop:20}}>
        <Link href="/auth/login"><a className="button">Login / Cadastro</a></Link>
        <Link href="/plans"><a className="button">Planos & Pagamentos</a></Link>
        <Link href="/schedule"><a className="button">Agendar Aula</a></Link>
        <Link href="/profile"><a className="button">Meu Perfil</a></Link>
      </div>
      <p style={{marginTop:18,color:'#d4af37'}}>Nota: OAuth e Stripe precisam de chaves reais; veja README para configurar.</p>
    </div>
  )
}
