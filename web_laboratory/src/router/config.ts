
const routes = [
  {
    path: ["/", "/home"],
    exact: true,
    component: "Home",
  },
  {
    path: ["/asli"],
    exact: true,
    component: "Asli",
  },
  {
    path: ["/jebakan"],
    exact: true,
    component: "Asli",
  },
  {
    path: ["/dashboard"],
    exact: true,
    component: "Dashboard/Dashboard.jsx",
  },
  {
    path: ["/users"],
    exact: true,
    component: "Dashboard/User.jsx",
  },
  {
    path: ["/users/add"],
    exact: true,
    component: "Dashboard/AddUser.jsx",
  },
  {
    path: ["/users/edit/:id"],
    exact: true,
    component: "Dashboard/EditUser.jsx",
  },
  {
    path: ["/products/add"],
    exact: true,
    component: "Dashboard/AddProduct.jsx",
  },
  {
    path: ["/products/edit/:id"],
    exact: true,
    component: "Dashboard/EditProduct.jsx",
  },
  {
    path: ["/products"],
    exact: true,
    component: "Dashboard/Products.jsx",
  },
  {
    path: ["/products/list"],
    exact: true,
    component: "Dashboard/Products2.jsx",
  },
  {
    path: ["/Login"],
    exact: true,
    component: "Dashboard/Login.jsx",
  },
  {
    path: ["/virtuallab"],
    exact: true,
    component: "Dashboard/KartuVirtualLab.jsx",
  },
  {
    path: ["/jadwal/perlab/:lab"],
    exact: true,
    component: "Dashboard/Jadwal.jsx",
  },
  {
    path: ["/labs"],
    exact: true,
    component: "Dashboard/ListLab.jsx",
  },
  {
    path: ["/data/perlab/:lab"],
    exact: true,
    component: "Dashboard/KartuLab.jsx",
  },
  {
    path: ["/edit/fasilitas/:id"],
    exact: true,
    component: "Dashboard/EditLab.jsx",
  },
  {
    path: ["/edit/labs/:id"],
    exact: true,
    component: "Dashboard/EditLab2.jsx",
  },
  {
    path: ["/data/perlab/detail/labs/:id"],
    exact: true,
    component: "Dashboard/DetailLab.jsx",
  },
  {
    path: ["/news/:id"],
    exact: true,
    component: "Dashboard/DetailNews.jsx",
  },
  {
    path: ["/add/labs"],
    exact: true,
    component: "Dashboard/AddLab.jsx",
  },
  {
    path: ["/list/news"],
    exact: true,
    component: "Dashboard/ListNews.jsx",
  },
  {
    path: ["/add/news"],
    exact: true,
    component: "Dashboard/AddNews.jsx",
  },
  {
    path: ["/news"],
    exact: true,
    component: "Dashboard/KartuNews.jsx",
  },
  {
    path: ["/jadwal"],
    exact: true,
    component: "Dashboard/ListJadwal.jsx",
  },
  {
    path: ["/add/jadwal"],
    exact: true,
    component: "Dashboard/AddJadwal.jsx",
  },
  {
    path: ["/edit/jadwal/:id"],
    exact: true,
    component: "Dashboard/EditJadwal.jsx",
  },
  {
    path: ["/add/fasilitas"],
    exact: true,
    component: "Dashboard/AddFasilitas.jsx",
  },
  {
    path: ["/data/perfas/:lab"],
    exact: true,
    component: "Dashboard/KartuFasilitas.jsx",
  },
];

export default routes;
