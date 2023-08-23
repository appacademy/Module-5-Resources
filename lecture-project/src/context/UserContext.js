import React, { useState } from "react";

export const UserContext = React.createContext();

export default function UserProvider(props) {
  const [username, setUsername] = useState("smith")
  const [email, setEmail] = useState("user@useremail.com")
  const [profilePicUrl, setProfilePicUrl] = useState("https://pic.png")

  return (
    <UserContext.Provider
      value={{
        username,
        userId: 0,
        profilePicUrl,
        email,
        fName: "",
        lName: "",
        setUsername,
        setEmail,
        setProfilePicUrl
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
}
