import InputComponent from "./Components/InputComponent";
import SomethingComponent from "./Components/SomethingComponent";
import useMouseLocation from "./Hook/useMouseLocation";
import useIsBottom from "./Hook/useIsBottom";

function App() {
  //   const mouseLocation = useMouseLocation();

  //   console.log(mouseLocation);

  const isBottom = useIsBottom();
  console.log(isBottom);
  return (
    <div style={{ height: "200vh", backgroundColor: "springgreen" }}>
      {/* <InputComponent />
      <SomethingComponent /> */}
      {/* <p>x좌표: {mouseLocation.x}</p>
      y좌표: {mouseLocation.y} */}
    </div>
  );
}
export default App;
