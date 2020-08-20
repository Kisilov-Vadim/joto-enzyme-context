import axios from 'axios';

export const getSecretWord = async (setSecretWord) => {
  const response = await axios.get('https://api.datamuse.com/words?ml=ringing+in+the+ears');
  let randomNum = Math.floor(Math.random() * (response.data.length - 0)) + 0; 
  setSecretWord(response.data[randomNum].word);
}

// default export for mocking convenience
export default {
  getSecretWord,
}
