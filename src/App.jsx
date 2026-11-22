import { useState } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Card from "./components/Card";
import Button from "./components/Button";
import Form from "./components/Form";

function App() {

  const [count, setCount] = useState(0);

  const [users, setUsers] = useState([]);

  const addUser = (name) => {
    setUsers([...users, name]);
  };

  return (
    <div>

      {/* Header Component */}
      <Header title="React Components Practice" />

      <main id="home">

        <h1>Welcome to React</h1>
        <p>Learning reusable components using Props and State.</p>

        {/* Card Components */}
        <section id="components">
          <h2>Reusable Components</h2>

          <div className="card-container">

            <Card
              title="Header"
              description="Displays the website title and navigation."
            />

            <Card
              title="Footer"
              description="Displays copyright information."
            />

            <Card
              title="Card"
              description="Displays reusable content using props."
            />

            <Card
              title="Button"
              description="Handles click events and user actions."
            />

            <Card
              title="Form"
              description="Accepts and manages user input."
            />

          </div>
        </section>

        {/* Button and State */}
        <section className="counter">
          <h2>Counter Example</h2>

          <h3>Count: {count}</h3>

          <Button
            text="Increase Count"
            onClick={() => setCount(count + 1)}
          />

          <Button
            text="Reset Count"
            onClick={() => setCount(0)}
          />
        </section>

        {/* Form and Dynamic Rendering */}
        <section id="contact">
          <h2>Add Users</h2>

          <Form onAdd={addUser} />

          <div className="user-list">
            <h3>Registered Users</h3>

            {users.length === 0 ? (
              <p>No users added yet.</p>
            ) : (
              users.map((user, index) => (
                <Card
                  key={index}
                  title={`User ${index + 1}`}
                  description={user}
                />
              ))
            )}

          </div>
        </section>

      </main>

      {/* Footer Component */}
      <Footer year={2026} name="My React App" />

    </div>
  );
}

export default App;