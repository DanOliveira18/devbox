import { Card, IconLink, Logo } from "@/components";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const About = () => {
  return (
    <section className="flex flex-col gap-8">
      <Card as="aside" h={636} w={371}>
        <div className="flex flex-col items-center gap-6 px-6 py-8">
          <Image
            width={140}
            height={140}
            src="/images/author.jpg"
            alt="Picture of the author"
            className="rounded-full"
            priority
          />

          <div className="container">
            <header>
              <h1 className="font-poppins text-xl font-medium text-primary-100">
                Dan Oliveira
              </h1>
              <h2 className="font-poppins text-sm font-medium text-gray-400">
                Systems Analyst | Full-stack developer
              </h2>
            </header>
            <article>
              <p className="mt-6 text-sm font-medium text-white">
                Olá Dev! Seja bem vindo ao Devbox, o meu diário pessoal de
                desenvolvimento. Aqui eu compartilho com vocês desde
                conhecimentos relacionados a programação, até desabafos sobre
                situações do dia a dia como um desenvolvedor. Caso se interesse
                por um assunto e queira saber mais, fique a vontade para entrar
                em contato comigo!{" "}
              </p>
              <p className="mt-6 text-sm font-medium text-white">
                Lembrando que o Devbox é uma plataforma open source, então você
                também pode implementar a sua versão, no meu github você
                encontra mais informações.
              </p>
            </article>
          </div>
        </div>
      </Card>
      <Card
        as="aside"
        h={98}
        w={371}
        className="flex items-center justify-center gap-5"
      >
        <IconLink
          link="https://www.instagram.com/danoliveira.dev/"
          icon={FaInstagram}
          size={54}
        />
        <IconLink link="https://github.com/DanOliveira18" icon={FaGithub} />
        <IconLink
          link="https://www.linkedin.com/in/danieloschagas/"
          icon={FaLinkedin}
        />
        <Link href={"https://danoliveira.dev"} target="_blank">
          <Logo />
        </Link>
      </Card>
    </section>
  );
};

export default About;
