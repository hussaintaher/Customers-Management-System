/*************************/
      /* Setup */
/*************************/
const { ipcRenderer, ipcMain } = require("electron");
const customer = require("../DB/Customer");
const Apple = require("../DB/Apple");
const Samsung = require("../DB/Samsung");
const Huawei = require("../DB/Huawei");
const { models } = require("mongoose");

window.addEventListener('load', ()=> {
const loaderContainer = document.querySelector('.loader-container');
  setTimeout(() => {
  loaderContainer.style.display = 'none'
  loaderContainer.parentElement.removeChild(loaderContainer);
  }, 4000);
})

/*************************/
     /* List Page */
/*************************/
  // Selectors
const printContainer = document.querySelector('#print-container')
const bigWrapper = document.querySelector('.big-wrapper')
const customerPage = document.querySelector('.customer-page')
const customerList = document.querySelector('.sub-list')
const search = document.querySelector('#search')
const deleteAllCustomersBtn = document.querySelector('#delete-allCustomers')
  // events
deleteAllCustomersBtn.addEventListener('click', deleteAllCustomers);
search.addEventListener('keyup', filterList)
/*************************/
 /* Customer info Page */
/*************************/
  // Selectors
const customerInfo = document.querySelector('.customer-info')
const closeInfo = document.querySelector('.closed-info')
const printBtn = document.querySelector('#print-info')
  // events
closeInfo.addEventListener('click', closeInfoPage)
//printBtn.addEventListener('click', printInfoPage)
/*************************/
  /* adding device Page */
/*************************/
  // Selectors
const addDevicePage = document.querySelector('.add-device-page')
  // events

/*************************/
  /* add customer Form */
/*************************/
  // Selectors
const addCustomerBtn = document.querySelector('.add-customer')
const closeformPageBtn = document.querySelector('.close-form-page')
const formPage = document.querySelector('.form-page')
const nameValue = document.querySelector('#name-value')
const priceValue = document.querySelector('#price-value')
const numberValue = document.querySelector('#number-value')
const problemValue = document.querySelector('#problem-value')
const modelValue = document.querySelector('#model-value')
const deviceValue = document.querySelector('#device-value')
const receiverValue = document.querySelector('#receiver-value')
const anotherProblemValue = document.querySelector('#anotherProblem-value')
const dateValue = document.querySelector('#date-value')
const notesValue = document.querySelector('#notes-value')
const colorValue = document.querySelector('#color-value')
const serialValue = document.querySelector('#serial-value')
const lastDateValue = document.querySelector('#lastDate-value')

const mainForm = document.querySelector('#main-form')
const receiver = document.querySelector('#receiver')
const theDate = document.querySelector('#date')
const anotherProblem = document.querySelector('#anotherProblem')
const notes = document.querySelector('#notes')
const name = document.querySelector('#name')
const number = document.querySelector('#number')
const problem = document.querySelector('#problem')
const model = document.querySelector('#model')
const device = document.querySelector('#device')
const theColor = document.querySelector('#theColor')

const appleGroup = document.querySelector('#apple')
const samsungGroup = document.querySelector('#samsung')
const huaweiGroup = document.querySelector('#huawei')
const deviceModel = document.querySelector('#deviceModel')
const deviceName = document.querySelector('#deviceName')
const addDeviceBtn = document.querySelector('#addDeviceBtn')
const deleteDeviceBtn = document.querySelector('#deleteDeviceBtn')

const createBtn =document.querySelector('#create-btn')
const deleteBtn = document.querySelector('#del-info')
  // events
addCustomerBtn.addEventListener('click', addCustomer);
closeformPageBtn.addEventListener('click', closeFormPage)
model.addEventListener('click', whichModel)
addDeviceBtn.addEventListener('click', addNewDevice)
deleteDeviceBtn.addEventListener('click', deleteNewDevice)
/*************************/
    /* Edit form */
/*************************/ 
  // Selectors
const editReceiver = document.querySelector('#editReceiver')
const editTheDate = document.querySelector('#editDate')
const editLastDate = document.querySelector('#editLastDate')
const editPrice = document.querySelector('#editPrice')
const editAnotherProblem = document.querySelector('#editAnotherProblem')
const editNotes = document.querySelector('#editNotes')
const editName = document.querySelector('#editName')
const editNumber = document.querySelector('#editNumber')
const editProblem = document.querySelector('#editProblem')
const editModel = document.querySelector('#editModel')
const editDevice = document.querySelector('#editDevice')
const editSerial = document.querySelector('#editSerial')
const editColor = document.querySelector('#editColor')
const isReadyBtn = document.querySelector('#isReady')

const editAppleGroup = document.querySelector('#editApple')
const editSamsungGroup = document.querySelector('#editSamsung')
const editHuaweiGroup = document.querySelector('#editHuawei')

const editPage = document.querySelector('.edit-customer-page') 
const closeEditPageBtn = document.querySelector('.close-edit-page')
const mainEditForm = document.querySelector('#main-edit-form')

const editBtn = document.querySelector('#edit-btn')
  //Events
closeEditPageBtn.addEventListener('click', closeEditPage)  
editModel.addEventListener('click', whichModel)
editBtn.addEventListener('click', sendEditedCustomer)
isReadyBtn.addEventListener('click', isReadyDevice)
  // Global variables
let isReady = ''
/*************************/
  /* completed page */
/*************************/
  //selectors
const completedList = document.querySelector('.completed-list')
const completedPage = document.querySelector('.completed-page')
/*************************/
  /* bill page */
/*************************/
  //selectors
const billPage = document.querySelector('.bill-page')
const batteryOrScreen = document.querySelector('#batteryOrScreen')
const allBillNum = document.querySelector('#allBillNum')
const billDeviceInput = document.querySelector('#billDevice')
const billSerialInput = document.querySelector('#billSerial')
const billColorInput = document.querySelector('#billColor')
const billDateMeladiInput = document.querySelector('#bill-date-meladi')
const billBarcodeInput = document.querySelector('#billBarcode')
  //Events
allBillNum.addEventListener('click', getAllBillNum)
/*************************/
  /* bill page */
/*************************/
  //selectors
const receiptTbody = document.querySelector('#receipt-tbody')
const newReceiptBtn = document.querySelector('#new-receipt-btn')
const receiptPrintBtn = document.querySelector('#receipt-printBtn');
const receiptDeleteBtn = document.querySelector('#receipt-deleteBtn');
const receiptContainer = document.querySelector('#receipt-container')
const receiptTbody2 = document.querySelector('#receipt-tbody-2')
const totalPrice = document.querySelector('#totalPrice')
const receiptHead = document.querySelector('#receipt-head')
  //events
newReceiptBtn.addEventListener('click', addNewReceipt)
receiptPrintBtn.addEventListener('click', printReceiptPage)
receiptDeleteBtn.addEventListener('click', deleteAllReceiptors)
/*************************/
  /* warranty page */
/*************************/
  // Selectors
const warrantyContainer = document.querySelector('.warranty_container');
const meladiDate = document.querySelector('#meladiDate')
const warrantyHeader = document.querySelector('#warranty_header')
const barcodeField = document.querySelector('#barcodeField')
const colorField = document.querySelector('#colorField')
const serialField = document.querySelector('#serialField')
const deviceField = document.querySelector('#deviceField')
const printMe = document.querySelector('#printMe')
const warrantyDetails = document.querySelector('#warranty_details')
const warrantyReturn = document.querySelector('#warranty_return')
  // Events
printMe.addEventListener('click', printWarrantyPage)

/*************************/
  /* Side bar */
/*************************/
  // Selectors 
const box1 = document.querySelector('.box-1')
const box2 = document.querySelector('.box-2')
const box3 = document.querySelector('.box-3')
const box4 = document.querySelector('.box-4')
const box5 = document.querySelector('.box-5')
const box6 = document.querySelector('.box-6')
  // Events 
box2.addEventListener('click', changeBorder2)
box3.addEventListener('click', changeBorder3)
box4.addEventListener('click', changeBorder4)
box5.addEventListener('click', changeBorder5)
/*************************/
  /* Side bar */
/*************************/
  //selectors
const procedureBtn = document.querySelector('#procedure_btn')
const procedureReceiverInp = document.querySelector('#procedure-receiver_input')
const procedureDateInp = document.querySelector('#procedure-date_input')
const procedureNameInp = document.querySelector('#procedure-name_input')
const procedureList = document.querySelector('#procedure_list-subContainer')
const procedureContainer = document.querySelector('.procedures_container')
const procedureClose = document.querySelector('.close-procedure-page')
const allItems = document.querySelectorAll('.procedure_list')
  //events
procedureBtn.addEventListener('click', addNewProcedure)
procedureClose.addEventListener('click', closeProcedurePage)
//================================================================================================
// Pages Control 
//================================================================================================
const MAINCOLOR = 'none';
const AFTERCLICKCOLOR = 'url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjZmZmIj48L3JlY3Q+CjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiNjY2MiPjwvcmVjdD4KPC9zdmc+")';
// display pages
customerPage.style.display = 'flex';
addDevicePage.style.display = 'none';
billPage.style.display = 'none';
completedPage.style.display = 'none'
// style box2
function changeBorder2() {
  //reset previous style
  box4.style.borderRadius = '0 0 0 0';
  box5.style.backgroundImage = MAINCOLOR;  

  box5.style.color = 'white';
  box6.style.borderRadius = '0 0 0 0';
  //reset previous style
  box2.style.borderRadius = `0 0 0 0`
  box3.style.backgroundImage = MAINCOLOR;  

  box3.style.color = 'white';
  box4.style.borderRadius = `0 0 0 0`;
  // reset previous style 
  box3.style.borderRadius = `0 0 0 0`
  box4.style.backgroundImage = MAINCOLOR;  

  box4.style.color = 'white';
  box5.style.borderRadius = `0 0 0 0`;
  // new style
  box1.style.borderRadius = `0 0 0 20px`
  box3.style.borderRadius = `20px 0 0 0`
  box2.style.backgroundImage = AFTERCLICKCOLOR;
  box2.style.color = 'black'
  // display list page
  completedPage.style.display = 'none'
  customerPage.style.display = 'flex';
  addDevicePage.style.display = 'none';
  billPage.style.display = 'none';
} 


// box3
function changeBorder3() {
  //reset previous style
  box4.style.borderRadius = '0 0 0 0';
  box5.style.backgroundImage = MAINCOLOR;  

  box5.style.color = 'white';
  box6.style.borderRadius = '0 0 0 0';
  //reset previoue style
  box3.style.borderRadius = `0 0 0 0`
  box4.style.backgroundImage = MAINCOLOR;  

  box4.style.color = 'white';
  box5.style.borderRadius = `0 0 0 0`;
  //reset previous style
  box1.style.borderRadius = `0 0 0 0`
  box3.style.borderRadius = `0 0 0 0`
  box2.style.backgroundImage = MAINCOLOR  
  box2.style.color = 'white'
  //new style
  box2.style.borderRadius = `0 0 0 20px`
  box3.style.backgroundImage = AFTERCLICKCOLOR;
  box3.style.color = 'black';
  box4.style.borderRadius = `20px 0 0 0`;
  // display add device page
  completedPage.style.display = 'flex'
  customerPage.style.display = 'none';
  addDevicePage.style.display = 'none';
  billPage.style.display = 'none';
}

function changeBorder4() {
  //reset previous style
  box4.style.borderRadius = '0 0 0 0';
  box5.style.backgroundImage = MAINCOLOR;  

  box5.style.color = 'white';
  box6.style.borderRadius = '0 0 0 0';
  //reset previous style
  box1.style.borderRadius = `0 0 0 0`
  box3.style.borderRadius = `0 0 0 0`
  box2.style.backgroundImage = MAINCOLOR  
  box2.style.color = 'white'
  //reset previous style
  box2.style.borderRadius = `0 0 0 0`
  box3.style.backgroundImage = MAINCOLOR;  

  box3.style.color = 'white';
  box4.style.borderRadius = `0 0 0 0`;
  //new style
  box3.style.borderRadius = `0 0 0 20px`
  box4.style.backgroundImage = AFTERCLICKCOLOR;
  box4.style.color = 'black';
  box5.style.borderRadius = `20px 0 0 0`;
  // display completed page
  completedPage.style.display = 'none'
  customerPage.style.display = 'none';
  addDevicePage.style.display = 'flex';
  billPage.style.display = 'none';
}
// box4
function changeBorder5() {
  box1.style.borderRadius = `0 0 0 0`
  // reset previous style
  box2.style.borderRadius = `0 0 0 0`
  box2.style.backgroundImage = MAINCOLOR;  

  box2.style.color = 'white';
  box2.style.borderRadius = `0 0 0 0`;
  //reset previous style
  box3.style.borderRadius = `0 0 0 0`
  box3.style.borderRadius = `0 0 0 0`
  box3.style.backgroundImage = MAINCOLOR  
  box3.style.color = 'white'
  // new style 
  box4.style.borderRadius = '0 0 0 0';
  box4.style.backgroundImage = MAINCOLOR;  

  box4.style.color = 'white';
  box4.style.borderRadius = '0 0 0 0';
  // new style 
  box4.style.borderRadius = '0 0 0 20px';
  box5.style.backgroundImage = AFTERCLICKCOLOR;
  box5.style.color = 'black';
  box6.style.borderRadius = '20px 0 0 0';
  // display warranty page
  completedPage.style.display = 'none'
  customerPage.style.display = 'none';
  addDevicePage.style.display = 'none';
  billPage.style.display = 'flex';

  // insert All bill Numb in selection element
  allBillNum.innerHTML = ''
  let allBillNumList = []
  const customerList = document.querySelectorAll('.billNum')
    for (let i=0; i<customerList.length;i++) {
      let a = Number(customerList[i].innerHTML);
      allBillNumList.push(a)
    }
    for (let i=0; i<allBillNumList.length; i++) {
      allBillNum.innerHTML += `
        <option value="${allBillNumList[i]}">${allBillNumList[i]}</option>
      `
    }
    allBillNumList.reverse()
}
function addCustomer() {
  formPage.classList.toggle('show-form-page')
    document.querySelector('#name').focus() 
}
function closeFormPage(e) {
  e.preventDefault()
  formPage.classList.remove('show-form-page')
}
function closeEditPage(e) {
  e.preventDefault()
  editPage.classList.remove('show-edit-page') /*d*/
  isReady = ''
}
function closeInfoPage(e) {
  e.preventDefault()
  customerInfo.classList.remove('show-customer-info')
}
//================================================================================================
// delete collection
//================================================================================================
//variables
let allCustomers = [];
let newCompletedList = [];

function deleteAllCustomers() {
  const areYsure = confirm('هل أنت متأكد')
  if(areYsure) {
    ipcRenderer.send('delete-AllCustomers')
    allCustomers = [];
    newCompletedList = [];
    renderAllCustomers(allCustomers);
    renderCompletedCustomers(newCompletedList);
    location.reload();
  } else {
    location.reload();
  }
}
//================================================================================================
// Customer Section - deleteCustomer, editCustomer, sendEditedCustomer, isReadyDevice
//================================================================================================
let idCustomerToUpdate;
let editedCustomer = new Object()


// Get Data Globally:
ipcRenderer.send('get-customers')
// Delete customer 
function deleteCustomer(id) {
  //let areYsure = confirm('هل أنت متأكد؟');
  //if (areYsure) {
    ipcRenderer.send('delete-customer', id);
    customerInfo.classList.remove('show-customer-info')
    //location.reload()
  //}  
}
// Edit Customer
function editCustomer(id) {
  idCustomerToUpdate = id;
  editPage.classList.toggle('show-edit-page') /* d */
  const customerTarget = allCustomers.find(c=> c._id === idCustomerToUpdate)
  const completedCustomerTarget = newCompletedList.find(c=> c._id === idCustomerToUpdate)
  // put all data in inputs fields
  if (customerTarget !== undefined && customerTarget.status === 'لم يدفع') {
    editName.value = customerTarget.name
    editReceiver.value = customerTarget.receiver
    editTheDate.value = customerTarget.theDate
    editLastDate.value = customerTarget.lastDate
    editAnotherProblem.value = customerTarget.anotherProblem
    editNotes.value = customerTarget.notes
    editNumber.value = customerTarget.number
    editProblem.value = customerTarget.problem
    editModel.value = customerTarget.model // hey
    editDevice.value = customerTarget.device // hey
    editColor.value = customerTarget.theColor // hey
    editSerial.value = customerTarget.serial
    editPrice.value = customerTarget.price
    editPrice.isReady = customerTarget.isReady
  } else {
    editName.value = completedCustomerTarget.name
    editReceiver.value = completedCustomerTarget.receiver
    editTheDate.value = completedCustomerTarget.theDate
    editLastDate.value = completedCustomerTarget.lastDate
    editAnotherProblem.value = completedCustomerTarget.anotherProblem
    editNotes.value = completedCustomerTarget.notes
    editNumber.value = completedCustomerTarget.number
    editProblem.value = completedCustomerTarget.problem
    editModel.value = completedCustomerTarget.model // hey
    editDevice.value = completedCustomerTarget.device // hey
    editColor.value = completedCustomerTarget.theColor // hey
    editSerial.value = completedCustomerTarget.serial
    editPrice.value = completedCustomerTarget.price
    editPrice.isReady = completedCustomerTarget.isReady
  }
}

// Send Edited Customer
function sendEditedCustomer(e) {
  e.preventDefault()
  editedCustomer = {
      name: editName.value,
      number: editNumber.value,
      receiver: editReceiver.value,
      model: editModel.value,
      serial: editSerial.value.toUpperCase(),
      device: editDevice.value,
      problem: editProblem.value,
      anotherProblem: editAnotherProblem.value,
      notes: editNotes.value,
      isReady: isReady,
      theDate: editTheDate.value,
      theColor: editColor.value,
      lastDate: editLastDate.value,
      price: editPrice.value,
  }
  ipcRenderer.send('update-customer', {...editedCustomer, idCustomerToUpdate})

  ipcRenderer.on('update-customer-success', (e,args)=> {
    const customerUpd = JSON.parse(args)
    for (var i in allCustomers) {
     if (allCustomers[i]._id == customerUpd._id) {
        allCustomers[i].name = customerUpd.name;
        allCustomers[i].number = customerUpd.number;
        allCustomers[i].receiver = customerUpd.receiver;
        allCustomers[i].model = customerUpd.model;
        allCustomers[i].serial = customerUpd.serial;
        allCustomers[i].device = customerUpd.device;
        allCustomers[i].problem = customerUpd.problem;
        allCustomers[i].anotherProblem = customerUpd.anotherProblem;
        allCustomers[i].notes = customerUpd.notes;
        allCustomers[i].theDate = customerUpd.theDate;
        allCustomers[i].theColor = customerUpd.theColor;
        allCustomers[i].lastDate = customerUpd.lastDate;
        allCustomers[i].price = customerUpd.price;
        allCustomers[i].isReady = customerUpd.isReady;
        break; //Stop this loop, we found it!
      }
     }
    for (var i in newCompletedList) {
     if (newCompletedList[i]._id == customerUpd._id) {
        newCompletedList[i].name = customerUpd.name;
        newCompletedList[i].number = customerUpd.number;
        newCompletedList[i].receiver = customerUpd.receiver;
        newCompletedList[i].model = customerUpd.model;
        newCompletedList[i].serial = customerUpd.serial;
        newCompletedList[i].device = customerUpd.device;
        newCompletedList[i].problem = customerUpd.problem;
        newCompletedList[i].anotherProblem = customerUpd.anotherProblem;
        newCompletedList[i].notes = customerUpd.notes;
        newCompletedList[i].theDate = customerUpd.theDate;
        newCompletedList[i].theColor = customerUpd.theColor;
        newCompletedList[i].lastDate = customerUpd.lastDate;
        newCompletedList[i].price = customerUpd.price;
        newCompletedList[i].isReady = customerUpd.isReady;
        break; //Stop this loop, we found it!
      }
     }
    renderAllCustomers(allCustomers)
    renderCompletedCustomers(newCompletedList)
    editPage.classList.remove('show-edit-page')
})
  isReady = ''
}

function isReadyDevice() {
  const customerID = idCustomerToUpdate;
  console.log(customerID)
  // not Completed Customer
  const customerFound = allCustomers.find(t=> {
    return t._id === customerID;
  })
  if (customerFound.isReady === '') {
    customerFound.isReady = 'جاهز'
    isReady = 'جاهز';
  } else {
    customerFound.isReady = '';
    isReady = '';
  }
  // Completed Customer

  ipcRenderer.send('update-ready-device', {customerID, isReady})
  ipcRenderer.on('update-ready-device-success', async (e,args)=> {
    const updatedCustomers = await JSON.parse(args);
    allCustomers = updatedCustomers.filter(t=> {
      return t.status !== 'تم الدفع';
    });

    renderAllCustomers(allCustomers);
  })
  console.log(customerFound)
}
//===============================================================================
// Render Info Page - renderInfoNewCustomerPage, renderInfoCompletedCustomerPage
//===============================================================================
// show inforamtion about customer
function renderInfoNewCustomerPage(billNum) {
  customerInfo.classList.toggle('show-customer-info')
  let billNumInt = Number(billNum)
  const customersInfo = allCustomers.find(b => b.billNum === billNumInt);
  nameValue.textContent = customersInfo.name
  numberValue.textContent = customersInfo.number
  problemValue.textContent = customersInfo.problem
  modelValue.textContent = customersInfo.model
  deviceValue.textContent = customersInfo.device
  receiverValue.textContent = customersInfo.receiver
  anotherProblemValue.textContent = customersInfo.anotherProblem
  dateValue.textContent = customersInfo.theDate
  notesValue.textContent = customersInfo.notes
  colorValue.textContent = customersInfo.theColor
  serialValue.textContent = customersInfo.serial
  lastDateValue.textContent = customersInfo.lastDate
  priceValue.textContent = customersInfo.price
  deleteBtn.setAttribute('onclick', `deleteCustomer('${customersInfo._id}')`);
}
// show inforamtion about customer
function renderInfoCompletedCustomerPage(billNum) {
  customerInfo.classList.toggle('show-customer-info')
  let billNumInt = Number(billNum)
  const customersInfo = newCompletedList.find(b => b.billNum === billNumInt);
  nameValue.textContent = customersInfo.name
  numberValue.textContent = customersInfo.number
  problemValue.textContent = customersInfo.problem
  modelValue.textContent = customersInfo.model
  deviceValue.textContent = customersInfo.device
  receiverValue.textContent = customersInfo.receiver
  anotherProblemValue.textContent = customersInfo.anotherProblem
  dateValue.textContent = customersInfo.theDate
  notesValue.textContent = customersInfo.notes
  colorValue.textContent = customersInfo.theColor
  serialValue.textContent = customersInfo.serial
  lastDateValue.textContent = customersInfo.lastDate
  priceValue.textContent = customersInfo.price
  deleteBtn.setAttribute('onclick', `deleteCustomer('${customersInfo._id}')`);
}
//====================================================================
// Completed & incompleted Customer Control
//====================================================================
function incompletedCustomer(billNum) {
  const item = document.querySelectorAll('.item');
  // after click, remove item from Main Customer list 
  for (let i=0; i < item.length; i++) {
    if (item[i].innerHTML === billNum) {
        item[i].parentElement.parentElement.remove()
    }    
  }
  let incompletedID = Number(billNum);
  const incompletedCustomerObj = newCompletedList.find(k=> k.billNum === incompletedID)
  let incompletedObj = {
    status: incompletedCustomerObj.status,
  }
  ipcRenderer.send('not-completed', {...incompletedObj, incompletedID})
}

// Completed Customer
function completedCustomer(billNum) {
const item = document.querySelectorAll('.item');
  // after click, remove item from Main Customer list 
  for (let i=0; i < item.length; i++) {
    if (item[i].innerHTML === billNum) {
        item[i].parentElement.parentElement.remove()
    }    
  }
  let completedID = Number(billNum);
  const completedCustomerObj = allCustomers.find(k=> k.billNum === completedID)
  let completedObj = {
    status: completedCustomerObj.status,
  }
  ipcRenderer.send('new-completed', {...completedObj, completedID})
}


ipcRenderer.on('get-incompleted-success', (e,args)=> {
  const incompleted = JSON.parse(args)
  allCustomers.push(incompleted)
  let incompletedCustomer;
  for (var i in newCompletedList) {
     if (newCompletedList[i].billNum == incompleted.billNum) {
        newCompletedList[i].status = 'لم يدفع';
        incompletedCustomer = newCompletedList.splice(newCompletedList.indexOf(newCompletedList[i]), 1)
        break; //Stop this loop, we found it!
      }       // take off from array
}
  renderAllCustomers(allCustomers)
  renderCompletedCustomers(newCompletedList)
})


ipcRenderer.on('get-completed-success', (e,args)=> {
  const newCompleted = JSON.parse(args)
  newCompletedList.push(newCompleted)
  let completedCustomer;
  for (var i in allCustomers) {
     if (allCustomers[i].billNum == newCompleted.billNum) {
        allCustomers[i].status = 'تم الدفع';
        completedCustomer = allCustomers.splice(allCustomers.indexOf(allCustomers[i]), 1)
        break; //Stop this loop, we found it!
      } 
  } 
  renderAllCustomers(allCustomers)
  renderCompletedCustomers(newCompletedList)
})
//================================================================================
// Renders new Customer & Completed Customer Section
//================================================================================
function renderCompletedCustomers(newCompletedList) {
  newCompletedList.sort()
  completedList.innerHTML = ''
  newCompletedList.map(t =>{
    completedList.insertAdjacentHTML('afterbegin', `
      <div class="customer mt-1">
          <ul class="customer-list">
            <li class="item">
              <div class="edit-customer" onclick="editCustomer('${t._id}')">
                  <h6>تعديل</h6>
              </div>
            </li>
            <li class="item">
              <div class="procedures-customer" onclick="renderProcedurePage('${t.billNum}')">
                  <h6>الإجراءات</h6>
              </div>
            </li>
            <li class="item">
              <div class="show-customer" onclick="renderInfoCompletedCustomerPage('${t.billNum}')">
                  <h6>عرض</h6>
              </div>
            </li>
            <li class="item">${t.lastDate}</li>
            <li class="item">${t.theDate}</li>
            <li class="item">${t.anotherProblem}</li>
            <li class="item">${t.problem}</li>
            <li class="item">${t.device}</i>
            <li class="item">${t.number}</li>
            <li class="item">${t.name}</li>
            <li class="item">
              <div id="mobileStatus" onclick="incompletedCustomer('${t.billNum}')">
                <img id="mobileStatusImg" src="icons/completed.png">
              </div>
            </li>
            <li class="item billNum">${t.billNum}</li>
          </ul>
        </div>
  `);
  })
}
// load data into info page of customer
function renderAllCustomers(allCustomers) {
  allCustomers.sort()
  customerList.innerHTML = "";
  allCustomers.map(t =>{
    if(t.isReady === '') {
      customerList.insertAdjacentHTML('afterbegin', `
      <div class="customer mt-1">
          <ul class="customer-list">
            <li class="item">
              <div class="edit-customer" onclick="editCustomer('${t._id}')">
                  <h6>تعديل</h6>
              </div>
            </li>
            <li class="item">
              <div class="procedures-customer" onclick="renderProcedurePage('${t.billNum}')">
                  <h6>الإجراءات</h6>
              </div>
            </li>
            <li class="item">
              <div class="show-customer" onclick="renderInfoNewCustomerPage('${t.billNum}')">
                  <h6>عرض</h6>
              </div>
            </li>
            <li class="item">${t.lastDate}</li>
            <li class="item">${t.theDate}</li>
            <li class="item">${t.anotherProblem}</li>
            <li class="item">${t.problem}</li>
            <li class="item">${t.device}</i>
            <li class="item">${t.number}</li>
            <li class="item">${t.name}</li>
            <li class="item">
              <div id="mobileStatus" onclick="completedCustomer('${t.billNum}')">
                <img id="mobileStatusImg" src="icons/incompleted3.png">
              </div>
            </li>
            <li class="item billNum">${t.billNum}</li>
          </ul>
        </div>
      `);
    } else {
      customerList.insertAdjacentHTML('afterbegin', `
      <div class="customer mt-1">
          <ul class="customer-list">
            <li class="item">
              <div class="edit-customer" onclick="editCustomer('${t._id}')">
                  <h6>تعديل</h6>
              </div>
            </li>
            <li class="item">
              <div class="procedures-customer" onclick="renderProcedurePage('${t.billNum}')">
                  <h6>الإجراءات</h6>
              </div>
            </li>
            <li class="item">
              <div class="show-customer" onclick="renderInfoNewCustomerPage('${t.billNum}')">
                  <h6>عرض</h6>
              </div>
            </li>
            <li class="item">${t.lastDate}</li>
            <li class="item">${t.theDate}</li>
            <li class="item">${t.anotherProblem}</li>
            <li class="item">${t.problem}</li>
            <li class="item">${t.device}</i>
            <li class="item">${t.number}</li>
            <li class="item">${t.name}</li>
            <li class="item">
              <div id="mobileStatus" onclick="completedCustomer('${t.billNum}')">
                <img id="mobileStatusImg" src="icons/ready.png">
              </div>
            </li>
            <li class="item billNum">${t.billNum}</li>
          </ul>
        </div>
    `);
    }
  }) 
}
//================================================================================
// Create New Customer Section
//================================================================================
//variables
let mobileStatus = 'لم يدفع';
// create New Customer
createBtn.addEventListener('click', async e =>{
  e.preventDefault()
  // Bring all Num from local storage
  if (customerList.innerHTML === '' && completedList.innerHTML === '') {
    newCustomerWithIntialBillNum()
  } else {
    newCustomerWithIncreasedBillNum()
  } 
})

function newCustomerWithIntialBillNum() {
    let billNum = 1000;
    // Customer will be stored in MongoDB 
    const customer = {
      billNum: billNum, // store the number here
      name: name.value,
      number: number.value,
      receiver: receiver.value,
      status: mobileStatus,
      model: model.value,
      theColor: theColor.value,
      serial: 'لم يحدد',
      device: device.value,
      problem: problem.value,
      anotherProblem: anotherProblem.value,
      notes: notes.value,
      procedures: [],
      price: '',
      isReady: isReady,
      theDate: theDate.value,
      lastDate: '',
    };
    console.log(customer)
    ipcRenderer.send("new-customer", customer); 
    mainForm.reset()
    formPage.classList.remove('show-form-page')
}

function newCustomerWithIncreasedBillNum() {
    let listOne = []
    const customerList = document.querySelectorAll('.billNum')
      for (let i=0; i<customerList.length;i++) {
        let a = Number(customerList[i].innerHTML);
        listOne.push(a)
      }
      listOne.sort()

      let billNum = listOne[listOne.length -1]
      const customer = {
      billNum: ++billNum, // store the number here
      name: name.value,
      number: number.value,
      receiver: receiver.value,
      status: mobileStatus,
      model: model.value,
      serial: 'لايوجد',
      theColor: theColor.value,
      device: device.value,
      problem: problem.value,
      anotherProblem: anotherProblem.value,
      notes: notes.value,
      procedures: [],
      price: '',
      isReady: isReady,
      theDate: theDate.value,
      lastDate: '',
      };
      console.log(customer)
      ipcRenderer.send("new-customer", customer); 
      mainForm.reset()
      formPage.classList.remove('show-form-page')
}
//================================================================================
// ipcRenderer Requests
//================================================================================
// Get Customer from DB
ipcRenderer.on("new-customer-created", (e,args)=>{
  const customerSaved = JSON.parse(args);
  allCustomers.push(customerSaved);
  renderAllCustomers(allCustomers)
})

// Bring all Data
ipcRenderer.on("get-customers-success", (e, args) => {
  const receivedCustomers = JSON.parse(args);
  allCustomers = receivedCustomers.filter(t=> {
    return t.status !== 'تم الدفع';
  });
  renderAllCustomers(allCustomers);
});

// Bring All completed Customer and push them to the completed customer list
ipcRenderer.on('get-allCompleted-success', (e,args)=> {
  const allCompCustomers = JSON.parse(args);
  newCompletedList = allCompCustomers.filter(t=> {
    return t.status === 'تم الدفع';
  })
  renderCompletedCustomers(newCompletedList)
})

// Delete Customer
ipcRenderer.on("delete-customer-success", (e,args) => {
  const customerDeleted = JSON.parse(args);
  allCustomers = allCustomers.filter(t => {
    return t._id !== customerDeleted._id;
  });
  newCompletedList = newCompletedList.filter(t => {
    return t._id !== customerDeleted._id;
  });

  renderAllCustomers(allCustomers)
  renderCompletedCustomers(newCompletedList)
})
//=================================================================
//  Mobile Section - whichModel, deleteNewDevice, addNewDevice
//=================================================================
//variables
let allApples;
let allSamsung;
let allHuawei;
let iphones = []
let samsung = []
let huawei = []
let strAppleDeviceOp;
let strSamsungDeviceOp;
let strHuaweiDeviceOp;
// Get All data globally 
ipcRenderer.send('get-apples')
ipcRenderer.send('get-samsung')
ipcRenderer.send('get-huawei')
ipcRenderer.send('get-allCompleted')

// Get all data and put them in render
ipcRenderer.on('get-apple-success', (e,args) => {
  allApples = JSON.parse(args);
  renderAppleMobiles(allApples)
})

ipcRenderer.on('get-samsung-success', (e,args) => {
  allSamsung = JSON.parse(args);
  renderSamsungMobiles(allSamsung)
})

ipcRenderer.on('get-huawei-success', (e,args) => {
  allHuawei = JSON.parse(args);
  renderHuaweiMobiles(allHuawei)
})

// Render Mobiles: 
function renderAppleMobiles(allApples) {
  appleGroup.innerHTML = '';
  editAppleGroup.innerHTML = '';
  allApples.map(mobile => {
    appleGroup.innerHTML += mobile.apple;
    editAppleGroup.innerHTML += mobile.apple;
  })
}

function renderSamsungMobiles(allSamsung) {
  samsungGroup.innerHTML = '';
  editSamsungGroup.innerHTML = '';
  allSamsung.map(mobile => {
    samsungGroup.innerHTML += mobile.samsung;
    editSamsungGroup.innerHTML += mobile.samsung;
  })
}

function renderHuaweiMobiles(allHuawei) {
  huaweiGroup.innerHTML = '';
  editHuaweiGroup.innerHTML = '';    
  allHuawei.map(mobile => {
    huaweiGroup.innerHTML += mobile.huawei;
    editHuaweiGroup.innerHTML += mobile.huawei;
  })
}

// Mobiles Control (add, delete, checking)
function whichModel(e) { 
const modelName = e.target.value;
    switch(modelName) {
        case 'apple':
            appleGroup.style.display = 'block';
            samsungGroup.style.display = 'none';
            huaweiGroup.style.display = 'none';

            editAppleGroup.style.display = 'block';
            editSamsungGroup.style.display = 'none';
            editHuaweiGroup.style.display = 'none';
            break;
        case 'samsung':
            samsungGroup.style.display = 'block';
            appleGroup.style.display = 'none';
            huaweiGroup.style.display = 'none';

            editSamsungGroup.style.display = 'block';
            editAppleGroup.style.display = 'none';
            editHuaweiGroup.style.display = 'none';
            break;
        case 'huawei':
            huaweiGroup.style.display = 'block';
            appleGroup.style.display = 'none';
            samsungGroup.style.display = 'none';

            editHuaweiGroup.style.display = 'block';
            editSamsungGroup.style.display = 'none';
            editAppleGroup.style.display = 'none';    
            break;
    }
}

// add new device listener
function addNewDevice(e) {
  e.preventDefault();    
  switch(deviceModel.value) {
      case 'apple':
          // Create Element
          let appledeviceEl = document.createElement('option')
          appledeviceEl.setAttribute('value', deviceName.value)
          appledeviceEl.textContent = deviceName.value
          appleGroup.appendChild(appledeviceEl)
          editAppleGroup.appendChild(appledeviceEl)
          strAppleDeviceOp = appledeviceEl.outerHTML;
          let iphoneObj = {
            apple: strAppleDeviceOp,
          }
          // Save to local Storage
          ipcRenderer.send('new-apple', iphoneObj)
          allApples.push(iphoneObj)
          console.log(allApples)
          renderAppleMobiles(allApples)
          deviceName.value = ''
          break;         
      case 'samsung':
          // Create Element
          let samsungdeviceEl = document.createElement('option')
          samsungdeviceEl.setAttribute('value', deviceName.value)
          samsungdeviceEl.textContent = deviceName.value
          samsungGroup.appendChild(samsungdeviceEl)
          editSamsungGroup.appendChild(samsungdeviceEl)
          strSamsungDeviceOp = samsungdeviceEl.outerHTML;
          // Save to local Storage
          let samsungObj = {
            samsung: strSamsungDeviceOp,
          }
          ipcRenderer.send('new-samsung', samsungObj)
          allSamsung.push(samsungObj)
          console.log(allSamsung)
          renderSamsungMobiles(allSamsung)
          deviceName.value = ''
          break;
      case 'huawei':
          // Create Element
          let huaweideviceEl = document.createElement('option')
          huaweideviceEl.setAttribute('value', deviceName.value)
          huaweideviceEl.textContent = deviceName.value
          huaweiGroup.appendChild(huaweideviceEl)
          editHuaweiGroup.appendChild(huaweideviceEl)
          strHuaweiDeviceOp = huaweideviceEl.outerHTML;
          // Save to local Storage
          let huaweiObj = {
            huawei: strHuaweiDeviceOp,
          }
          ipcRenderer.send('new-huawei', huaweiObj)
          allHuawei.push(huaweiObj)
          console.log(allHuawei)
          renderHuaweiMobiles(allHuawei)
          deviceName.value = ''
          break;
        }
}

function deleteNewDevice(e) {
  e.preventDefault()   
  switch(deviceModel.value) {
      case 'apple':
          // Create Element
          if (allApples.length === 0) {
            alert('لايوجد أجهزة')
          } else {
              for (let i=0; i < appleGroup.children.length; i++) {
                  if (appleGroup.children[i].value === deviceName.value) {
                    strAppleDeviceOp = appleGroup.children[i].outerHTML;
                  } 
              }
              for (let i=0; i < editAppleGroup.children.length; i++) {
                  if (editAppleGroup.children[i].value === deviceName.value) {
                    strAppleDeviceOp = editAppleGroup.children[i].outerHTML;
                  } 
              }
              ipcRenderer.send('delete-apples', strAppleDeviceOp)
              const filteredApples = allApples.filter(t=>{
                  return t.apple !== strAppleDeviceOp;
              })
              allApples = filteredApples
              console.log(allApples)
              renderAppleMobiles(allApples)
          }
          deviceName.value = ''
          break;         
      case 'samsung':
          // Create Element
          if (allSamsung.length === 0) {
            alert('لايوجد أجهزة')
          } else {
              for (let i=0; i < samsungGroup.children.length; i++) {
                  if (samsungGroup.children[i].value === deviceName.value) {
                    strSamsungDeviceOp = samsungGroup.children[i].outerHTML;
                  }
              }
              for (let i=0; i < editSamsungGroup.children.length; i++) {
                  if (editSamsungGroup.children[i].value === deviceName.value) {
                    strSamsungDeviceOp = editSamsungGroup.children[i].outerHTML;
                  }
              }
              ipcRenderer.send('delete-samsung', strSamsungDeviceOp)
              const filteredSamsung = allSamsung.filter(t=>{
                  return t.samsung !== strSamsungDeviceOp;
              })
              allSamsung = filteredSamsung
              console.log(allSamsung)
              renderSamsungMobiles(allSamsung)
            }
            deviceName.value = ''
          break;
      case 'huawei':
          // Create Element
          if (allHuawei.length === 0) {
            alert('لايوجد أجهزة')
          } else {
              for (let i=0; i < huaweiGroup.children.length; i++) {
                  if (huaweiGroup.children[i].value === deviceName.value) {
                    strHuaweiDeviceOp = huaweiGroup.children[i].outerHTML;
                  }
              }
              for (let i=0; i < editHuaweiGroup.children.length; i++) {
                  if (editHuaweiGroup.children[i].value === deviceName.value) {
                    strHuaweiDeviceOp = editHuaweiGroup.children[i].outerHTML;
                  }
              }
              ipcRenderer.send('delete-huawei', strHuaweiDeviceOp)
              const filteredHuawei = allHuawei.filter(t=>{
                  return t.huawei !== strHuaweiDeviceOp;
              })
              allHuawei = filteredHuawei
              console.log(allHuawei)
              renderHuaweiMobiles(allHuawei)
            }
            deviceName.value = ''
          break;
        }
}
//=================================================================
//  Filter section
//=================================================================
// search filter
function filterList() {
  let value = search.value;
  let data = searchTable(value, allCustomers);
  let dataCompleted = searchTable(value, newCompletedList);
  renderAllCustomers(data)
  renderCompletedCustomers(dataCompleted)
}
function searchTable(value, data) {
  let filteredData = [];
  for (let i=0; i<data.length;i++) {
    value = value.toLowerCase();
    num = Number(value)
    mobileNum = Number(value)
    filterDate = value
    let name = data[i].name.toLowerCase()
    let device = data[i].device.toLowerCase()
    let billNum = data[i].billNum
    let number = data[i].number
    let filteredDate = data[i].theDate 
    if (name.includes(value)) {
      filteredData.push(data[i])
    } else if (device.includes(value)) {
      filteredData.push(data[i])
    } else if (billNum === num) {
      filteredData.push(data[i])
    } else if (number === mobileNum) {
      filteredData.push(data[i])
    } else if (filteredDate === filterDate) {
      filteredData.push(data[i])
    }
  }
  return filteredData;
}
//=================================================================
//  print section
//=================================================================
let batteryOption = document.createElement('option');
batteryOption.setAttribute('value', 'بطارية');
batteryOption.textContent = 'بطارية';
let screenOption = document.createElement('option');
screenOption.setAttribute('value', 'شاشة');
screenOption.textContent = 'شاشة';
batteryOrScreen.appendChild(batteryOption)
batteryOrScreen.appendChild(screenOption)

function getAllBillNum() {
  allCustomers.map(t=> {
    if (Number(allBillNum.value) === t.billNum) {
      billDeviceInput.value = t.device;
      billColorInput.value = t.theColor;
      billSerialInput.value = t.serial;
    }
  })
  newCompletedList.map(t=> {
    if (Number(allBillNum.value) === t.billNum) {
      billDeviceInput.value = t.device;
      billColorInput.value = t.theColor;
      billSerialInput.value = t.serial;
    }
  })
}

function printWarrantyPage() {
  const warrantyObj = {
    billNum: allBillNum.value,
    color: billColorInput.value,
    device: billDeviceInput.value,
    serial: billSerialInput.value,
    dateMeladi: billDateMeladiInput.value,
    barcode: billBarcodeInput.value,
  }
  if (batteryOrScreen.value === 'بطارية') {
    warrantyHeader.textContent = 'ضمان بطارية'
    meladiDate.textContent = `الموافق ${warrantyObj.dateMeladi}م`;
    warrantyDetails.textContent = 'الضمان يشمل البطارية فقط لمدة سنة من تاريخ الفاتورة';
    barcodeField.textContent = `${warrantyObj.barcode}`;
    colorField.textContent = `${warrantyObj.color}`;
    serialField.textContent = `${warrantyObj.serial}`;
    deviceField.textContent = `${warrantyObj.device}`;
  } else {
    warrantyHeader.textContent = "ضمان شاشة"
    meladiDate.textContent = `الموافق ${warrantyObj.dateMeladi}م`;
    warrantyDetails.textContent = 'الضمان يشمل الشاشة لمدة ثلاثة شهور من تاريخ الفاتورة';
    barcodeField.textContent = `${warrantyObj.barcode}`;
    colorField.textContent = `${warrantyObj.color}`;
    serialField.textContent = `${warrantyObj.serial}`;
    deviceField.textContent = `${warrantyObj.device}`;
  }

  warrantyContainer.style.display = 'block';
  bigWrapper.style.display = 'none'
  printContainer.style.display = 'none'

  setTimeout(()=>{
    warrantyReturn.style.display = 'none'
    window.print()
    warrantyReturn.style.display = 'block'
  },1000)

  warrantyReturn.style.display = 'block'
  warrantyReturn.addEventListener('click', returnWarrantyPage)
  function returnWarrantyPage() {
    bigWrapper.style.display = 'block'
    printContainer.style.display = 'none'
    warrantyContainer.style.display = 'none'
  }  
}
//=================================================================
//  Receipt section
//=================================================================
let allReceiptList = [];
let tableRow;
let priceTD;
let priceInput;
let receiptProblem;
let receiptDevice;
let tableHead;
let receiptSelection;
let receiptSelectionOpt;
let receiptList = [];
let price;
function addNewReceipt() {
  // create sub-Elements
  tableRow = document.createElement('tr');
  priceTD = document.createElement('td');
  priceInput = document.createElement('input');
  priceInput.setAttribute('id', 'receipt-priceInput')
  priceInput.setAttribute('type', 'number')
  priceInput.setAttribute('value', ' ')
  priceTD.appendChild(priceInput);
  tableRow.appendChild(priceTD);
  receiptProblem = document.createElement('td');
  tableRow.appendChild(receiptProblem);
  receiptDevice = document.createElement('td');
  tableRow.appendChild(receiptDevice);
  tableHead = document.createElement('th');
  tableHead.setAttribute('scope', 'row');
  receiptSelection = document.createElement('select');
  receiptSelection.setAttribute('id', 'receipt-selection')
  receiptSelectionOpt = document.createElement('option')
  receiptSelectionOpt.setAttribute('value', 'الفواتير')
  receiptSelectionOpt.textContent = 'الفواتير'
  receiptSelection.appendChild(receiptSelectionOpt)
  tableHead.appendChild(receiptSelection)
  // append elements to the main containers
  tableRow.appendChild(tableHead)
  // take all bill Numbers
  allBillNum.innerHTML = ''
  let allBillNumList = []
  const customerList = document.querySelectorAll('.billNum')
    for (let i=0; i<customerList.length;i++) {
      let a = Number(customerList[i].innerHTML);
      allBillNumList.push(a)
    }

    for (let i=0; i<allBillNumList.length; i++) {
      receiptSelection.innerHTML += `
        <option value="${allBillNumList[i]}">${allBillNumList[i]}</option>
      `
    }
    allBillNumList.reverse()
    // add event to selection of billNumber
  receiptSelection.addEventListener('change', getReceiptInfo)
  receiptTbody.appendChild(tableRow)
  allReceiptList.push(tableRow)
}

function getReceiptInfo() {
  allCustomers.map(t=> {
  if (Number(receiptSelection.value) === t.billNum) {
    receiptProblem.textContent = t.problem;
    receiptDevice.textContent = t.device;
    }
  })
  newCompletedList.map(b=> {
  if (Number(receiptSelection.value) === b.billNum) {
  receiptProblem.textContent = b.problem;
  receiptDevice.textContent = b.device;
  }
  })
}
function printReceiptPage() {
  receiptTbody2.innerHTML = '';
  for(let i=0; i<allReceiptList.length;i++){
    if (allReceiptList[i].children[0].children[0].value === '') {
      receiptHead.textContent = 'إيصال إستلام'
      receiptTbody2.innerHTML += `
                <tr>
                <td>(بعد الفحص)</td>
                <td>01</td>
                <td>${allReceiptList[i].children[1].textContent}</td>
                <th scope="row">${allReceiptList[i].children[2].textContent}</th>
                </tr>
      `
    } else {
      receiptHead.textContent = 'إيصال تسليم'
      receiptTbody2.innerHTML += `
                <tr>
                <td>${allReceiptList[i].children[0].children[0].value}SR</td>
                <td>01</td>
                <td>${allReceiptList[i].children[1].textContent}</td>
                <th scope="row">${allReceiptList[i].children[2].textContent}</th>
                </tr>
      `
    }
    
    }
    let price = 0;
    for(let i=0; i<allReceiptList.length;i++){
      price += Number(allReceiptList[i].children[0].children[0].value);
      totalPrice.textContent = Number(price) + 'SR';
    }
    
  allCustomers.map(t=> {
  if (Number(allReceiptList[0].children[3].children[0].value) === t.billNum) {
      document.querySelector('#receiptBillNum').textContent = '#' + t.billNum;
      document.querySelector('#receiptDate').textContent = t.lastDate
      document.querySelector('#receiptName').textContent = t.name
      document.querySelector('#receiptNumber').textContent = t.number
    }
  })
  newCompletedList.map(t=> {
    if (Number(allReceiptList[0].children[3].children[0].value) === t.billNum) {
        document.querySelector('#receiptBillNum').textContent = '#' + t.billNum;
        document.querySelector('#receiptDate').textContent = t.lastDate
        document.querySelector('#receiptName').textContent = t.name
        document.querySelector('#receiptNumber').textContent = t.number
      }
    })
  const returnBtn = document.querySelector('#returnBtn')
  bigWrapper.style.display = 'none'
  printContainer.style.display = 'none'
  receiptContainer.style.display = 'block'
  setTimeout(()=>{
    returnBtn.style.display = 'none'
    window.print()
    returnBtn.style.display = 'block'
  },1000)

  returnBtn.style.display = 'block'
  returnBtn.addEventListener('click', returnPage)
  function returnPage() {
    bigWrapper.style.display = 'block'
    printContainer.style.display = 'none'
    receiptContainer.style.display = 'none'
  }
}

function deleteAllReceiptors() {
  receiptList = [];
  allReceiptList = [];
  for (let i=0;i < receiptTbody.children.length;i++) {
    receiptTbody.children[i].remove()
  }
}
//=================================================================
//  procedure section
//=================================================================
/*
  1- I learned how to reset var
*/
function closeProcedurePage() {
  // close page
  procedureContainer.style.display = 'none'
}

let savedProcedure;
function renderProcedurePage(num) {
  procedureContainer.style.display = 'flex'
  savedProcedure = Number(num)
  console.log(savedProcedure)
  ipcRenderer.send('get-procedure')
}
let procedureItems = [];
let deleteIndex;
let procedureLength;
function addNewProcedure(e) {
    // procedure object
    const procedure = {
      date: procedureDateInp.value,
      name: procedureNameInp.value,
      receiver: procedureReceiverInp.value,
    }  
    // push object
    const targetedCustomer = allCustomers.find(o=> {
      return o.billNum === savedProcedure
    })
    // push procedure obj
    targetedCustomer.procedures.push(procedure)
    // length of procedures
    procedureLength = targetedCustomer.procedures.length;
    console.log(procedureLength)
    deleteIndex = targetedCustomer.procedures.length - 1;
    // create element
    renderNewProcedure(targetedCustomer)   
    // update document 
    ipcRenderer.send('create-procedure', {procedure, savedProcedure})
    // clean fields
    procedureDateInp.value = ''
    procedureNameInp.value = ''
    procedureReceiverInp.value = ''
}

function deleteProcedure(indexNum, billCustomer) {
  ipcRenderer.send('delete-procedure', {indexNum, billCustomer})
}
//---------------------------------------------------------------------------
// Renders functions 
function renderNewProcedure(newProcedure) {
      procedureList.insertAdjacentHTML('beforeend', `
        <ul class="procedure_list">
          <li class="procedure_item procedureNum">${procedureLength}</li>
          <li class="procedure_item">${newProcedure.procedures[newProcedure.procedures.length -1].date}</li>
          <li class="procedure_item h">${newProcedure.procedures[newProcedure.procedures.length -1].name}</li>
          <li class="procedure_item">${newProcedure.procedures[newProcedure.procedures.length -1].receiver}</li>
          <li class="procedure_item">
            <img src="icons/trash.png" id="trash-procedure" onclick="deleteProcedure(${deleteIndex},${savedProcedure})">
          </li>
        </ul>
      `)    
}
function renderAllProcedures(oneProcedure) {
  procedureList.innerHTML = '';
  deleteIndex = 0;
  let a = 1;
  oneProcedure.procedures.map(p=> {
      procedureList.insertAdjacentHTML('beforeend', `
      <ul class="procedure_list">
        <li class="procedure_item procedureNum">${a++}</li>
        <li class="procedure_item">${p.date}</li>
        <li class="procedure_item h">${p.name}</li>
        <li class="procedure_item">${p.receiver}</li>
        <li class="procedure_item">
          <img src="icons/trash.png" id="trash-procedure" onclick="deleteProcedure(${deleteIndex++},${savedProcedure})">
        </li>
      </ul>
    `)
    })
}
function renderDeletedProcedures(DeletedProcedure) {
  procedureList.innerHTML = '';
  deleteIndex = 0;
  let a = 1;
  DeletedProcedure.procedures.map(p=> {
      procedureList.insertAdjacentHTML('beforeend', `
      <ul class="procedure_list">
        <li class="procedure_item procedureNum">${a++}</li>
        <li class="procedure_item">${p.date}</li>
        <li class="procedure_item h">${p.name}</li>
        <li class="procedure_item">${p.receiver}</li>
        <li class="procedure_item">
          <img src="icons/trash.png" id="trash-procedure" onclick="deleteProcedure(${deleteIndex++},${savedProcedure})">
        </li>
      </ul>
    `)
    })
}

// Get Requests
ipcRenderer.on('create-procedure-success', (e,args) => {
  const procedureUpdated = JSON.parse(args)
})

ipcRenderer.on('delete-procedure-success', (e,args)=> {
  const allProcedures = JSON.parse(args)
  const DeletedProcedure = allProcedures.find(s=> {
    return s.billNum === savedProcedure
  })
  allCustomers = allCustomers.filter(o=> o.status !== 'تم الدفع')
  renderDeletedProcedures(DeletedProcedure)
})

ipcRenderer.on('get-procedure-success', (e,args) => {
  const allProcedures = JSON.parse(args)
  const oneProcedure = allProcedures.find(s=> {
    return s.billNum === savedProcedure
  })
  allCustomers = allCustomers.filter(o=> o.status !== 'تم الدفع')
  renderAllProcedures(oneProcedure)
})
