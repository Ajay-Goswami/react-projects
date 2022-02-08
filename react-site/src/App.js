import React from 'react';
import './App.css';
import './componenet/BlockCard.css'
import BlockCard from './componenet/BlockCard';
import { isMyArrayEmpty } from './componenet/Utils';


class App extends React.Component{
  state={
    showBlogs: true
  }
   blogArr =[
    {
      id: 1,
      title: 'Exception	Handling',
      description: "An exception is a problem or error that arises during the execution of a program. There could be errors that cause the programs to fail or certain conditions that lead to errors. If these run time errors are not handled by the program, OS handles them and program terminates abruptly, which is not good. Few of such errors or error conditions are divide by zero, out of bound index, accessing memory not allowed to access, etc"
    },
    
    {
      id: 2,
      title: 'Why we need Exception Handling',
      description: `Separation of Error Handling code from Normal Code: In traditional error handling 
      codes, there are always if else conditions to handle errors. These conditions and the code 
      to handle errors get mixed up with the normal flow. This makes the code less readable 
      and maintainable. With try catch blocks, the code for error handling becomes separate 
      from the normal flow`
    },

    {
      id:3,
      title: 'Example of exception handling',
      description: `#include <iostream>
      using namespace std;
      int main() {
       int x = -1;
       cout << "Before try" << endl;
       try{
       cout << "Inside try \n";
       if (x < 0) {
       throw x;
       cout << "After throw" << endl;
       }
       } catch(int x) {
       cout << "Exception Caught" << endl;
       }
       cout << "After catch" << endl;
      }
      Output : 
      Before try 
      Inside try 
      Exception Caught 
      After catch`
    }
  ]

    blogCards = isMyArrayEmpty(this.blogArr) ? [] : this.blogArr.map((item, pos)=>{
     return (
       <BlockCard className={'Blog'} key={pos} title={item.title} description={item.description} id={item.id}/>
  )
})

onHideBtnClick =() =>{
  this.setState((prevState,prevProps)=>{
  return {showBlogs:!prevState.showBlogs}
});
}

render(){
return (
      <div className='App'>
         {/* <div className='btn'> */}
             <button className='Btn' onClick={this.onHideBtnClick}>{this.state.showBlogs ? 'Hide list' : 'Show list'}</button>
             <br />
             {
               this.state.showBlogs ? this.blogCards :null
             }
            {/* {this.blogCards} */}
      </div>
    );
}
}

export default App;
