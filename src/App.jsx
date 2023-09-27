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
      showAlert('Enter a value', 'danger', true)
     
    }

    else if(name && isEditing){
      //Deal with edit
    } else {
      //Show alert
      const newItem = {id: new Date().getTime().toString(), title: name}
      setList([...list, newItem])
      setName('')
      console.log(list)
    }
  }

  const showAlert = (text='', type='', show=false) => {
    setAlert({text, type, show})
  }
  return (
   <div className="wrapper fcc mt-10">
    <div className="border h-[80vh] w-[90%] py-4 px-3">
      
    {alert.show && <Alert {...alert} removeAlert={showAlert}/>}
    <h2 className="text-center font-bold text-2xl m-3">Grocery List</h2>
    <form action="" onSubmit={handleSubmit}>
      <div className="">
        <input type="text" className="border px-2" placeholder="e.g eggs" value={name} 
        onChange={(e) => setName(e.target.value) }
        />
        <button className="bg-blue-200 px-3 rounded " type="submit">{isEditing ? 'Edit' : 'Submit'}</button>
      </div>
    </form>
    {list.length > 0 && (
  <div>
    <List items={list}/>
    <button className="text-center text-red-600 tracking-wide w-full mt-4"> Clear items</button>
  </div>
)  }
    </div>

   </div>
  )
}