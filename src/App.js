import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Orders from './components/Orders/Orders';
import Main from './Layout/Main';
import Shop from './components/Shop/Shop';
import About from './components/About/About';
import Inventory from './components/Inventory/Inventory';
import { ProductsAndCartLoader } from './Loaders/ProductsAndCartLoader';
import Login from './components/login/Login';
import SignUp from './components/signUp/SignUp';
import Shipping from './components/Shipping/Shipping';
import PrivateRoutes from './routes/PrivateRoutes';


function App() {
  const router = createBrowserRouter([
{ 
  path : '/' , element : <Main></Main>,
  children: [
    
    {path : '/',
     element : <Shop></Shop>},

    {path : '/orders' ,
    loader : ProductsAndCartLoader,
    element : <Orders></Orders>},

    {path : '/inventory',
     element : <PrivateRoutes><Inventory></Inventory></PrivateRoutes>},

    {path : '/shipping',
     element : <PrivateRoutes><Shipping></Shipping></PrivateRoutes>},

    {path : '/about', 
    element : <About></About>},

    {path : '/login',
    element : <Login></Login>},

    {path : '/signup',
    element : <SignUp></SignUp>}
  ]
},
  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
