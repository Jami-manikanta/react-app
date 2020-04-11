import React, { Component } from 'react';
import { observer } from 'mobx-react';
import tw from 'tailwind.macro';
import styled from '@emotion/styled';
const CounterHeader=styled.h1`${tw``}`
const Counterpage=styled.div`${tw`flex h-screen justify-center items-center`}`;
import stores from '../../stores';
const counterStore = stores.counterStore;

@observer
class CounterPage extends Component {
  handleIncrement = () => {
    counterStore.incrementCounter()
  }

  handleDecrement = () => {
    if (counterStore.count !== 0) {
      counterStore.decrementCounter()
    }
  }

  render() {
    return (
      <Counterpage>
       { /*<h1>{counterStore.count}</h1>*/}
        <CounterHeader>Counter:{counterStore.count}</CounterHeader>
        <button onClick={this.handleIncrement}>+</button>
       
        <button onClick={this.handleDecrement}>-</button>
      </Counterpage>
    )
  }
}

export default CounterPage;
