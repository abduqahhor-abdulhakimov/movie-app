import React, { useEffect, useState } from 'react';
import "./App.css";
import Header from './components/Header';
import MovieMain from './components/MovieMain';
import { Route, Routes } from 'react-router-dom';
import About from './components/About';

const App = () => {
  let [data, setData] = useState("");
  let [genre, setGenre] = useState('')
  let [lang, setLang] = useState('ru-RU')
  let [obj, setObj] = useState('')
  let [search, setSearch] = useState('')
  let [page, setPage] = useState(1)

  useEffect(() => {

    if (search) {
      fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=245e10fb2b807cec9c8e3963076dcd10&lang=en-US&query=${search}`
      ).then(res => res.json())
      .then(data => setData(data))

    }
    else {
      fetch(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=245e10fb2b807cec9c8e3963076dcd10&page=${page}&language=${lang}` 
      )
        .then((response) => response.json())
        .then((data) => setData(data));

    }




    fetch(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=245e10fb2b807cec9c8e3963076dcd10&language=${lang}`
    )
      .then((response) => response.json())
      .then((data) => setGenre(data));


  }, [lang, search, page]);

  console.log(page)

  function pageTashuvchi(counter) {
    setPage(counter)
  }

  function idTashuvchi(obj) {

    setObj(obj)

  }

  function inputTashuvchi(inputValue) {
    setSearch(inputValue)
  }


  function tilTashuvchi(value) {
    setLang(value)
  }

  return (
    <div className='app'>
      <Header tilTashuvchi={tilTashuvchi} inputTashuvchi={inputTashuvchi} />
      <Routes>
        <Route path='/' element={<MovieMain data={data} genre={genre} idTashuvchi={idTashuvchi} pageTashuvchi={pageTashuvchi} />} />
        <Route path='/about' element={<About obj={obj} lang={lang} />} />
      </Routes>
    </div>
  )
}

export default App

