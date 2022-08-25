import express from 'express'
import ReactDOM from 'react-dom/server'
import {indexTemplate} from './indexTemplate'
import {App} from "../App";
import axios from 'axios';
import compression from 'compression';
import helmet from 'helmet';
const app = express();


const PORT = process.env.PORT || 3000;
const IS_DEV = process.env.NODE_ENV.trim() !=='production';

if (IS_DEV) {
    app.use(compression());
    app.use(helmet({
        contentSecurityPolicy: false,
    }));
}


app.use('/static', express.static('./dist/client'))


app.get('/auth',(req,res)=>{
  //req.query.code;
  axios.post(
      'https://www.reddit.com/api/v1/access_token',
      `grant_type=authorization_code&code=${req.query.code}&redirect_uri=https://skillbox-react-reddit-app.herokuapp.com/auth`,
      {
        auth: {username: process.env.CLIENT_ID.trim(), password: process.env.SECRET.trim() },
        headers: {'Content-type': 'application/x-www-form-urlencoded'}
      }
  ).then(({data}) => {

    res.send(indexTemplate(ReactDOM.renderToString(App()), data['access_token']))
  }).catch(console.log);
})

//app.get('/posts',(req,res)=>{
  //  res.send(indexTemplate(ReactDOM.renderToString(App())))
//})

app.get('*',(req,res)=>{
    res.send(indexTemplate(ReactDOM.renderToString(App())))
})

app.listen(PORT,()=>{
  console.log(`server is now started on port http://localhost:${PORT}`)
})
