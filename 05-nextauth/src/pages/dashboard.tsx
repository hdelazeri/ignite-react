import { NextPage } from "next";
import { useContext } from "react";

import { AuthContext } from "../contexts/AuthContext";

const Dashboard: NextPage = () => {
  const { user } = useContext(AuthContext)

  return (
    <h1>Dashboard: {user?.email}</h1>
  )
}

export default Dashboard;