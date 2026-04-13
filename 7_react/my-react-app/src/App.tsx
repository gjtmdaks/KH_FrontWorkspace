import './App.css'
import { Component } from './01_react_basic/01.Component' // export => {함수}
import ParentComponent from './01_react_basic/02.PropsAndState' // export default => 함수
import ArrayDataBinding from './01_react_basic/03.ArrayBinding'
import UserInfoContainer from './prectice/1.PropsPrectice'
import BoardContainer from './prectice/2.BoardContainer'
import ObjectDataBinding from './01_react_basic/04.ObjectBinding'
import ModuleCSS from './01_react_basic/05.ModuleCss'
import UseEffectHook from './02_react_advenced/01.UseEffectHook'
import OptimizationHook from './02_react_advenced/02.OptimizationHook'
import AutoSaveEditor from './prectice/3.useEffect'
import OptimizationPractice from './prectice/4.OptimizationPractice'
// import CustomHook from './02_react_advenced/03.CustomHook'

function App() {

  return (
    <>
      {/* 7-1-1<br/>
      <Component/> */}
      {/* 7-1-2<br/>
      <ParentComponent/> */}
      {/* 7-1-3<br/>
      <ArrayDataBinding/> */}

      {/* 실습문제 1.<br/>
      <UserInfoContainer/> */}
      {/* 실습문제 2.<br/>
      <BoardContainer/> */}

      {/* 7-1-4.<br/>
      <ObjectDataBinding/> */}
      {/* 7-1-5.<br/>
      <ModuleCSS/> */}
      {/* 7-2-1.<br/>
      <UseEffectHook/> */}
      {/* 7-2-2.<br/>
      <OptimizationHook/> */}
      {/* 7-2-3.<br/>
      <CustomHook/> */}

      {/* 실습문제 3.<br/>
      <AutoSaveEditor/> */}
      실습문제 4.<br/>
      <OptimizationPractice/>
    </>
  )
}

export default App
