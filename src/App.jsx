import BackgroundVideo from './assets/components/land'
import Card from './assets/components/facultyCard'
import About from './assets/components/about'
function App() {

  return (
      <div>
        <BackgroundVideo/>
        <About/>
        <Card name={"Pranshu Pandey"} designation={"HOD"} employeeId={"EIC/2022/007"} qualification={"B.Tech"} joining={"2022-09-01"} phone={"+91 1234567890"} email={"XJ9L8@example.com"} imgsrc={"/pranshu.jpg"}/>
      </div>
  )
}

export default App
