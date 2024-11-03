
import './App.css'
import RefForm from './component/RefForm/RefForm'
import Reusable from './component/Reusable/Reusable'
import SimpleForm from './component/SimpleForm/SimpleForm'
import StatefulForm from './component/StateFulForm/StatefulForm'

function App() {

  const handleSignUpSubmit = e => {
    e.preventDefautl();
  }


  const handleUpdateProfile = e =>{
    e.preventDefautl();
  }

  return (
    <>

      <h1>Vite + React</h1>
      {/* <SimpleForm></SimpleForm>       */}
      {/* <StatefulForm></StatefulForm> */}
      {/* <RefForm></RefForm> */}
      <Reusable 
      formTitle={'Sing UP'} 
      handleSubmited={handleSignUpSubmit}
      ></Reusable>
      <Reusable 
      formTitle={'Profile Update'} 
      handleSubmited={handleUpdateProfile} 
      submitBtnText='Update'
      ></Reusable>
    </>
  )
}

export default App
