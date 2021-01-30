import styled from 'styled-components';

const Widget = styled.div`
margin-top:24px;
margin-bottom:24px;
border: 1px solid #4caf;
background-color:rgba(214, 71, 83, 0.867);
border-radius:4px;
overflow:hidden;

h1,h2,h3{
  font-size:16px;
  font-weight:bold;
  line-height:1;
  margin-bottom:0;
  text-align:center;
}

p{
  font-size:14px;
  font-weight:400;
  line-height:1;
}
`;
Widget.Header = styled.header`
  display:flex;
  justify-content:center;
  align-items:center;
  padding:18px 32px;
  background-color: ${({ theme }) => theme.colors.primary};
  *{
    margin:0;
  }
  text-transform:uppercase;
`;

Widget.Content = styled.div`
padding: 24px 32px 32px 32px;
& > *:first-child{
  margin-top:0;
}
& > *:last-child{
  margin-bottom:0;
}

ul{
  list-style:none;
  padding:0;
}

`;

export default Widget;
