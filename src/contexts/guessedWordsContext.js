import React from 'react'

// no default value
const guessedWordsContext = React.createContext();

const useGuessedWordsContext = () => {
  return React.useContext(guessedWordsContext)
}

function GuessedWordsProvider({children}) {
  const [guessedWords, setGuessedWords] = React.useState([])

  const value = React.useMemo(() => [guessedWords, setGuessedWords], [guessedWords])

  return (
    <guessedWordsContext.Provider value={value}>
      {children}
    </guessedWordsContext.Provider>
  )
}

export default {GuessedWordsProvider, useGuessedWordsContext}