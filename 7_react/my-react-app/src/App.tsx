import './App.css'
import { Component } from './01_react_basic/01.Component' // export => {함수}
import ParentComponent from './01_react_basic/02.PropsAndState' // export default => 함수
import ArrayDataBinding from './01_react_basic/03.ArrayBinding'
import UserInfoContainer from './prectice/1.PropsPrectice'
import BoardContainer from './prectice/2.BoardContainer'

function App() {

  return (
    <>
      <Component/>
        <hr/><hr/>
      <ParentComponent/>
        <hr/><hr/>
      <ArrayDataBinding/>
        <hr/><hr/>

      <UserInfoContainer/>
        <hr/><hr/>
      <BoardContainer/>
    </>
  )
}

export default App
