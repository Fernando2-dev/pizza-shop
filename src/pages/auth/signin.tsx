import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { zodResolver } from "@hookform/resolvers/zod"
import { Helmet } from "react-helmet-async"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { toast } from 'sonner';

export const Signin = () => {

    const sgninForm = z.object({
        email: z.string()
    })

    type SigninForm = z.infer<typeof sgninForm>;

    const { register, handleSubmit, formState, reset } = useForm<SigninForm>({
        resolver: zodResolver(sgninForm)
    })

    const handleSignin = async (data: SigninForm) => {
        console.log(data)
        reset()
        toast.success("Enviamos um link de autenticação para seu email.", {
            action: {
                label: "Reenviar", 
                onClick: () => handleSignin(data)
            }
        })
    }

    return (
        <>
            <Helmet title="login" />
            <div className="p-8">
                <div className="w-[350px] flex flex-col justify-center gap-6">
                    <div className="flex flex-col gap-2 text-center ">
                        <h1 className="text-2xl font-semibold tracking-tighter">Acessar Painel</h1>
                        <p className="text-sm text-muted-foreground">Acompanhe suas vendas pelo Painel do Parceiro</p>
                    </div>
                    <form className="flex flex-col space-y-4" onSubmit={handleSubmit(handleSignin)}>
                        <div className="space-y-2">
                            <Label htmlFor="email">Seu email</Label>
                            <Input
                                type="email"
                                id="email"
                                {...register("email")} />
                        </div>
                        <Button
                            type="submit"
                            className="w-full"
                            disabled={formState.isSubmitting}
                        >
                            Acessar Painel
                        </Button>
                    </form>

                </div>
            </div>
        </>
    )
}