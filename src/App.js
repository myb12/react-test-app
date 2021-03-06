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

  const sidebarOpen = () => setOpensidebar(true);

  const sidebarClose = (e) => {
    setOpensidebar(false);
    e.target.closest('.sidebar').scrollTo(0, 0);
  }

  return (
    <div className="App">
      <div className={openSidebar ? 'overlay' : ''} onClick={handleSidebar}></div>
      <Sidebar openSidebar={openSidebar} handleSidebar={handleSidebar} sidebarOpen={sidebarOpen} sidebarClose={sidebarClose} />
      <Navbar openSidebar={openSidebar} handleSidebar={handleSidebar} />
      <h1 className="top-heading" style={{ paddingTop: '70px' }}>Data from json placeholder</h1>
      <h3>Charge: {charge}%</h3>
      <Button handleClick={handleClick} text={charge ? 'Battery Down' : 'Charge up'} />
      <div className="cards">
        {
          users.map((user) => <User key={user.id} user={user}  />)
        }
      </div>
    </div>
  );
}

export default App;
