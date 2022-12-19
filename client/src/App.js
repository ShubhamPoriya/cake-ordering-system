import CakeList from "./components/Cakes/CakeList";
import NewCakeForm from "./components/Cakes/NewCakeForm";
import Header from "./components/Layout/Header";

const App = () => {
  return (
    <div>
      <Header />
      <CakeList />
      <NewCakeForm />
    </div>
  );
};

export default App;
