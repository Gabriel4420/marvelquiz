import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import db from '../db.json';
import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizBackground from '../src/components/QuizBackground';
import QuizLogo from '../src/components/QuizLogo';
/* const BgImage = styled.div`

background-image:url(${db.bg});
display:flex;
flex:1;
background-size:1350px 665px;
background-repeat:no-repeat;
background-position: left;
background-color:#ffff;
opacity:0.8;
@media screen and (max-width: 615px) {
    margin:auto;
    width:460px;
    background-size:105% 105%;
  }

  @media screen and (max-width: 991px) and (min-width:616px){
    margin:auto;
    width:990px;
    background-size:auto 633px;
  }
` */

const QuizContainer = styled.div`
  width:100%;
  max-width:350px;
  padding-top:45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin:auto;
    padding:15px;
  }
`;

/* function Title(props){
  return(
    <h1>{props.children}</h1>
  )
} */

export default function Home() {
  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>MarvelQuiz - Venha testar seus conhecimentos</title>
        <meta name="title" content="MarvelQuiz - Venha testar seus conhecimentos" />
        <meta name="description" content="Quiz divertido sobre a marvel" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://marvelquiz-rouge.vercel.app" />
        <meta property="og:title" content="MarvelQuiz - Venha testar seus conhecimentos" />
        <meta property="og:description" content="Quiz divertido sobre a marvel" />
        <meta property="og:image" content={db.bg} />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://metatags.io/" />
        <meta property="twitter:title" content="MarvelQuiz - Venha testar seus conhecimentos" />
        <meta property="twitter:description" content="Quiz divertido sobre a marvel" />
        <meta property="twitter:image" content={db.bg} />

      </Head>

      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>Marvel Quiz</h1>
          </Widget.Header>
          <Widget.Content>
            <form onSubmit="">
              <input placeholder="Diz ai seu nome" />
              <button type="submit"> Jogar [seuN]</button>
            </form>
          </Widget.Content>

        </Widget>
        <Widget>
          <Widget.Header>
            <h1>Quizes da galera</h1>
          </Widget.Header>
          <Widget.Content>

            <p> Olha o que a galera ta fazendo</p>
          </Widget.Content>
        </Widget>

        <Footer />
        <GitHubCorner projectUrl="https://github.com/Gabriel4420" />

      </QuizContainer>
    </QuizBackground>
  );
}
