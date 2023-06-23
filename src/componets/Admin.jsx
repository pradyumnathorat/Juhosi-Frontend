import React, { useEffect, useState } from 'react'
import "./admin.css"
const Admin = () => {

  const [data, setData] = useState(null)

  const fetchData = async () => {
    try {
      const response = await fetch("https://mysql-0yei.onrender.com/customers")
      const data = await response.json();
      setData(data)
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <div className="main">
        {
          data && <table>
            <thead>
              <tr>
                <th>Item / Customer</th>
                <th>Customer1</th>
                <th>Customer2</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Quantity</th>
                <td>{data.customer1.totalQuantity}</td>
                <td>{data.customer2.totalQuantity}</td>
                <td>{data.customer1.totalQuantity + data.customer2.totalQuantity}</td>
              </tr>
              <tr>
                <th>Weight</th>
                <td>{data.customer1.totalWeight}</td>
                <td>{data.customer2.totalWeight}</td>
                <td>{data.customer1.totalWeight + data.customer2.totalWeight}</td>
              </tr>
              <tr>
                <th>Box-Count</th>
                <td>{data.customer1.totalBoxCount}</td>
                <td>{data.customer2.totalBoxCount}</td>
                <td>{data.customer1.totalBoxCount + data.customer2.totalBoxCount}</td>
              </tr>
            </tbody>
          </table>
        }
      </div>
    </>
  )
}

export default Admin