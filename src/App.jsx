import { useState } from "react"

function App() {

  const [numero, setNumero] = useState(0)

 function somar() {
  setNumero(numero+1)
  if (numero >= 10) {
    setNumero(10)
    alert ('Não pode passar de 10!')
  }
 }

 function diminuir() {
  setNumero(numero-1)
  if (numero <= 0 ) {
    setNumero(0)
    alert('Não pode número negativo!')
  }

 }

  return (
    <>  
      <button onClick={somar}>+</button>
      <p>{numero}</p>
      <button onClick={diminuir}>-</button>

  
  
    </>
  )                                                                                       
}

export default App
