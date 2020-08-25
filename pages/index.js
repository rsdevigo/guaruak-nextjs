import Head from 'next/head'
import styles from '../styles/Home.module.css'
import fetch from 'isomorphic-unfetch'

export default function Home(props) {
  return (
    <>
      <Head>
        <title>{props.geral.nomeApp}</title>
        <link rel="icon" href={props.geral.favicon.url} />
      </Head>
    </>
  )
}

export async function getStaticProps(context) {
  const geralReq = await fetch('http://guaruak.herokuapp.com/geral');
  const geral = await geralReq.json();

  return {
    props: {
      geral
    }
  }
}


