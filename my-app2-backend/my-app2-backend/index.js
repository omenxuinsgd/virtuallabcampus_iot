import express from "express"
import cors from "cors"
import session from "express-session"
import dotenv from "dotenv"
import UserRoute from "./routes/UserRoute.js"
import ProductRoute from "./routes/ProductRoute.js"
import AuthRoute from "./routes/AuthRoute.js"
import BorrowRoute from "./routes/BorrowRoute.js"
import db from "./config/Database.js"
import SequelizeStore from "connect-session-sequelize"
import LabsRoute from "./routes/LabRoute.js"
import fileUpload from "express-fileupload"
import NewsRoute from "./routes/NewsRoute.js"
import FasilitasRoute from "./routes/FasilitasRoute.js"

dotenv.config()

const app = express()

const sessionStore = SequelizeStore(session.Store)

const store = new sessionStore({
    db: db
})

// Sinkronisasi database
// ;(async () => {
//     try {
//       await db.sync();
//       console.log('Database synchronized');
//     } catch (error) {
//       console.error('Error synchronizing database:', error);
//     }
//   })();

app.use(session({
    secret: process.env.SESS_SECRET,
    resave: false,
    saveUninitialized: true,
    store: store,
    cookie: {
        secure: 'auto'
    }
}))

app.use(cors({
    credentials: true,
    origin: "http://localhost:3000"
}))

app.use(express.json())
app.use(fileUpload());
app.use(express.static("public"));
app.use(UserRoute)
app.use(ProductRoute)
app.use(AuthRoute)
app.use(BorrowRoute)
app.use(LabsRoute)
app.use(NewsRoute)
app.use(FasilitasRoute)

// store.sync()

app.listen(process.env.APP_PORT, () => {
    console.log("server up and running..")
})