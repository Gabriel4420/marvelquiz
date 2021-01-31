/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useState } from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import { useRouter } from 'next/router';
import db from '../db.json';
import ListQuiz from '../src/components/ListQuiz';
import Input from '../src/components/Input';
import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizBackground from '../src/components/QuizBackground';
import QuizLogo from '../src/components/QuizLogo';

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

const OpenGame = styled.button`
  width:100%;
  max-width:375px;
  height:35px;
  color:white;
  padding:14px;
  border:1px solid ${({ theme }) => theme.colors.primary};
  background-color:${({ theme }) => theme.colors.primary};
  font-size:16px;
  display:flex;
  align-items:center;
  justify-content:center;

  :hover {
    border:1px solid ${({ theme }) => theme.colors.secondary};
    background-color:${({ theme }) => theme.colors.secondary};
  }

`;

export default function Home() {
  const router = useRouter();
  const [name, setName] = useState('');
  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>{db.title}</title>
        <meta name="title" content={db.title} />
        <meta name="description" content={db.description} />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://marvelquiz-rouge.vercel.app" />
        <meta property="og:title" content={db.title} />
        <meta property="og:description" content={db.description} />
        <meta property="og:image" content={db.bg} />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://marvelquiz-rouge.vercel.app" />
        <meta property="twitter:title" content={db.title} />
        <meta property="twitter:description" content={db.description} />
        <meta property="twitter:image" content={db.bg} />

      </Head>

      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>Marvel Quiz</h1>
          </Widget.Header>
          <Widget.Content>
            <p style={{ lineHeight: 1.5, fontWeight: 'bold', fontSize: '16px' }}>
              {db.description}
            </p>
            <form onSubmit={(infosDoEvento) => {
              infosDoEvento.preventDefault();

              // router manda para a proxima pagina
              router.push(`/quiz?name=${name}`);

              // eslint-disable-next-line no-console
              console.log('fazendo uma submissão via react');
            }}
            >
              <Input
                name="Nome do usuário"
                placeholder="Diz ai seu nome"
                onChange={(infosEvent) => {
                  // console.log(infosEvent.target.value);
                  // name = infosEvent.target.value;
                  setName(infosEvent.target.value);
                }}
                value={name}
              />
              <OpenGame type="submit" disabled={name.length === 0}>
                Bora&nbsp;lá&nbsp;
                {name}
              </OpenGame>
            </form>
          </Widget.Content>

        </Widget>
        <Widget>
          <Widget.Header>
            <h1>Quizes da galera</h1>
          </Widget.Header>
          <Widget.Content>

            <h1>Quizes da galera</h1>

            <p>Jogar Quizes Semelhantes da Imersão:</p>

            <ListQuiz
              data={db.external}
              status={name.length === 0 && 'disabled'}
            />
          </Widget.Content>
        </Widget>

        <Footer />
        <GitHubCorner projectUrl="https://github.com/Gabriel4420" />

      </QuizContainer>
    </QuizBackground>
  );
}
