import './components/AddUser/addUser.css'
import AddUser from './components/AddUser/AddUser'
import Users from './components/Users/Users'
import './App.css'
function App() {

  return (
    <>
      <h2>User Management Application</h2>
      <div className='container-fluid'>
        <div className="row">
          <div className="col-4 part1">
            <AddUser />
          </div>
          <div className="col part2">
            <Users />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
