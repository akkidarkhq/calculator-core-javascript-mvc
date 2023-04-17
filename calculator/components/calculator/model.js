function CalculatorModel(id,options){
    
    this.init = function(id, options) {    
        this.id = id;
        this.numericalBtns = ['0','1','2','3','4','5','6','7','8','9','.'];
        this.operationBtns = ['+','-','*','/','=']
        this.functionBtns = ['DEL','AC']
        this.options = options; 
    }
      
    this.init(id,options);
}