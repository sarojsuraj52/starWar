import { useEffect, useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { getPeople } from "./redux/peopleSlice";
import PeopleTable from "./components/PeopleTable";

function App() {
  const people = useSelector((state) => state.people.people);
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPeople());
  }, []);
  console.log("check people", people);

  return (
    <>
      <PeopleTable />
    </>
  );
}

export default App;
