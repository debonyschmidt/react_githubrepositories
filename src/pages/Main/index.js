import React, { Component } from 'react';
import { FaGithubAlt, FaPlus } from 'react-icons/fa'

import Container from '../Components/Container/index';
import { Form, Submitbutton } from './styles';

export default class Main extends Component {
  render() {
    return (<Container>
      <h1>
        <FaGithubAlt />
        Repositories 
      </h1>
   
      <Form onSubmit={() => {}}>
        <input type="text" placeholder="Add github profile name"/>

        <Submitbutton>
          <FaPlus color='#fff' size={14}/>
        </Submitbutton>
      </Form>
    </Container>
    );
  }
}