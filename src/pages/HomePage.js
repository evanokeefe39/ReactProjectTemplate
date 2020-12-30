import React, {useContext} from "react";
import {SecurityContext} from '../components/SecurityContext';


export default function HomePage() {
    const {user} = useContext(SecurityContext);

    return (
        <h2>Hi {user.user}</h2>
    );
  }