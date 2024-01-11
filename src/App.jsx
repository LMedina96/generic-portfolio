import Header from "./components/Header"
import TitleAnimation from "./components/TitleAnimation"
import TimeLine from "./components/TimeLine"
import CertificationsList from "./components/CertificationsList"
import TechnologiesList from "./components/TechnologiesList"
import ReturnButton from "./components/ReturnButton"
import Portfolio from "./components/Portfolio"
import React, { useState } from "react"
import { ThemeProvider } from "styled-components"
import { darkTheme, lightTheme } from "./helpers/Theme"
import { GlobalStyles } from "./helpers/GlobalStyles"

export const ThemeContext = React.createContext();

function App() {

  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };


  return (
    <ThemeContext.Provider value={{ toggleTheme }}>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <GlobalStyles />
          <section id="home" className="body p-4 text-center">
            <ReturnButton />
            <section className="mb-4">
              <TitleAnimation />
            </section>
            <section className="principal container p-4 ">
              <Header />
              <TimeLine />
              <Portfolio />
              <TechnologiesList />
              <CertificationsList />
            </section>
          </section>
      </ThemeProvider>
    </ThemeContext.Provider>

  )
}

export default App
