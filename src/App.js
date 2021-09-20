import { useEffect, useState } from 'react';
import './App.css';
import Button from './components/Button/Button';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import User from './components/User/User';

function App() {
  const [users, setUsers] = useState([]);
  const [charge, setcharge] = useState(100);
  const [openSidebar, setOpensidebar] = useState(false);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsers(data))
  }, [])

  const handleClick = () => {
    const newCharge = charge - 10;
    setcharge(newCharge);
  }

  useEffect(() => {
    if (charge < 0) setcharge(100);
  }, [charge]);


  const handleSidebar = () => setOpensidebar(!openSidebar);

  return (
    <div className="App">
      <div className={openSidebar ? 'overlay' : ''} onClick={handleSidebar}></div>
      <Sidebar openSidebar={openSidebar} handleSidebar={handleSidebar} />
      <Navbar openSidebar={openSidebar} handleSidebar={handleSidebar} />
      <h1 className="top-heading">Data from json placeholder</h1>
      <h3>Charge: {charge}%</h3>
      <Button handleClick={handleClick} text={charge ? 'Battery Down' : 'Charge up'} />
      <div className="cards">
        {
          users.map((user) => <User key={user.id} id={user.id} name={user.name} company={user.company.name} address={user.address.city} email={user.email} />)
        }
      </div>
    </div>
  );
}

export default App;
