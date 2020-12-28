import React, {useContext} from "react";
import {SecurityContext} from '../components/SecurityContext';

export default function LoginPage() {
  const {user, setUser} = useContext(SecurityContext);

    return (
      <div>
      <h2>LoginPage</h2>
      <pre>{JSON.stringify(user, null, 2)}</pre>
      {user? (
        <button onClick={() => setUser(null)}>Log out</button>
      ): (
        <button onClick={() => setUser("Authenticated")}>Log in</button>
      )}
      </div>
    );
  }