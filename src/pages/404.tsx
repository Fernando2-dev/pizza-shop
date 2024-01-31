import { Link } from "react-router-dom"

export const NotFound = () => {
    return (
        <div className="flex h-screen flex-col items-center justify-center gap-2">
            <h1 className="tex-3xl font-bold">Páina não encontrada !</h1>
            <p className="text-accent-foreground">
              voltar para o {' '}<Link to="/" className="text-sky-500 hover:text-sky-400">dashboard</Link>
            </p>

        </div>
    )
}