
import './App.css';
import {useState} from 'react'
import {Routes, Route} from 'react-router-dom'
import NavBar from '../../components/NavBar/NavBar.jsx'
import StarshipList from '../../pages/StarshipList/StarshipList.jsx'
import StarshipDetails from '../../pages/StarshipDetails/StarshipDetails.jsx'

function App() {
  const [navItems, setNavBar] = useState([
    {url: '/starship-list', name: 'Star Wars Starships'}
  ])

  return (
    <>
      <NavBar navItems={navItems}/>
      <Routes>
        <Route path='/starship-list' element={<StarshipList />}></Route>
        <Route path='/starship-details' element={<StarshipDetails />} />
      </Routes>
      </>

  )
}

export default App;
