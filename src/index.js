import dotenv from "dotenv"
import connectDB from "./dbConfig/dbConfig.js"
import app from "./app.js"


dotenv.config({
    path: './.env'
})


connectDB()
.then(() => {
    app.listen(process.env.PORT, () => {
        console.log(`Server running on port ${process.env.PORT}`);
    }).on('error', (error) => {
        console.error('Error connecting to the server:', error);
    });
})
.catch(() => {
    console.error("Error connecting to the database");
});

app.get('/',(req,res)=>{
    try{
    res.send('Hello World!')
    }
    catch{
        console.log('something went wrong')
    }
})
