import * as React from 'react';


import { ItemTool } from './Components/ItemTool';


//Demo with Function APP
// export const App = () =>
// {
//   const colors = ['red','blue','green','yellow']
// return <React.Fragment>
//   <ToolHeader headerText="Color Tool"/>
//   <ItemList items={colors}/>
//   <ToolFooter/>
// </React.Fragment>;
// }

export const App = () =>
{
  const colors = ['red','blue','green','yellow']
return <ItemTool items={colors}/>;
}