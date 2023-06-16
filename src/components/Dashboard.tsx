import React,{useState} from 'react';
import '../App.css';
import './styles.css'
import InputField from './InputField';
import { Todo } from '../model';
import { TodoList } from './TodoList';
import {DragDropContext, DropResult} from 'react-beautiful-dnd';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {AiOutlineLogin} from 'react-icons/ai'

const Dashboard:React.FC = () => {

    const navigate = useNavigate();

    useEffect(() => {
      const token = localStorage.getItem('isLoggedIn');
      if (!token) {
        navigate('/');
      }
    }, [navigate]);

    const [todo, setTodo] = useState<string>("");
  const [todos,setTodos] = useState<Todo[]>([]);
  const [completedTodos, setcompletedTodos] =useState<Todo[]>([])
  const onDragEnd=(result:DropResult)=>{

    const {source, destination} =result;
    if(!destination) return;
    if(destination.droppableId===source.droppableId && destination.index===source.index) return;
    let add,active=todos,complete=completedTodos;
    if(source.droppableId==='TodosList'){
      add=active[source.index];
      active.splice(source.index,1);
    }else{
      add=complete[source.index];
      complete.splice(source.index,1);
    }


    if(destination.droppableId==='TodosList'){
      active.splice(destination.index,0,add)
    }else{
      complete.splice(destination.index,0,add)
    }

    setcompletedTodos(complete);
    setTodos(active);
  }

  const handleAdd= (e:React.FormEvent) => {
    e.preventDefault()

    if(todo){
      setTodos([...todos, {id:Date.now(), todo, isDone:false}])
      setTodo("")
    }

  }
  const logout =()=>{
    localStorage.removeItem('isLoggedIn');
    navigate('/');
  }
  return (
    <DragDropContext onDragEnd={onDragEnd}>
    <div className='App'>
        <span className="heading">Tasker </span>
        <button className='logout' onClick={logout}><AiOutlineLogin size={25} /></button>
        <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
        <TodoList todos={todos} setTodos={setTodos} completedTodos={completedTodos} setCompletedTodos={setcompletedTodos} />
    </div>
  </DragDropContext>
  )
}

export default Dashboard