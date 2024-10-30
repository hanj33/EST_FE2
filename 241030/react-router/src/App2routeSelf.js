import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useLocation,
  Outlet,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Link to="/"> home </Link>
      {/* <Link to="/products"> products </Link> */}
      <Link to="/products/1"> products111 </Link>
      <Link to="/products/2"> products222 </Link>
      <Link to="/products/3"> products333 </Link>
      <Link to="/products/4"> products444 </Link>
      <Link to="/notice"> notice </Link>
      <Link to="/cart"> cart </Link>
      <Link to="/users"> users </Link>
      <Link to="/coupon"> coupon </Link>
      <Link to="/question"> question </Link>
      <Link to="/users"> users </Link>
      {/* 라우트를 감싸줍니다. */}
      <Routes>
        <Route path="/" element={<Index />} />

        <Route path="/products/:id" element={<products />}>
          <Route path="notice" element={<notice />} />
        </Route>
        <Route path="/cart" element={<cart />} />
        <Route path="/users" element={<users />}>
          <Route path="/coupon" element={<coupon />} />
          <Route path="/question" element={<question />} />
          <Route path="/notice" element={<notice />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function Index() {
  return <h1>hello world0</h1>;
}

function products({ name }) {
  return <h1>{name} world1</h1>;
}

// function notice() {
//   return <h1>hello world2</h1>;
// }

function cart() {
  return <h1>hello world3</h1>;
}

function users() {
  return <h1>hello Blog</h1>;
}

function coupon() {
  return (
    <>
      <h1>hello Hojun container</h1>
      <div>
        <Outlet />
      </div>
    </>
  );
}

function question() {
  return <h2>hello Hojun index</h2>;
}

function notice() {
  return <h2>hello Hojun 1</h2>;
}

export default App;
