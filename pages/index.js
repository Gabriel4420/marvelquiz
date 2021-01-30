import styled from 'styled-components'
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
`


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
    </Head>
      
      <QuizContainer>
        <QuizLogo />
       <Widget>
      <Widget.Header>
        <h1>Marvel Quiz</h1>
      </Widget.Header>
       <Widget.Content>
          
          <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Sint sequi nesciunt recusandae impedit voluptates 
          maiores sunt laboriosam vel quo dolor, 
          omnis quis, illum repudiandae,culpa officia mollitia 
          qui ullam ea!</p>
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

       <Footer/>
       <GitHubCorner projectUrl="https://github.com/Gabriel4420"/>
       
      </QuizContainer>
    </QuizBackground>
  )
}
