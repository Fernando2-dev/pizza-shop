import { Header } from "@/components/header"
import { Outlet } from "react-router-dom"

export const LayoutApp = () => {
    return (
        <div className="min-h-screen flex flex-col antialiased">
            <Header />
            <div className="flex flex-col flex-1 gap-4 p-8 pt-4">
                <Outlet />
            </div>
        </div>
    )
}