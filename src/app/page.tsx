/* eslint-disable jsx-a11y/alt-text */
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import "./globals.css";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Bussiness from "../assets/Bussiness.svg";
import Negociation from "../assets/Negociation.svg";
import Image from "next/image";

export default function Home() {
  return (
    <main className="h-screen flex w-full ">
      <div className="bg-primary-foreground w-full h-full flex items-center justify-center p-16">
        <Carousel className="w-full max-w-xl">
          <CarouselContent>
            <CarouselItem>
              <div className="flex aspect-square bg-background rounded p-8">
                <Image alt="hhh" src={Bussiness} />
              </div>
              </CarouselItem>
              <CarouselItem>
                <div className="flex aspect-square bg-background rounded p-8">
                  <Image alt="aaa" src={Negociation} />
                </div>
              </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
      <section className=" items-center justify-center flex bg-background h-full max-w-3xl w-full p-4">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-2xl font-bold tracking-tighter">
              Entre com sua conta
            </CardTitle>
            <CardDescription>
              Utilize seu e-mail e senha para entrar, ou a sua conta do GitHub
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div>
              <Label htmlFor="email">E-mail </Label>
              <Input id="email" placeholder="exemplo@gmail.com" type="email" />
            </div>
            <div className="mt-4">
              <Label htmlFor="password">Senha </Label>
              <Input
                id="password"
                placeholder="Sua senha secreta"
                type="password"
              />
            </div>
            <Button className="mt-6 w-full">Entrar</Button>
            <div className="flex items-center gap-6 mt-4 ">
              <Separator />
              <span className="text-xs text-muted-foreground">OU</span>
              <Separator />
            </div>
            <Button variant={"outline"} className="w-full">
              <GitHubLogoIcon className="mr-2" />
              Entrar com o GitHub
            </Button>
          </CardContent>
          <CardFooter>
            <p className="text-muted-foreground text-center text-sn">
              Ao entrar em nossa plataforma você concorda com nossos Termos de
              Uso e Política de Privacidade
            </p>
          </CardFooter>
        </Card>
      </section>
    </main>
  );
}
