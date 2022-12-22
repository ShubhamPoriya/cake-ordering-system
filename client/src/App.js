import CakeList from "./components/Cakes/CakeList";
import NewCakeForm from "./components/Cakes/NewCakeForm";
import Header from "./components/Layout/Header";
import SideNav from "./components/Layout/SideNav";

const App = () => {
  return (
    <div>
      <SideNav />
      <Header />
      <CakeList />
      <NewCakeForm />
    </div>
  );
};

export default App;
