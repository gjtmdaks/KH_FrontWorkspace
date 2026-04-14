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
import CustomHook from './02_react_advenced/03.CustomHook'
import AutoSaveEditor from './prectice/3.useEffect'
import OptimizationPractice from './prectice/4.OptimizationPractice'
import AxiosGet from './02_react_advenced/04.Axios_GET'
import AxiosPost from './02_react_advenced/04.Axios_POST'
import Header from './02_react_advenced/05.Router'
import { Link, Route, Routes } from 'react-router-dom'
import NestedRoute from './02_react_advenced/06.Nested_Route'
import { UserDetail, UserList, VariableRoute } from './02_react_advenced/07.Variable_Route'
import ContextApi from './03_globalState/1.context/Context'
import Counter from './03_globalState/2.redux/page/counter'
import TodoList from './03_globalState/2.redux/page/toDoList'

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
      {/* 실습문제 4.<br/>
      <OptimizationPractice/> */}

      {/* 7-2-4.<br/>
      <AxiosGet/>
      <AxiosPost/> */}
      {/* 7-2-5.<br/>
      <Header/> */}

      <Routes>
        <Route path='/' element={<div>메인 페이지</div>} />
        <Route path='/useEffect' element={<UseEffectHook/>} />
        <Route path='/optimize' element={<OptimizationHook/>} />
        <Route path='/nested' element={<NestedRoute/>} >
          <Route path='get' element={<AxiosGet/>} />
          <Route path='post' element={<AxiosPost/>} />
        </Route>
        <Route path='/variable-route' element={<VariableRoute/>}>
          <Route path='user/:id' element={<UserDetail/>}/>
          <Route path='' element={<UserList/>}/>
        </Route>
        <Route path='/context' element={<ContextApi/>}/>
        <Route path='/counter' element={<Counter/>}/>
        <Route path='/redux' element={<TodoList/>}/>

        <Route path='*' element={
          <div>
            <h1>잘못된 페이지입니다.</h1>
            <a href='/'>a태그로 이동하기</a>
            {/*
              Link
               - html의 a태그와 동일한 기능을 수행하나 페이지 이동시 새로고침 없이
                 컴포넌트를 전환한다.
               - a태그로 인한 페이지 이동은 location을 조작하는 행위로, 리액트에서는
                 권장되지 않는 이동방식이다.
            */}
            <Link to={'/'}>Link태그로 이동하기</Link>
          </div>
        } />
      </Routes>

      <nav className='nav'>
          <li>
            <Link to="/">메인페이지</Link>
          </li>
          <li>
            <Link to="/useEffect">useEffect</Link>
          </li>
          <li>
            <Link to="/optimize">Optimization</Link>
          </li>
          <li>
            <Link to="/nested/get">Axios Get</Link>
          </li>
          <li>
            <Link to="/nested/post">Axios Post</Link>
          </li>
          <li>
            <Link to="/variable-route">Variable Route</Link>
          </li>
          <li>
            <Link to="/context">Context</Link>
          </li>
          <li>
            <Link to="/counter">Counter</Link>
          </li>
          <li>
            <Link to="/redux">Redux</Link>
          </li>
        </nav>
    </>
  )
}

export default App
