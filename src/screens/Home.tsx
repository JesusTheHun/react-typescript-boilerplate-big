import React from 'react';
import Main from '../layouts/Main';
import styled from 'styled-components';
import { ConnectedRouterProps } from 'connected-react-router';

const Headline = styled.h1`
    font-family: Arial;
`;

type Props = ConnectedRouterProps & {
};

type State = {
};

class Home extends React.Component<Props, State> {

  render() {
    return <Main>
      <Headline>Hi !</Headline>
    </Main>;
  }
}

export default Home;

// export default () => <Main>
//   <Headline>Hi !</Headline>
// </Main>;
