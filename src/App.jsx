import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import Quiz from './pages/Quiz';
import LeaderBoard from './pages/LeaderBoard';
import { Suspense,lazy } from 'react';
// import Reasult from './pages/Reasult';
const Result = lazy(() => import("./pages/Reasult"))

function App() {
  

  return (
    <>
    <BrowserRouter>
    <Suspense fallback={<h2 className='text-center mt-5'>Loading...</h2>}>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/quiz' element={<Quiz/>}/>
      <Route path='/result' element={<Result/>}/>
      <Route path='/leaderboard' element={<LeaderBoard/>}/>
    </Routes>
    </Suspense>
    </BrowserRouter>
    {/* <Home/>
    <Quiz/>
    <LeaderBoard/>
    <Reasult/> */}
    </>
  )
}

export default App
