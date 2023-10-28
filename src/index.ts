const express =  require ("express");
const dotenv = require ("dotenv");
import { DatabaseConfig } from "./database/dbConnection";
import { routes } from "./routes";

dotenv.config();
DatabaseConfig.initializeDb();

const port = process.env.PORT || 7007

const app = express();

app.use(express.json());
app.use(routes);

export{app}

app.listen(port, () => console.log(`Server is running on port http://localhost:${port}`));