import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { zodResolver } from "@hookform/resolvers/zod"
import { Helmet } from "react-helmet-async"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { toast } from 'sonner';
import { Link, useNavigate } from "react-router-dom"

export const Signup = () => {

    const signupForm = z.object({
        restauranteName: z.string(),
        email: z.string(),
        manegerName: z.string(),
        phone: z.string()
    })

    type SigninForm = z.infer<typeof signupForm>;

    const { register, handleSubmit, formState, reset } = useForm<SigninForm>({
        resolver: zodResolver(signupForm)
    })

    const navigate = useNavigate()

    const handleSignin = async (data: SigninForm) => {
        try {
            console.log(data)
            reset()
            toast.success("Restaurante cadastrado com sucesso !", {
                action: {
                    label: "Login",
                    onClick: () => navigate("/sign-in")
                }
            })
        } catch (error) {
            toast.error("Erro ao cadastrar Restaurante !")
        }
        
    }

    return (
        <>
            <Helmet title="Cadastro" />
            <div className="p-8">
                <Button
                    asChild
                    variant="ghost"
                    className="absolute right-8 top-8">
                    <Link to="/sign-in">
                        Fazer login
                    </Link>
                </Button>
                <div className="w-[350px] flex flex-col justify-center gap-6">
                    <div className="flex flex-col gap-2 text-center ">
                        <h1 className="text-2xl font-semibold tracking-tighter">Criar conta grátis</h1>
                        <p className="text-sm text-muted-foreground">seja um parceiro e comece suas vendas</p>
                    </div>
                    <form className="flex flex-col space-y-4" onSubmit={handleSubmit(handleSignin)}>
                        <div className="space-y-2">
                            <Label htmlFor="restauranteName">Nome do Estabelecimento</Label>
                            <Input
                                type="text"
                                id="restauranteName"
                                {...register("restauranteName")} />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="manegerName">Seu nome</Label>
                            <Input
                                type="text"
                                id="manegerName"
                                {...register("manegerName")} />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="email">Seu email</Label>
                            <Input
                                type="email"
                                id="email"
                                {...register("email")} />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="phone">Seu celular</Label>
                            <Input
                                type="tel"
                                id="phone"
                                {...register("phone")} />
                        </div>
                        <Button
                            type="submit"
                            className="w-full"
                            disabled={formState.isSubmitting}
                        >
                            Finalizar Cadastro
                        </Button>

                        <p className="px-6 text-center text-sm leading-relaxed text-muted-foreground">
                            Ao continuar você concorda com nossos serviços e política de pivacidade !
                        </p>
                    </form>

                </div>
            </div>
        </>
    )
}