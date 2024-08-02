import login from "@/actions/login"

export default async function LoginForm() {
  return (
    <>
      <form action={login}>
        <input type="text" name="username" placeholder="Usuário" />
        <input type="password" name="password" placeholder="Senha" />
        <button>Entrar</button>
      </form>
    </>
  )
}