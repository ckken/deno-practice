import { React } from "./dep.ts";

const App = () => {
  const [count, setCount] = React.useState(0);

  const garden = {
    backgroundColor: 'green',
    height: 'auto',
    fontSize: '30px',
    maxWidth: '400px',
    padding: '20px 5px',
    width: '100%'
  };

  return (
    <>
      hello
    </>
  );
};

export default App;