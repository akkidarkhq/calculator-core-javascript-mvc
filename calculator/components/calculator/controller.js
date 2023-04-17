function Calculator (id, elementId, options){
    this.init =  function(id, elementId, options){
        this.model = new CalculatorModel(id, options);
        var parentElement = document.getElementById(elementId);
        this.view =  new CalculatorView(id, parentElement, options);
        
        this.id = id;
        this.options = options; 
        this.widgetElement = this.view.getWidget()
       
        /**
         * Display
         */ 
        this.display = new Display('display1',{width:250, height:55});  
        this.displayElement = this.display.getWidget() 
        this.view.setDisplay(this.displayElement);
        this.displayCurrentValue = 0;
        this.result = 0;
        this.firstArg=0;
        this.activeOperation = null;
        this.display.setDisplay(this.displayCurrentValue);
    
        this.setWidgets()
        
    }
    this.setWidgets = function(){
        /**
        * function buttons
        */
       var fnBtns = this.model.functionBtns;
       var fnBtnArray = [];
       for(var i = 0; i<fnBtns.length;i++){
        var btn = new Button('fnBtn'+fnBtns[i],{title:fnBtns[i],value:fnBtns[i],className:'btn btn-danger function'}).getWidget()
         fnBtnArray.push(btn);
       }
       this.view.setNumberButtons(fnBtnArray);
    

        /**
        * operation buttons
        */

           var opBtns = this.model.operationBtns;
           var opBtnArray = [];
           for(var i = 0; i<opBtns.length;i++){
            opBtnArray.push(new Button('opBtn'+opBtns[i],{title:opBtns[i],value:opBtns[i],className:'btn btn-warning operations'}).getWidget()) 
           }
           this.view.setOpButtons(opBtnArray);
     
        
       /**
        * number buttons
        */
       
       var nuBtns =  this.model.numericalBtns;
       var nuBtnArray = []
       for(var i = 0; i < nuBtns.length; i++){
        nuBtnArray.push(new Button('nuBtn-'+i, {title:nuBtns[i],value:nuBtns[i],className:'btn btn-primary numerical'}).getWidget())
       
    }
       this.view.setNumberButtons(nuBtnArray)
     

    }



    this.onBtnPress = function(element){
        element.addEventListener('click',()=>{
            this.clickHandler(element.getAttribute('value'))
      
        })
    }

    this.clickHandler = function(key){
        var result = this.display.getDisplayValue();

        console.log(result);
        
            switch (key) {
                case '0':
                if(this.displayCurrentValue==0){
                    result +='0'
                }  
                    break;    
                case '1':
                    if(this.displayCurrentValue!=='0'){
                        result += '1' ;
                    }
                break;
                
                case '2':
                    if(this.displayCurrentValue!=='0'){
                        result += '2' ;
                    }
                    break;
                
                case '3':
                    if(this.displayCurrentValue!=='0'){
                        result += '3' ;
                    }
                    break;
                
                case '4':
                    if(this.displayCurrentValue!=='0'){
                        result += '4' ;
                    }
                    break;
                
                case '5':  
                if(this.displayCurrentValue!=='0'){
                    result += '5' ;
                }
                        break;    

                case '6':
                    if(this.displayCurrentValue!=='0'){
                        result += '6' ;
                    }
                    break;
                
                case '7':
                    if(this.displayCurrentValue!=='0'){
                        result += '7' ;
                    }
                    break;
                
                case '8':
                    if(this.displayCurrentValue!=='0'){
                        result += '8' ;
                    }
                    break;
                
                case '9':  
                    if(this.displayCurrentValue!=='0'){
                        result += '9' ;
                    }
                    break;       
                
                case '.':  
                    if(this.displayCurrentValue!=='0'){
                        result += '.' ;
                    }
                        break;               

                case '+':
                    this.firstArg = parseFloat(this.display.getDisplayValue());
                    result = 0 
                    this.display.setDisplay(0)
                    console.log("adddd")
                    this.addition(this.firstArg);
                    this.activeOperation = 1;
                break;
                case '-':
                    this.firstArg = parseFloat(this.display.getDisplayValue());
                    result = 0
                    this.display.setDisplay(0)
                    this.activeOperation = 2;
                    this.subtract(this.firstArg);
                break;

                case '*':
                    this.firstArg = parseFloat(this.display.getDisplayValue());
                result = 0
                    this.display.setDisplay(0)
                    this.activeOperation = 3;
                   this.multiply(this.firstArg);
                break;
                
                case '/':
                    this.firstArg = parseFloat(this.display.getDisplayValue());
                    result = 0
                        this.display.setDisplay(0)
                        this.activeOperation = 4;
                       this.division(this.firstArg);
                    break;
                
                case '=':
                   result = this.calculate()
                    break;
                
                case 'DEL':
              
                var str =  this.display.getDisplayValue();
                   result =   str.substring(0,str.length-1);
                    break;
                
                case 'AC':  
                    result = 0;
                    this.firstArg = 0;
                    this.displayCurrentValue = 0;
                    break;

                default:
                    break;
        }   
        this.display.setDisplay(result);
    } 

    this.reset = function(){
                    result = 0;
                    this.firstArg = 0
                    this.displayCurrentValue = 0;
                    this.display.setDisplay(0);
    } 

    this.addition = function(args){
        var res = this.result 
        this.result = res + args;
    }

    this.subtract = function(args){
        var res = this.result 
        this.result =  res + args;
        }

    this.multiply = function(args){
        var res = this.result 
        this.result =  res + args;
        }

    this.division = function(args){
        var res = this.result 
        this.result =  res + args;
        }   

    this.calculate = function(){
            var result;
            if(this.activeOperation === 1){
            console.log('sum')
            result = parseFloat(this.result) + parseFloat(this.display.getDisplayValue());
        this.result = result;
        }else  if(this.activeOperation === 2 ){
            console.log('sub')
            result = parseFloat(this.result) - parseFloat(this.display.getDisplayValue());
            this.result = result;
        }else  if(this.activeOperation === 3  ){

            console.log('mul')
            result = parseFloat(this.result) * parseFloat(this.display.getDisplayValue());
            this.result = result;
        }else  if(this.activeOperation === 4  ){
            console.log('div')
            result = parseFloat(this.result) / parseFloat(this.display.getDisplayValue());
            this.result = result;
        }
        this.activeOperation = 0; 
        this.result = 0;
        return  result; 
    }    

     this.init(id, elementId, options)  

}  
