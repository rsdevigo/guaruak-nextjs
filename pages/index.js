import Head from "next/head";
import styles from "../styles/Home.module.css";
import fetch from "isomorphic-unfetch";
import Cabecalho from "./components/Cabecalho";
import Hero from "./components/Hero";
import Conteudo from "./components/Conteudo";
import Equipe from "./components/Equipe";
import Rodape from "./components/Rodape";

export default function Home(props) {
  return (
    <>
      <Head>
        <title>{props.geral.nomeApp}</title>
        <link rel="icon" href={props.geral.favicon.url} />
      </Head>
      <Cabecalho
        redeSocial={props.geral.RedesSociais}
        logo={props.geral.LogoApp}
        menu={props.menu}
        fundo={props.hero.fundo.url}
      />
      <Hero hero={props.hero} />
      <Conteudo conteudo={props.conteudo} />
      <Equipe equipe={props.equipe} />
      <Rodape rodape={props.rodape} />
    </>
  );
}

export async function getStaticProps(context) {
  const geralReq = await fetch("http://guaruak.herokuapp.com/geral");
  const geral = await geralReq.json();

  const menuReq = await fetch("http://guaruak.herokuapp.com/menu");
  const menu = await menuReq.json();

  const heroReq = await fetch("http://guaruak.herokuapp.com/hero");
  const hero = await heroReq.json();

  const conteudoReq = await fetch("http://guaruak.herokuapp.com/conteudo");
  const conteudo = await conteudoReq.json();

  const equipeReq = await fetch("http://guaruak.herokuapp.com/equipe");
  const equipe = await equipeReq.json();

  const rodapeReq = await fetch("http://guaruak.herokuapp.com/rodape");
  const rodape = await rodapeReq.json();

  return {
    props: {
      geral,
      menu,
      hero,
      conteudo,
      equipe,
      rodape,
    },
  };
}
