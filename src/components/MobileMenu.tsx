import { Menu } from "lucide-react";
import { cn } from "cn";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { buttonVariants } from "@/components/ui/button";

const links = [
  { label: "Sobre mi", href: "#sobre-mi" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Contacto", href: "#contact" },
];

export function MobileMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className={cn(buttonVariants({ variant: "ghost", size: "icon" }), "text-white")}
      >
        <Menu />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-36">
        {links.map((link) => (
          <DropdownMenuItem key={link.href} render={<a href={link.href} />}>
            {link.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}