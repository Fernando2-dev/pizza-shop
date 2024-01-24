import { Outlet } from "react-router-dom"

export const LayoutAuth = () => {
    return (
        <div>
            <h1>Autenticação</h1>
            <div>
                <Outlet />
            </div>
        </div>
    )
}