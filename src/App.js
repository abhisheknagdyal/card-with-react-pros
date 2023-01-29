import './App.css';
import Directory from './component/directory/directory';

function App() {

  const categories = [
    {
      id :1,
      imageUrl : "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=868&q=80",
      title:"Maroon Frok",
      price: 1.99,
      rating: 4.7,
      pCode: "MONDAY1"
    },
    {
      id :2,
      imageUrl : "https://plus.unsplash.com/premium_photo-1669703777692-0289d224bcc7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      title:"Baggy wheat shirt",
      price: 2.99,
      rating: 4.8,
      pCode: "MONDAY2"
    },
    {
      id :3,
      imageUrl : "https://images.unsplash.com/photo-1578681994506-b8f463449011?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
      title:"Black sweat shirt",
      price: 3.99,
      rating: 4.5,
      pCode: "MONDAY3"
    },
    {
      id :4,
      imageUrl : "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
      title:"Skin fit white Shirt",
      price: 4.99,
      rating: 4.2,
      pCode: "MONDAY4"
    },
  ]

  return (
    <div className="App">
      <div className='conatiner'>
        <Directory categories={categories}/>
      </div>
    </div>
  );
}

export default App;
