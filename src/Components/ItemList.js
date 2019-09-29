import * as React from 'react';
import {ListItem} from './ListItem';

export class ItemList extends React.PureComponent{
    render(){
    console.log('Rendering Item list');
    return <ul>
        {this.props.items.map(item => <ListItem key={item} item={item}
        removeItem={this.props.removeItem}/>)}
    </ul>
    }
}