import CoverGenertor from "./components/CoverGenertor/CoverGenertor"
import CoverLetter from "./components/CoverLetter/CoverLetter"
import Header from "./components/Header/Header"
import Hero from "./components/Hero/Hero"
import SubmitBetterJobs from "./components/SubmitBetterJobs/SubmitBetterJobs"



function App() {


  return (
    <>
      <Header></Header>
      <Hero></Hero>
      <SubmitBetterJobs></SubmitBetterJobs>
      <CoverLetter></CoverLetter>
      <CoverGenertor></CoverGenertor>
    </>
  )
}

export default App
