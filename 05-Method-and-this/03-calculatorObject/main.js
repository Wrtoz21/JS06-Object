let calculator={
    
    read()
    {
     this.x = +prompt();   
     this.y = +prompt();
    }
    ,
    sum(){ return this.x + this.y},
    mul(){ return this.x * this.y}

}
calculator.read();
alert(calculator.sum());
alert(calculator.mul());
