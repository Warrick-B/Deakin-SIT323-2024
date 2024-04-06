const express= require("express");
const res = require("express/lib/response");
const app= express();
const fs = require('fs');
const winston = require('winston'); // winston - universal logging library 
const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    defaultMeta: { service: 'calculate-service' },
    transports: [
      //
      // - Write all logs with importance level of `error` or less to `error.log`
      // - Write all logs with importance level of `info` or less to `combined.log`
      //
      new winston.transports.File({ filename: 'error.log', level: 'error' }),
      new winston.transports.File({ filename: 'combined.log' }),
    ],
  });
  
  //
  // If we're not in production then log to the `console` with the format:
  // `${info.level}: ${info.message} JSON.stringify({ ...rest }) `
  //
  if (process.env.NODE_ENV !== 'production') {
    logger.add(new winston.transports.Console({
      format: winston.format.simple(),
    }));
  }

// Function to add two numbers
const add= (n1,n2) => {
  return n1+n2;
}

// Route for addition operation
app.get("/add", (req,res)=>{
  try{

    //n1 and n2 values 
      const n1= parseFloat(req.query.n1);
      const n2=parseFloat(req.query.n2);
      if(isNaN(n1)) {
          logger.error("n1 is incorrectly defined please try again with a integer"); //Error to be logged and thrown if n1 is not a integer
          throw new Error("n1 is incorrectly defined please try again with a integer");
      }
      if(isNaN(n2)) {
          logger.error("n2 is incorrectly defined please try again with a integer"); //Error to be logged and thrown if n2 is not a integer
          throw new Error("n2 is incorrectly defined please try again with a integer");
      }
      
      logger.info('Parameters '+n1+' and '+n2+' received for addition'); // if no error log calculation
      const result = add(n1,n2); //call function to add n1 and n2
      res.status(200).json({outcome: "The calculation was Successful", statuscocde:200, data: result }); //Successful response to client containg JSON object
  } catch(error) { 
      console.error(error)
      res.status(500).json({outcome: "The Calculation Failed", statuscocde:500, msg: error.toString() }) //Unsuccessful response to client containg JSON object with error message
  }
});

// Function to subtract two numbers
const sub= (n1,n2) => {
  return n1-n2;
}

// Route for subtraction operation
app.get("/sub", (req,res)=>{
  try{
      //n1 and n2 values 
      const n1= parseFloat(req.query.n1);
      const n2=parseFloat(req.query.n2);
      if(isNaN(n1)) {
          logger.error("n1 is incorrectly defined please try again with a integer"); //Error to be logged and thrown if n1 is not a integer
          throw new Error("n1 is incorrectly defined please try again with a integer");
      }
      if(isNaN(n2)) {
          logger.error("n2 is incorrectly defined please try again with a integer"); //Error to be logged and thrown if n2 is not a integer
          throw new Error("n2 is incorrectly defined please try again with a integer");
      }
      
      logger.info('Parameters '+n1+' and '+n2+' received for subtraction'); // if no error log calculation
      const result = sub(n1,n2); //call function to subtract n1 from n2
      res.status(200).json({outcome: "The calculation was Successful", statuscocde:200, data: result }); //Successful response to client containg JSON object
  } catch(error) { 
      console.error(error)
      res.status(500).json({outcome: "The Calculation Failed", statuscocde:500, msg: error.toString() }) //Unsuccessful response to client containg JSON object with error message
  }
});

// Function to divide two numbers
const div= (n1,n2) => {
  return n1/n2;
}

// Route for division operation
app.get("/div", (req,res)=>{
  try{
    //n1 and n2 values 
    const n1= parseFloat(req.query.n1);
    const n2=parseFloat(req.query.n2);
    if(isNaN(n1)) {
        logger.error("n1 is incorrectly defined please try again with a integer"); //Error to be logged and thrown if n1 is not a integer
        throw new Error("n1 is incorrectly defined please try again with a integer");
    }
    if(isNaN(n2)) {
        logger.error("n2 is incorrectly defined please try again with a integer"); //Error to be logged and thrown if n2 is not a integer
        throw new Error("n2 is incorrectly defined please try again with a integer");
    }
    
    logger.info('Parameters '+n1+' and '+n2+' received for division'); // if no error log calculation
    const result = div(n1,n2); //call function to divide n1 by n2
    res.status(200).json({outcome: "The calculation was Successful", statuscocde:200, data: result }); //Successful response to client containg JSON object
} catch(error) { 
    console.error(error)
    res.status(500).json({outcome: "The Calculation Failed", statuscocde:500, msg: error.toString() }) //Unsuccessful response to client containg JSON object with error message
}
});


// Function to multiply two numbers
const mul= (n1,n2) => {
  return n1*n2;
}

// Route for multiplication operation
app.get("/mul", (req,res)=>{
  try{
    //n1 and n2 values 
    const n1= parseFloat(req.query.n1);
    const n2=parseFloat(req.query.n2);
    if(isNaN(n1)) {
        logger.error("n1 is incorrectly defined please try again with a integer"); //Error to be logged and thrown if n1 is not a integer
        throw new Error("n1 is incorrectly defined please try again with a integer");
    }
    if(isNaN(n2)) {
        logger.error("n2 is incorrectly defined please try again with a integer"); //Error to be logged and thrown if n2 is not a integer
        throw new Error("n2 is incorrectly defined please try again with a integer");
    }
    
    logger.info('Parameters '+n1+' and '+n2+' received for multiplication'); // if no error log calculation
    const result = mul(n1,n2); //call function to multiply n1 by n2
    res.status(200).json({outcome: "The calculation was Successful", statuscocde:200, data: result }); //Successful response to client containg JSON object
} catch(error) { 
    console.error(error)
    res.status(500).json({outcome: "The Calculation Failed", statuscocde:500, msg: error.toString() }) //Unsuccessful response to client containg JSON object with error message
}
});

// Define port and start listening
const port=3040;
app.listen(port,()=> {
  console.log("App listening to: "+port);
})