import { Link, LinkProps } from "react-router-dom"

export type NavLinkProps = LinkProps


export const NavLink = (props: NavLinkProps) => {
    return <Link 
    {...props} 
    className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground"
     />
}