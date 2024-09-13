import { useState } from 'react'
import './App.css'
import Container from './Components/Container'

function App() {
  const [data, setdata] = useState('')

  return (
    <>
      <div className=" py-[30px] bg-blue-600">
        <Container>
          <div className="w-[280px] mx-auto bg-white rounded-[10px]">
            <input
              type="text"
              className="border-[1px] border-black outline-none bg-black text-white text-right w-full text-[50px] rounded-t-[10px] h-[100px]" value={data} readOnly />
            <div>
              <div className="flex gap-x-3 justify-center py-2">
                <button className="w-[55px] h-[55px] text-[17px] text-white bg-red-700 rounded-[10px]" onClick={() => setdata('')}>AC</button>
                <button className="w-[55px] h-[55px] text-[17px] text-white bg-yellow-400 rounded-[10px]" onClick={() => setdata(data.slice(0, -1))}>DE</button>
                <button className="w-[55px] h-[55px] text-[17px] text-white bg-blue-800 rounded-[10px]" value="/" onClick={(e) => setdata(data + e.target.value)} > / </button>
                <button className="w-[55px] h-[55px] text-[17px] text-white bg-blue-800 rounded-[10px]" value="*" onClick={(e) => setdata(data + e.target.value)} > * </button>
              </div>

              <div className="flex gap-x-3 py-[10px] justify-center">
                <button className="w-[55px] h-[55px] text-[17px] text-white bg-red-400 rounded-[10px]" value="7" onClick={(e) => setdata(data + e.target.value)}>7</button>
                <button className="w-[55px] h-[55px] text-[17px] text-white bg-red-400 rounded-[10px]" value="8" onClick={(e) => setdata(data + e.target.value)}>8</button>
                <button className="w-[55px] h-[55px] text-[17px] text-white bg-red-400 rounded-[10px]" value="9" onClick={(e) => setdata(data + e.target.value)}>9</button>
                <button className="w-[55px] h-[55px] text-[17px] text-white bg-blue-800 rounded-[10px]" value="-" onClick={(e) => setdata(data + e.target.value)} >-</button>
              </div>

              <div className="flex gap-x-3 py-[10px] justify-center">
                <button className="w-[55px] h-[55px] text-[17px] text-white bg-red-400 rounded-[10px]" value="4" onClick={(e) => setdata(data + e.target.value)}>4</button>
                <button className="w-[55px] h-[55px] text-[17px] text-white bg-red-400 rounded-[10px]" value="5" onClick={(e) => setdata(data + e.target.value)}>5</button>
                <button className="w-[55px] h-[55px] text-[17px] text-white bg-red-400 rounded-[10px]" value="6" onClick={(e) => setdata(data + e.target.value)} >6 </button>
                <button className="w-[55px] h-[55px] text-[17px] text-white bg-blue-800 rounded-[10px]" value="+" onClick={(e) => setdata(data + e.target.value)}>+</button>
              </div>

              <div className="flex gap-x-3 py-[10px] justify-center">
                <button className="w-[55px] h-[55px] text-[17px] text-white bg-red-400 rounded-[10px]" value="1" onClick={(e) => setdata(data + e.target.value)}>1</button>
                <button className="w-[55px] h-[55px] text-[17px] text-white bg-red-400 rounded-[10px]" value="2" onClick={(e) => setdata(data + e.target.value)}>2</button>
                <button className="w-[55px] h-[55px] text-[17px] text-white bg-red-400 rounded-[10px]" value="3" onClick={(e) => setdata(data + e.target.value)}>3</button>
                <button className="w-[55px] h-[55px] text-[17px] text-white bg-blue-800 rounded-[10px]" value="%" onClick={(e) => setdata(data + e.target.value)}>%</button>
              </div>

              <div className="flex gap-x-3 py-[10px] justify-center">
                <button className="w-[55px] h-[55px] text-[17px] text-white bg-red-400 rounded-[10px]" value="0" onClick={(e) => setdata(data + e.target.value)}>0</button>
                <button className="w-[55px] h-[55px] text-[17px] text-white bg-red-400 rounded-[10px]" value="00" onClick={(e) => setdata(data + e.target.value)}>00</button>
                <button className="w-[55px] h-[55px] text-[17px] text-white bg-red-400 rounded-[10px]" value="." onClick={(e) => setdata(data + e.target.value)}>.</button>
                <button className="w-[55px] h-[55px] text-[17px] text-white bg-green-400 rounded-[10px]" value="=" onClick={() => {
                  try {
                    setdata(eval(data).toString())
                  } catch (error) {
                    setdata('Error')
                  }
                }}
                > = </button>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  )
}

export default App
