import React from 'react'

const Header = ({tilTashuvchi, inputTashuvchi}) => {
  function changeLang() {
    tilTashuvchi(document.querySelector('select').value)
  }

  function getValue(e) {
    e.preventDefault()
    
    inputTashuvchi(e.target.value)
  }
  return (
    <div>
      <div className="header">
        <div className="container">
          <div className="header_inner">
            <h1>KINO</h1>
            <form >
              <input type="text" onChange={(e) => getValue(e)}/>
            </form>
            <select onChange={changeLang} className="languech">
              <option value="ru-RU">RU</option>
              <option value="en-US">EN</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
