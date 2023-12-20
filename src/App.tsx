import './App.css'
import { useAppDispatch, useAppSelector } from './app/hooks'
import { increment, decrement } from './features/counter/counterSlice'

import { useFetchBreedsQuery } from './features/dogs/dogsApiSlice';

function App() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  const { data = [], isFetching } = useFetchBreedsQuery();

  const renderBreeds = () => {
    if (isFetching) return <p>Loading...</p>

    return data.map((breed) => <li key={breed.id}>{breed.name}</li>)
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>Dogs</p>
        <ul>{renderBreeds()}</ul>
      </header>
    </div>
  );
}
 
export default App