import SealandDashboard from "../pages/panels/Sealand/SealandDashboard";

const routes = [
  { path: "/", element: <h1>this is Home</h1> },
  //----- Sealand panel -----
  { path: "/sealand", element: <SealandDashboard /> },
  // ----- NotFound -----
  { path: "/*", element: <h1>this is error page</h1> },
];

export default routes;
