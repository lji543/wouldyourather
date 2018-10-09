import React from 'react';

import Question from './Question';
import Topic from './Topic';

import Browser from '@hickory/browser'

import { Tabs, Tab } from 'react-materialize'

export class ActiveTheme extends React.Component{

  // questionType = ["random", "bank", "all"];

  // TODO fix this data type / isActive
  // questionType = {
  //   random: {
  //     type: 'random',
  //     isActive: undefined
  //   },
  //   bank: {
  //     type: 'bank',
  //     isActive: undefined
  //   },
  //   all: {
  //     type: 'all',
  //     isActive: 'active'
  //   }
  // };


  questionType = [
    {random: 'undefined'},
    {bank: 'undefined'},
    {all: 'active'}
  ]

  // isActive = '';

  selectedType = 'all';

  // instance = M.Tabs.init(el, options);
  // has attribute

  questionTypeFn = () => {
    this.questionType.map(t => {
      console.log(t.all)
    })
    // console.log('instance ', instance)
  }

  // console.log(questionType.find())


  // <Tabs className='tab-demo z-depth-1'>
  //   <Tab title="Random">Test 1</Tab>
  //   <Tab title="Bank">Test 2</Tab>
  //   <Tab title="All" active>Test 4</Tab>
  // </Tabs>

  render() {
    // console.log(Tabs)

    let game;
    let path = Browser().location.pathname

    if (path === '/topics') {
      game = <Topic />;
    } else {

      // TODO repeat through the tabs and use variable for id and title
      // game = <Question type={this.questionType}/>;
      // game = <Tabs onChange={this.questionTypeFn} className='tab-demo z-depth-1'>
      //   <Tab id="random" title="Random" >Test 1</Tab>
      //   <Tab id="bank" title="Bank" >Test 2</Tab>
      //   <Tab id="all" title="All" >Test 4</Tab>
      // </Tabs>
      game = <Question />
    }

    return (
      <div className="App-body">
        {game}
      </div>
    );
  }
}

export default ActiveTheme;
