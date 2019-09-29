import * as React from 'react';

import {ToolHeader} from './ToolHeader';
import {ToolFooter} from './ToolFooter';
import { ItemList } from './ItemList';
import { NewItem } from './NewItem';

export class ItemTool extends React.Component {
    constructor(props){
        super(props);
       this.state ={
        newItem:'',
        items:this.props.items,
       };
    }

    addItem = () =>  {
        this.setState({
            items: this.state.items.concat(this.state.newItem),
            newItem:''
        });
    };

    onChange = (e) =>    {
        this.setState({
            newItem:e.target.value
        });
    };


    removeItem = (itemToRemove) => {
        this.setState({
            items: this.state.items.filter(item=> item !== itemToRemove),
        });
    }

    render()
    {
        return <div>
            <ToolHeader headerText = "Item Tool"/>
            {
            /* Never  try to  set the state for the components which doesn't have forms.
             <ItemList items={this.state.items}/>
            
            */}
            <ItemList items={this.state.items} removeItem={this.removeItem}/>
            <NewItem addItem={this.addItem} onChange={this.onChange} newItem={this.newItem}/>
            <ToolFooter/>
        </div>
    }
}