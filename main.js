const { BrowserWindow, ipcMain, app, ipcRenderer} = require("electron");
require('electron-reload')(__dirname);
const mongoose = require("mongoose");
// connect to DB
require('./database')
const Customer = require("./DB/Customer");
const Apple = require("./DB/Apple");
const Samsung = require("./DB/Samsung");
const Huawei = require("./DB/Huawei");
const { find } = require("./DB/Customer");
mongoose.set('useFindAndModify', false);
mongoose.set('useNewUrlParser', true);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
//=================================================================
// create window
//=================================================================
function createWindow() {
    let win = new BrowserWindow({
      width: 1800,
      height: 800,
      webPreferences: {
        nodeIntegration: true
      }
    });

      //win.webContents.openDevTools()
      win.loadFile('ui/index.html')
}

// edit
app.on('quit', () => {
  mongoose.connection.close()
    .then(t=>{console.log('closed')})
    .catch(err=> console.log(err))
})


//=================================================================
// Connnection 
//=================================================================

//=================================================================
// completed Customers 
//=================================================================
ipcMain.on('not-completed', async (e, args)=> {
  //connectDB()
  const incompletedCustomer = await Customer.findOneAndUpdate(
  {billNum: args.incompletedID},
  {status: 'لم يدفع'},
  {new: true}
  )
  console.log(incompletedCustomer)
  e.reply('get-incompleted-success', JSON.stringify(incompletedCustomer))
  //disconnectDB()
})

ipcMain.on('new-completed', async (e, args)=> {
  //connectDB()
  const completedCustomer = await Customer.findOneAndUpdate(
  {billNum: args.completedID},
  {status: 'تم الدفع'},
  {new: true}
  )
  e.reply('get-completed-success', JSON.stringify(completedCustomer))
  //disconnectDB()
})

ipcMain.on('get-allCompleted', async (e,args)=> {
  //connectDB()
  const allCompleted = await Customer.find();
  e.reply('get-allCompleted-success', JSON.stringify(allCompleted))
  //disconnectDB()
})

//=================================================================
// Customers 
//=================================================================
// Delete All Customers
ipcMain.on('delete-AllCustomers', (e,args)=> {
    mongoose.connection.db.dropCollection('customers')
    console.log('You have just Deleted All Customers 0__0')
})

// New Customer
ipcMain.on("new-customer", async (e, arg) => {
    const newCustomer = new Customer(arg);
    const CustomerSaved = await newCustomer.save();
    e.reply("new-customer-created", JSON.stringify(CustomerSaved));
});

// update customer
ipcMain.on('update-customer', async (e,args)=> {
  //connectDB()
  const updatedCustomer = await Customer.findByIdAndUpdate(
    args.idCustomerToUpdate,{
      name: args.name,
      number: args.number,
      receiver: args.receiver,
      model: args.model,
      device: args.device,
      serial: args.serial,
      theColor: args.theColor,
      problem: args.problem,
      anotherProblem: args.anotherProblem,
      notes: args.notes,
      price: args.price,
      isReady: args.isReady,
      theDate: args.theDate,
      lastDate: args.lastDate},
      {new:true}
    )
  e.reply('update-customer-success', JSON.stringify(updatedCustomer))
  //disconnectDB()
})

// delete customer
ipcMain.on("delete-customer", async (e, args) => {
  //connectDB()
  const customerDeleted = await Customer.findByIdAndDelete(args);
  console.log('customer just deleted')
  e.reply("delete-customer-success", JSON.stringify(customerDeleted));
  //disconnectDB()
});

// get all customers
ipcMain.on('get-customers', async (e,args) => {
  //connectDB()
  const allCustomers = await Customer.find();
  e.reply('get-customers-success', JSON.stringify(allCustomers))
})
//=================================================================
// mobiles 
//=================================================================
// apple
ipcMain.on('new-apple', async (e,args)=> {
  
  //connectDB()
  const newApple = new Apple(args);
  const newAppleSaved = await newApple.save()
  console.log(newAppleSaved)
  console.log('^_* new apple created')
  e.reply('new-apple-success', JSON.stringify(newAppleSaved))  
})
// Get all apple data
ipcMain.on('get-apples', async (e,args)=> {
  //connectDB()
  const allApple = await Apple.find();
  console.log('retreiving apples data Done!')
  e.reply('get-apple-success', JSON.stringify(allApple))  
  //disconnectDB()
   
})
// delete apple 
ipcMain.on("delete-apples", async (e, args) => {
  //connectDB()
  const appleDeleted = await Apple.deleteOne({apple: args});
  console.log(appleDeleted)
  console.log('^_^ apple deleted success')
  e.reply("delete-apple-success", JSON.stringify(appleDeleted));  
  //disconnectDB()
});
//------------------------------------------------------------------------
// samsung
ipcMain.on('new-samsung', async (e,args)=> {
  //connectDB()
  const newSamsung = new Samsung(args);
  const newSamsungSaved = await newSamsung.save()
  console.log(newSamsungSaved)
  console.log('^_* new samsung created')
  e.reply('new-samsung-success', JSON.stringify(newSamsungSaved))
  //disconnectDB()
})
// get all samsung data
ipcMain.on('get-samsung', async (e,args)=> {
  //connectDB()
  const allSamsung = await Samsung.find();
  console.log('retreiving samsung data Done!')
  e.reply('get-samsung-success', JSON.stringify(allSamsung))
  //disconnectDB()
})
// delete samsung 
ipcMain.on("delete-samsung", async (e, args) => {
  //connectDB()
  const samsungDeleted = await Samsung.deleteOne({samsung: args});
  console.log(samsungDeleted)
  console.log('^_^ samsung deleted success')
  e.reply("delete-samsung-success", JSON.stringify(samsungDeleted));
  //disconnectDB()
});
//------------------------------------------------------------------------
// huawei
ipcMain.on('new-huawei', async (e,args)=> {
  //connectDB()
  const newHuawei = new Huawei(args);
  const newHuaweiSaved = await newHuawei.save()
  console.log(newHuaweiSaved)
  console.log('^_* new huawei created')
  e.reply('new-huawei-success', JSON.stringify(newHuaweiSaved))
  //disconnectDB()
})
// Get all huawei data
ipcMain.on('get-huawei', async (e,args)=> {
  //connectDB()
  const allHuawei = await Huawei.find();
  console.log('retreiving Huawei data Done!')
  e.reply('get-huawei-success', JSON.stringify(allHuawei))
  //disconnectDB()
})
// delete Huawei 
ipcMain.on("delete-huawei", async (e, args) => {
  //connectDB()
  const huaweiDeleted = await Huawei.deleteOne({huawei: args});
  console.log(huaweiDeleted)
  console.log('^_^ huawei deleted success')
  e.reply("delete-huawei-success", JSON.stringify(huaweiDeleted));
  //disconnectDB()
});
//=================================================================
// Warranty details
//=================================================================
function mydata(data) {
  return [data]
}
let warrantyInfo;
ipcMain.on('get-warrantyDetails', async (e,args)=> {
  warrantyInfo = await mydata(args);
  console.log(warrantyInfo)
  e.reply('get-warrantyDetails-success', JSON.stringify(warrantyInfo))
})

ipcMain.on('get-warrantyObj', (e,warrantyInfo)=>{
    e.reply('get-warrantyObj-success', JSON.stringify(warrantyInfo))
})
//=================================================================
// procedures 
//=================================================================
// update
ipcMain.on('create-procedure', async (e,args)=> {
  const updatedProcedure = await Customer.findOne(
    {billNum: args.savedProcedure},
  )
  updatedProcedure.procedures.push(args.procedure)
  const savedupdatedProcedure = await updatedProcedure.save()
  console.log(savedupdatedProcedure)
    e.reply('create-procedure-success', JSON.stringify(savedupdatedProcedure))
})
// delete
ipcMain.on('delete-procedure', async(e,args)=> {
  const deletedProcedure = await Customer.findOne({billNum: args.billCustomer})
  deletedProcedure.procedures.splice(args.indexNum, 1)
  const savedDeletedProcedure = await deletedProcedure.save()
  const oneProcedure = await Customer.find()
  //console.log(oneProcedure)
  e.reply('delete-procedure-success', JSON.stringify(oneProcedure))
})
//get one procedure
ipcMain.on('get-procedure', async(e,args)=> {
  const oneProcedure = await Customer.find()
  //console.log(oneProcedure)
  e.reply('get-procedure-success', JSON.stringify(oneProcedure))
})
//=================================================================
// device is Ready or not
//=================================================================
ipcMain.on('update-ready-device', async (e, args)=> {
  const customerFound = await Customer.findByIdAndUpdate(
    {_id: args.customerID},
    {isReady: args.isReady},
    {new: true}
  )
  const allCustomers = await Customer.find()
  e.reply('update-ready-device-success', JSON.stringify(allCustomers))
})
//=================================================================
// Export Modules
//=================================================================
module.exports = {
  createWindow
}