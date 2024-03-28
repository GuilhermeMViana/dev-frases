import { useState } from 'react'
import './App.css'
import logo from './assets/logo.png'

function App() {
  const [frase, setFrase] = useState("")
  const [category, setCategory] = useState(0)

  const allFrases = [
    {
      id: 1,
      nome: "Motivação",
      frases: [
        'Somos capazes de fazer muito mais do que imaginamos!',
        'A palavra impossível foi inventada para ser desafiada!',
        'Nós somos como o clima: feitos de dias de chuva e de sol!',
        'Há ainda tanta coisa linda na vida para se descobrir.',
        'Abra os olhos e aventure-se nessa jornada chamada vida!',
        'Há tantas pessoas que torcem por você na vida.'
      ]
  },
  {
    id:2,
    nome: "Bom dia!",
    frases: [
      'A melhor forma de acordar é pular da cama e se preparar para correr atrás de todos os seus sonhos! Bom dia, mundo! ✌',
      'Escreva em seu coração: todo dia é o melhor dia do ano.',
      'Bom dia! Não se esqueça que a sua alma é o reflexo do sol, tão forte e brilhante quanto um girassol. 🌻',
      'Não deixe que um dia nublado acabe com o seu espírito de alegria. Floresça como um girassol, que nasceu para buscar a luz do sol. Bom dia! 🌻',
      'Uma ótima manhã para todos! Leve a vida leve e brilhante como um campo de girassóis. 🌻🌻🌻'
    ]
  }
]

  function gerarFrase() {
    const fraseAleatoria = Math.floor(Math.random() * allFrases[category].frases.length)

    setFrase(`"${allFrases[category].frases[fraseAleatoria]}"`)
  }

  return (
    <>
      <img src={logo} className="m-auto max-h-60"/>
      <h1 className="text-center text-white font-bold text-4xl">Categorias</h1>
      <div className="flex justify-center items-center h-full">
        {allFrases.map((item, index) => (
          <button 
            className="border rounded border-violet-800 p-5 m-7 bg-violet-800 text-white"
            style={{
              borderWidth: item.nome === allFrases[category].nome ? 2: 0,
            }}
            key={item.id}
            onClick={ () => setCategory(index) }
          >
            {item.nome}
          </button>
        ))}
      </div>
      <div className="flex justify-center items-center h-full">
        <button 
        className="border rounded border-teal-800 p-5 m-auto bg-teal-800 text-white"
        onClick={gerarFrase}>
          Gerar Frase
        </button>
      </div>
      {frase !== "" && 
        <div className="flex justify-center items-center h-full">
          <h3 className="border rounded py-4 px-6 m-6 bg-slate-200 text-purple-600 text-center italic">
            {frase}
          </h3>
        </div>
      }
    </>
  )
}

export default App
