import React from 'react';
import Contact from "./components/contact"

function App() {
  const users = [
    {
      name: "Riccardo",
      online: false,
      avatar: "https://randomuser.me/api/portraits/men/48.jpg"
    },
    {
      name: "Riccardo",
      online: false,
      avatar: "https://randomuser.me/api/portraits/men/48.jpg"
    },
    {
      name: "Riccardo",
      online: false,
      avatar: "https://randomuser.me/api/portraits/men/48.jpg"
    }
  ]
  return (
    <div className="App">
      {users.map(user => (
        <Contact name={user.name} online=
          {user.online} avatar={user.avatar} />
      ))}

    </div>

  );
}

export default App;
