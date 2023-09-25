import { useState } from "react"
import Alert from './components/Alert'
import List from './components/List'




export default function App() {
  const [name,setName] = useState('')
  const [isEditing, setIsEditing] = useState(false)
  const [editId, setEditId] = useState(null);
  const [list, setList] = useState([])
  const [alert, setAlert] = useState({text: '', type: '', show: false})

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!name){
      //Display alert
    }

    else if(name && isEditing){
      //Deal with edit
    } else {
      //Show alert
      const newItem = {id: new Date.getTime().toString(), title: name}
      setList([...list, newItem])
      setName('')
      console.log('click')
    }
  }
  return (
   <div className="wrapper fcc mt-10">
    <div className="border h-[80vh] w-[90%] py-4 px-3">
    {alert.show ?? <Alert/>}
    <h2 className="text-center font-bold text-2xl mb-3">Grocery List</h2>
    <form action="" onSubmit={handleSubmit}>
      <div className="">
        <input type="text" className="border" placeholder="e.g eggs" name={name}/>
        <button className="bg-blue-200 w-[34%]" type="submit">{isEditing ? 'Edit' : 'Submit'}</button>
      </div>
    </form>
    <List items={list}/>
    <button className="text-center text-red-600 tracking-wide w-full mt-4"> Clear items</button>
    </div>

   </div>
  )
}