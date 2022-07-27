import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/home-page/home-page';
import TrainInfoPage from './pages/train-info-page/train-info-page';

function App() {
    return (
		<>
			<Routes>
				<Route path='/' element={<HomePage/>} />
				<Route path='/train-info/:id' element={<TrainInfoPage/>} />
			</Routes>
		</>
    );
};

export default App;
