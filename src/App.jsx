import { useLoaderData } from 'react-router-dom';
import './App.css'
import Coffee from './Coffee';
import { useState } from 'react';

function App() {

  const Soball = useLoaderData();
  const [all, setAll] = useState(Soball)

  const handleSubmit = (e) => {
    // e.preventDefault()
    const name = e.target.name.value;
    const url = e.target.url.value;
    const Info = { name, url }
    console.log(Info)

    fetch('http://localhost:3000/coffee', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(Info)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (data.insertedId) {
          alert("Success")
          e.target.reset()
        }
      })
  }



  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name='name' placeholder='Name' /> <br /> <br />
        <input type="text" name='url' placeholder='Photo URL' /> <br /> <br />
        <button>Submit</button>
      </form>

      <div className='text-black'>
        Total: {all.length}
        {
          all.map(aAll => <Coffee aAll={aAll} all={all} setAll={setAll}></Coffee>)
        }

      </div>
    </>
  )
}

export default App
