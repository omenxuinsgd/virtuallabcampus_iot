import { lazy, Suspense, useState, useEffect  } from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import routes from "./config";
import axios, { AxiosError } from "axios";
import { Styles } from "../styles/styles";
import { useSelector } from "react-redux";
import { useParams } from 'react-router-dom';


// Definisikan tipe untuk parameter dinamis (misalnya ID) jika diperlukan
interface RouteParams {
  id: string; // Sesuaikan dengan tipe data yang sesuai dengan ID Anda
  lab: string;
}

const Router = () => {
  const [jadwalLab, setJadwalLab] = useState([]);
  const [msg, setMsg] = useState("");
  const { lab } = useParams<RouteParams>();
  // const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    const getJadwalByLab = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/jadwal/perlab/${lab}`);
        setJadwalLab(response.data.lab);
      } catch (error) {
        if ((error as AxiosError).response) {
          // setMsg((error as AxiosError).response?.data.msg);
        }
      }
    };
    getJadwalByLab();
  }, [lab]);

  const { id } = useParams<RouteParams>();

  const location = useLocation();
  const isAsliPath = location.pathname === "/asli" || location.pathname === "/jebakan" || 
                      location.pathname === "/dashboard" || location.pathname === "/users"
                      || location.pathname === "/users/add" || location.pathname === `/users/edit/${id}`
                      || location.pathname === "/products/add" || location.pathname === `/products/edit/${id}`
                      || location.pathname === "/products" || location.pathname === "/Login"
                      || location.pathname === "/products/list" || location.pathname === "/jadwal/perlab/instrument"
                      || location.pathname === "/jadwal/perlab/astrofisika" || location.pathname === "/jadwal/perlab/geofisika"
                      || location.pathname === "/jadwal/perlab/geofisika" || location.pathname === "/jadwal/perlab/nuklir"
                      || location.pathname === "/jadwal/perlab/modeling" || location.pathname === "/jadwal/perlab/fismat"
                      || location.pathname === "/jadwal/perlab/karmat" || location.pathname === "/jadwal/perlab/workshop"
                      || location.pathname === "/jadwal/perlab/basic" || location.pathname === "/jadwal/perlab/advance"
                      || location.pathname === "/jadwal" || location.pathname === "/add/jadwal"
                      || location.pathname === "/add/labs" || location.pathname === "/labs"
                      || location.pathname === "/add/fasilitas" || location.pathname === "/list/news"
                      || location.pathname === "/add/news" || location.pathname === "/data/lab"
                      || location.pathname === "/virtuallab";

  return (
    <Suspense fallback={null}>
      <Styles />
      {!isAsliPath && <Header />}
      <Switch>
        {routes.map((routeItem) => {
          return (
            <Route
              key={routeItem.component}
              path={routeItem.path}
              exact={routeItem.exact}
              component={lazy(() => import(`../pages/${routeItem.component}`))}
            />
          );
        })}
      </Switch>
      {/* {!isAsliPath && <Footer />} */}
    </Suspense>
  );
};

export default Router;
