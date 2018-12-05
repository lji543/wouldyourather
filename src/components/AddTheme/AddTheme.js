import React from 'react';
import fire from '../../fire';

import AddQuestion from './AddQuestion';
import AddTopic from './AddTopic';
import ButtonComp from '../Utility/ButtonComp';

export class AddTheme extends React.Component{
  // TODO AddTheme and AddTopic are basically the same (consolidate)

  constructor(props) {
    super(props);
    // TODO: these are all very similar - condense into one
    this.handleAddTheme = this.handleAddTheme.bind(this);
    this.handleAddThemeCategory = this.handleAddThemeCategory.bind(this);
    this.handleAddThemeGroup = this.handleAddThemeGroup.bind(this);

    // TODO: state should really be set here? but we also need props to be defined before sending them down

      this.state = {
        theme: this.themeType[0],
        newTheme: {
          theme: '',
          category: '',
          group: ''
        },
        userMessage: ''
      }
  }

  handleAddTheme = e => {
    e.preventDefault();
    let newTheme = this.state.newTheme;
    newTheme.theme = e.target.value;
    this.setState({ newTheme: newTheme })
  }

  handleAddThemeCategory = e => {
    e.preventDefault();
    let newTheme = this.state.newTheme;
    newTheme.category = e.target.value;
    this.setState({ newTheme: newTheme })
  }

  handleAddThemeGroup = e => {
    e.preventDefault();
    let newTheme = this.state.newTheme;
    newTheme.group = e.target.value;
    this.setState({ newTheme: newTheme })
  }

  themeType = [
    {
      id:'question',
      title:'Question',
      dataArr: 'questionBank',
      component:<AddQuestion handleAddTheme={this.handleAddTheme} handleAddThemeCategory={this.handleAddThemeCategory} handleAddThemeGroup={this.handleAddThemeGroup}/>
    },
    {
      id:'topic',
      title:'Topic',
      dataArr: 'topics',
      component:<AddTopic handleAddTheme={this.handleAddTheme} handleAddThemeCategory={this.handleAddThemeCategory} handleAddThemeGroup={this.handleAddThemeGroup} />}
  ];

  handleClick = e => {
    e.preventDefault();

    let data = this.state.theme.dataArr;
    let newTheme: {
      theme: '',
      category: '',
      group: ''
    }

    if (!this.state.newTheme.theme) {
      this.setState({userMessage: `Please add a ${this.state.theme.id}!`});
      return;
    }

    fire.database().ref(data).push(this.state.newTheme)

    // show confirmation / error
    this.setState({userMessage: `Your ${this.state.theme.id} has been added!`});
    // TODO get status from firebase so we can throw an error if neccessary

    // clear the user input
    this.setState({newTheme: newTheme});
  }

  handleCategoryChange = e => {
    let id = e.target.getAttribute('href').slice(1);
    let theme;

    theme = this.themeType.filter(obj => {
      return obj.id === id;
    });

    this.setState({theme:theme[0]});
  }


  render() {

    return (
      <div className="theme-container">
        <div className="row">
          <div className="col s12 offset-s3">
            <ul className="tabs s3">
              {this.themeType.map(obj => {
                let href = `#${obj.id}`;
                return <li onClick={this.handleCategoryChange} key={obj.id} className="tab col s3"><a href={href}>{obj.title}</a></li>
              })}
            </ul>
          </div>

          <div id="{this.state.theme.id}" className="col s12 question-container">{this.state.theme.component}</div>
        </div>

        <div>{this.state.userMessage}</div>

        <ButtonComp onClick={this.handleClick} buttonText='Add'></ButtonComp>
      </div>
    );
  }
}

export default AddTheme;
