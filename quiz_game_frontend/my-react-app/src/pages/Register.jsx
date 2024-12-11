import { useState } from 'react';
import UserForm from '../components/UserForm';

const Register = () => {
  const [user, setUser] = useState(null);

  const onRegisterSuccess = (newUser) => {
    setUser(newUser);
  };

  return (
    <div>
      <h2>User Registration</h2>
      {!user ? (
        <UserForm onRegisterSuccess={onRegisterSuccess} />
      ) : (
        <div>
          <h3>Welcome, {user.name}!</h3>
          <p>Your roll number is {user.rollNumber}</p>
        </div>
      )}
    </div>
  );
};

export default Register;