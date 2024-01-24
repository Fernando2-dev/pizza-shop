import { Outlet } from "react-router-dom"

export const LayoutApp = () => {
    return (
        <div>
            <h1>Cabeçalho</h1>
            <div>
                <Outlet />
            </div>
        </div>
    )
}