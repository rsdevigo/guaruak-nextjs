import Head from 'next/head'
import styles from '../styles/Home.module.css'
import fetch from 'isomorphic-unfetch'
import styled from '@emotion/styled';

export default function Home(props) {
  return (
    <AppStyled>
      <Head>
        <title>{props.geral.nomeApp}</title>
        <link rel="icon" href={props.geral.favicon.url} />
      </Head>
    </AppStyled>
  )
}

export async function getStaticProps(context) {
  const geral = await fetch('http://guaruak.herokuapp.com/geral');
  const geralData = await geral.json();

  return {
    props: {
      geral: geralData
    }
  }
}

const AppStyled = styled.div``;
