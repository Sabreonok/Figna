import { BrowserRouter as Router, Navlink,Route,Routes} from "react-router-dom";
// import {Results, Contacts, Info, Help} from "./pages"
import { useState } from 'react'
import './style/App.scss'
import Header from './Components/Header/Header.jsx'
import Aim from './Components/Aim/Aim.jsx'
import Work from './Components/Work/Work.jsx'
import scores from './score.json'
import Post from './Components/Post/Post.jsx'

function App() {
  const [arr, setArr] = useState([]);

  // const addPost = (userScore) => {
  //   for (i = 0; i < scores.length; i++) {
  //     if  (arr[i].passingScore <= userScore) { 
  //        setArr([...arr, {scores[i].name, scores[i].location, scores[i].passingScore, scores[i].location}])
  //     }
  //   }

    return (
      <>
        <Header />
        <Aim addPost={addPost}></Aim>
        {arr.map((item, index) => (
          <Post object={item} key={index} />
        )

        )}

      </>
    )
  }

  export default App
