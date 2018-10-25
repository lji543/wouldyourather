import React from 'react';

export class AddQuestion extends React.Component{
  // TODO very similar to add question - do they need to be separate?

  // constructor(props) {
  //   super(props);
  //
  // }

  render() {

    return (
      <div className="add-theme__input">

          <p>Would you Rather...</p>
          <div className="valign-wrapper">
            <div className="width--100"><input onChange={this.props.handleAddTheme} type="text"/></div>
            <span>&nbsp;<b>?</b></span>
          </div>
          <div className="valign-wrapper secondary-row">
            <div className="col">Category: <input onChange={this.props.handleAddThemeCategory} type="text"/></div>
            <div className="col offset-s3">Group: <input onChange={this.props.handleAddThemeGroup} type="text"/></div>
          </div>

      </div>
    );
  }
}

export default AddQuestion;
