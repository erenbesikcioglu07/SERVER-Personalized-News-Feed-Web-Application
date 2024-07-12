require('dotenv').config()
import express , {Express} from 'express';
import rootRouter from './routes';
import helmet from 'helmet';

const cors = require('cors')
const port = process.env.PORT || 3001;
const app:Express = express();

app.use(cors())
app.use(express.json())

app.use('/api',rootRouter);

app.set("trust proxy", true);
app.use(helmet.contentSecurityPolicy());
app.use(helmet.dnsPrefetchControl());
app.use(helmet.frameguard());
app.use(helmet.hidePoweredBy());
app.use(helmet.hsts());
app.use(helmet.ieNoOpen());
app.use(helmet.noSniff());
app.use(helmet.permittedCrossDomainPolicies());
app.use(helmet.referrerPolicy());
app.use(helmet.xssFilter());


app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});