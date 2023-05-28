import each from 'jest-each'
import UserProfile from './components/UserProfile/index'
import './App.css'

const userDetailsList = [
  {
    uniqueNo: 1,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'Esther Howard',
    role: 'Software Developer',
  },
  {
    uniqueNo: 2,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png',
    name: 'Floyd Miles',
    role: 'Software Developer',
  },
  {
    uniqueNo: 3,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png',
    name: 'Jacob Jones',
    role: 'Software Developer',
  },
]

const App = () => (
  <div className="list-container">
    <h1 className="heading">Users List App</h1>
    <div className="card-container">
      <ul>
        {userDetailsList.map(eachItem => (
          <UserProfile userDetails={eachItem} key={eachItem.uniqueNo} />
        ))}
      </ul>
    </div>
  </div>
)
export default App
