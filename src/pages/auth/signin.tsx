import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Helmet } from "react-helmet-async"

export const Signin = () => {
    return (
        <>
            <Helmet title="login" />
            <div className="p-8">
                <div className="w-[350px] flex flex-col justify-center gap-6">
                    <div className="flex flex-col gap-2 text-center ">
                      <h1 className="text-2xl font-semibold tracking-tighter">Acessar Painel</h1>
                      <p className="text-sm text-muted-foreground">Acompanhe suas vendas pelo Painel do Parceiro</p>
                    </div>
                    <form className="flex flex-col space-y-4">
                        <div className="space-y-2">
                        <Label htmlFor="email">Seu email</Label>
                        <Input type="email" id="email"/>
                        </div>
                        <Button type="submit" className="w-full">Acessar Painel</Button>
                    </form>

                </div>
            </div>
        </>
    )
}