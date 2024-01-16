import CoverGenertor from "./components/CoverGenertor/CoverGenertor"
import CoverLetter from "./components/CoverLetter/CoverLetter"
import Header from "./components/Header/Header"
import Hero from "./components/Hero/Hero"
import Resume from "./components/Resume/Resume"
import SubmitBetterJobs from "./components/SubmitBetterJobs/SubmitBetterJobs"



function App() {


  return (
    <>
      <Header></Header>
      <Hero></Hero>
      <SubmitBetterJobs></SubmitBetterJobs>
      <CoverLetter></CoverLetter>
      <CoverGenertor></CoverGenertor>
      <Resume></Resume>
    </>
  )
}

export default App
