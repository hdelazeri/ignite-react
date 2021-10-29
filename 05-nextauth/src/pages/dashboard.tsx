import { NextPage } from "next";
import { useContext, useEffect } from "react";

import { AuthContext } from "../contexts/AuthContext";
import { api } from "../services/api";

const Dashboard: NextPage = () => {
  const { user } = useContext(AuthContext)

  useEffect(() => {
    api.get('/me')
      .then(console.log)
      .catch(console.log)
  }, [])

  return (
    <h1>Dashboard: {user?.email}</h1>
  )
}

export default Dashboard;