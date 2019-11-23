import React, { Component } from 'react';
import { FaGithubAlt, FaPlus } from 'react-icons/fa'
import { Container } from './styles';

export default class Main extends Component {
  render() {
    return (<Container>
      <h1>
        <FaGithubAlt />
        Repositories
      </h1>
    </Container>);
  
  }
}