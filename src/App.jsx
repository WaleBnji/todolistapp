import { useEffect, useState } from 'react';
import Alert from './components/Alert';
import List from './components/List';
import Image from './assets/grocery.jpg'

const getLocalStorage = () => {
  const list = localStorage.getItem('list');
  if (list) {
    return JSON.parse(localStorage.getItem('list'));
  } else {
    return [];
  }
};

export default function App() {
  const [name, setName] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [list, setList] = useState(getLocalStorage());
  const [alert, setAlert] = useState({ text: '', type: '', show: false });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name) {
      //Display alert
      showAlert('Enter a value', 'danger', true);
    } else if (name && isEditing) {
      setList(
        list.map((item) => {
          if (item.id === editId) {
            return { ...item, title: name };
          }
          return item;
        })
      );
      setIsEditing(false);
      setEditId(null);
      setName('');
      showAlert('Item edited', 'success', true);
    } else {
      showAlert('Item added', 'success', true);
      const newItem = { id: new Date().getTime().toString(), title: name };
      setList([...list, newItem]);
      setName('');
      console.log(list);
    }
  };

  const showAlert = (text = '', type = '', show = false) => {
    setAlert({ text, type, show });
  };

  const clearList = () => {
    showAlert('Item removed', 'danger', true);
    setList([]);
  };

  const removeItem = (id) => {
    showAlert('Item removed', 'danger', true);
    setList(list.filter((item) => item.id !== id));
  };

  const editItem = (id) => {
    const specificItem = list.find((item) => item.id === id);
    setIsEditing(true);
    setEditId(id);
    setName(specificItem.title);
  };

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list));
  }, [list]);

  return (
    <div className='wrapper fcc mt-10'>
      <div className='border h-[80vh] w-[90%] relative'>
        <img src={Image} alt="" className='h-[350px] w-full object-cover z-[-20]'/>
        {alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}
        <h2 className='text-center font-bold text-4xl  absolute top-[10rem] left-11 bg-white p-3'>Grocery List</h2>
        <div className='py-3 px-3'>

        <form action='' onSubmit={handleSubmit} className='mt-4'>
          <div className=''>
            <input
              type='text'
              className='border px-2'
              placeholder='e.g eggs'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <button className='bg-blue-200 px-3 rounded ' type='submit'>
              {isEditing ? 'Edit' : 'Submit'}
            </button>
          </div>
        </form>
        {list.length > 0 && (
          <div>
            <List items={list} removeItem={removeItem} editItem={editItem} />
            <button
              className='text-center text-red-600 tracking-wide w-full mt-4'
              onClick={clearList}
            >
              {' '}
              Clear items
            </button>
          </div>
        )}
        </div>
      </div>
    </div>
  );
}
