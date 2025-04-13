
import './App.css';
import Header from './components/Header';
import AddExpense from './components/AddExpense';
import SearchBar from './components/SearchBar';
import Table from './components/Table';
import { useState } from 'react';

function App() {

  const data = [
    {name:'shoes', details:'new nike dunks', category:'shoes', amount:4500, date:'6/3/2024'},
    {name:'shirt', details:'white shirt', category:'clothes', amount:2300, date:'8/3/2024'},
    {name:'phone', details:'samsung', category:'smart phone', amount:30000, date:'5/5/2024'},
    {name:'lunch', details:'chapo na dengu', category:'food', amount:300, date:'6/7/2024'},
    {name:'home', details:'wednesday night', category:'transport', amount:400, date:'5/25/2024'},
    {name:'loan', details:'bank loan', category:'money', amount:40000, date:'12/29/2024'},
  ]

  const headers = ['name', 'details', 'category', 'amount', 'date']

  const [expenses, setExpenses] = useState(data)

  const [search,setSearch] = useState('')

  const AddNewExpense = (expense) => {
    setExpenses([...expenses,expense]);
  }

  const filterData = expenses.filter((expense) => 
  Object.values(expense).join(' ').toLowerCase()
  .includes(search.toLowerCase()))

  return  ( 
<div>
<Header/>
<SearchBar search={search} setSearch={setSearch}/>
<Table headers={headers} data={filterData}/>
<AddExpense onAddExpense ={AddNewExpense}/>

</div>
  )}

 


export default App;
