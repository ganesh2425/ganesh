class BankCustomer {
BankName = "RBI";
constructor (Name, Email, Mobile, Type){
    this.custName = Name;
    this.custMobile = Mobile;
    this.custEmail = Email;
    this.custType = Type;
}
getBal (){

    console.log("New Account opened...for :",this.custName);
}
}
let Siva = new BankCustomer("Siva", 990887755, "siva123@gmail.com", "savings");

console.log(Siva);
Siva.getBal();