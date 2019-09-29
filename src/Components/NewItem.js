import * as React from 'react';

export class NewItem extends React.Component {

  state=  {
    myItem:''
  };
    render () {
      return (
        <form>
          <div>
            <label htmlFor="item-input">New Item:</label>
            <input
              name="newItem"
              type="text"
              id="item-input"
              value={this.props.newItem}
              onChange={this.props.onChange}
            ></input>
          </div>
          <button type="button" onClick={this.props.addItem}>
            Add Item
          </button>
        </form>
      );
    };
}