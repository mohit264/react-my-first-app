import * as React from 'react';

export class ListItem extends React.Component{

    componentDidMount(){
        console.log('List Item Mounted: '+ this.props.item);
    };
    componentWillUnmount(){
        console.log('List Item will Unmount: '+this.props.item);
    }
    
    render() {
        return <li>
            {this.props.item}
            <button type="button" onClick={()=> this.props.removeItem(this.props.item)}>X</button>
        </li>;
    }
}