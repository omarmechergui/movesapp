import './App.css'
import Carde from './componets/Cards'
import Slider from './componets/Carosel'
import Addfilme from './componets/Addfilme'
import Header from './componets/Navbar'
import movies from './componets/data'
import { useState } from 'react'

function App() {
  console.log(movies)
  const dark =true
const [filmelist, setfilmelist] = useState(movies)
  return (
    <div>
      <Header dark={dark} />
      <Addfilme filme ={filmelist} setfilme={setfilmelist}/>
      <Slider/>
      <Carde movies={filmelist}  dark={dark}  setfilme={setfilmelist}/>


    </div>
  )
}

export default App
