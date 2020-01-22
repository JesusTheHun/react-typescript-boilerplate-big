import React from 'react';
import styled from 'styled-components';

type Props = {
};

type State = {
};

const Root = styled.div`
  background-color: red;
`;

export class Main extends React.Component<Props, State> {
  render() {
    return <Root>
      {this.props.children}
    </Root>;
  }
}

export default Main;
