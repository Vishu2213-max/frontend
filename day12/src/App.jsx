import { useState } from 'react';
import './App.css';
import axios from 'axios';
import { useEffect } from 'react';
import { Formik, Form, Field } from 'formik';

function App() {
  const [users, setUsers] = useState([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/todos");
        const newResponse = response.data.slice(0, 10);
        setUsers(newResponse);
      } catch (error) {
        alert("Error fetching users:", error);
      }
    };
    fetchUsers();
  }, []);

  const handleDelete = (button) => {
    const todoElement = button.parentElement.parentElement;
    const userId = todoElement.children[1].textContent; // Get the ID of the user being deleted
    todoElement.remove();
    alert(`User  with ID ${userId} has been deleted.`);
  };

  const handleToggle = (button) => {
    const todoElement = button.parentElement.parentElement;
    const targetElement = todoElement.querySelector('td:nth-child(4)');
    const currentStatus = targetElement.textContent === 'true';
    targetElement.textContent = !currentStatus ? 'true' : 'false';
    alert(`User 's completion status has been toggled `);
  };

  const handleSubmit = (values) => {
    setUsers(prev => [...prev, { ...values, id: prev.length + 1 }]); 
    setShowForm(false); 
  };

  return (
    <div>
      <h1>User Todos</h1>
      <table>
        <thead>
          <tr>
            <th>User ID</th>
            <th>ID</th>
            <th>Title</th>
            <th>Completed</th>
            <th>Toggle btn</th>
            <th>Delete btn</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.userId}</td>
              <td>{user.id}</td>
              <td>{user.title}</td>
              <td>{user.completed ? 'true' : 'false'}</td>
              <td>
                <button onClick={(e) => handleToggle(e.currentTarget)}>
                  Toggle
                </button>
              </td>
              <td>
                <button onClick={(e) => handleDelete(e.currentTarget)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={() => setShowForm(!showForm)}>Add new user</button>

      {showForm && (
        <Formik
          initialValues={{ userId: '', title: '', completed: false }}
          onSubmit={handleSubmit}
        >
          {({ setFieldValue }) => (
            <Form>
              <Field
                type="number"
                name="userId"
                placeholder="User   ID"
                required
              />
              <Field
                type="text"
                name="title"
                placeholder="Title"
                required
              />
              <select
                name="completed"
                onChange={(e) => setFieldValue('completed', e.target.value)}
              >
                <option value="false">False</option>
                <option value="true">True</option>
              </select>
              <button type="submit">Add User</button>
            </Form>
          )}
        </Formik>
      )}
    </div>
  );
}

export default App;