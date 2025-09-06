import { useState } from 'react'
import './App.css'

const FaqItem = ({ Question, Answer }) => {
  const [show, setShow] = useState(false);

  const toggleshow =() => {
    setShow(!show);
  };

  return(
    <div className={`faq-item ${show ? "active" : ""} mb-5 border-1 border-gray-500 rounded-xl overflow-hidden`}>
      <div onClick={toggleshow} className="faq-item-header text-white p-5 bg-gray-500 text-md cursor-pointer hover:bg-gray-600 ease-in-out">{Question}</div>
      <div className="faq-item-body bg-white max-h-0 overflow-hidden ease-in-out">
        <div className="faq-item-body-container p-3 text-md text-gray-900 ">
          {Answer}
        </div>
      </div>
    </div>
  )
};
const FaqAccordion = ({data}) =>{
  return (
  <div className="faq-accordion max-w-xl m-5">
    <h2 className='text-2xl font-bold text-white text-center'>FAQs</h2>
    {data.map((item)=>(
      <FaqItem key={item.Id} Question={item.Question} Answer={item.Answer}/>
      ))}
  </div>
  );
}

const data = [
  {Id:1, Question: "What is React ?", Answer: "React is a front-end Javascript library for building user interfaces or UI components."},
  {Id:2, Question: "What are the benefits of React?", Answer: "Some of the benefits of React are: it is fast,scalable,modular,easy to debug,and supports server-side rendering."},
  {Id:3, Question: "What are the main concepts of React?", Answer: "Some of the main concepts of React are: components,props,state,hooks, lifecycle methods, and JSX."},

];

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="App">
        <FaqAccordion data={data} />
      </div>
    </>
  )
}

export default App
