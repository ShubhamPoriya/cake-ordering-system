import CakeList from "../components/Cakes/CakeList";
import NewCakeForm from "../components/Cakes/NewCakeForm";
import Header from "../components/Layout/Header";

const Home = () => {
  return (
    <div>
      <Header />
      <CakeList />
      <NewCakeForm />
    </div>
  );
};

export default Home;
