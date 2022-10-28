function getUser(userId) {
  const userData = fetch(`https://api.com/api/user/${userId}`)
    .then((response) => response.json())
    .then((data) => console.log(data.name));
}
getUser(1); // "Nome Sobrenome"

const endpoints = [ "https://api.com/api/user/1", "https://api.com/api/user/2", "https://api.com/api/user/3", "https://api.com/api/user/4"]
const promises = endpoints.map(url => fetch(url).then(res => res.json()))
Promise.all(promises) .then(body => console.log(body.name))

let response = await fetch(`https://api.com/api/user/${userId}`);
let userData = await response.json();

async function getUser(userId) { 
    let response = await fetch(`https://api.com/api/user/${userId}`);
    let userData = await response.json(); 
    return userData.name; // nas linhas de return não é necessário usar await
}

async function getCustomerOrders(customerId) { 
    const response = await fetch(`https://api.com/api/customer/${customerId}`) 
    const customer = await response.json() 
    return await Promise.all(customer.orders.map
        (async (orderId) => {   
            const response = await fetch(`https://api.com/api/order/${orderId}`)  
             const orderData = await response.json()   
             return orderData.amount }))}

    async function printCustomer(customerId){ //lógica fictícia da função}
    async function getAndPrintAllCustomers() { 
        const sql = 'SELECT id FROM customers' 
        const customers = await db.query(sql, []) 
        for (const customer of customers) {   
            await printCustomer(customer.id); 
        }
    }
