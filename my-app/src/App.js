import React from "react"
import Card from "./components/card"
import Header from "./components/header"
import { useState, useEffect } from "react"
const App = () => {
  const [deals, setDeals] = useState(null)

  const getDeals = async () => {
    try {
      const response = await fetch("http://localhost:8000/deals", { method: "GET" })
      const data = await response.json()
      setDeals(data)
    } catch (err) {
      console.error(err);

    }
  }
  useEffect(() => {
    getDeals()

  }, [])
  return (
    <div className="app">
      <Header />
      <div>
        <h2>Best deals of the day!!</h2>
        <div className="feed">
        {deals && deals.map(deal => <Card key={deal.pos} item={deal} />)}
        </div>
      </div>
    </div>
  );
}

export default App;
