function CalculatorView(id, parentElement, options){
    
    this.init = function(id, parentElement, options) {    
        this.id = id;
        this.options = options; 
        this.parentElement = parentElement;
        this.setCalculatorWidget();
        
    }
    this.setCalculatorWidget = function(){
        this.calculatorWidget = document.createElement('div');
        this.calculatorWidget.className = "calc-container";

        this.btnContainer = document.createElement('div');
        this.btnContainer.className = "btn-container";

        this.displayContainer = document.createElement('div');
        this.displayContainer.className = "display-container";

        this.calculatorWidget.appendChild(this.displayContainer);
        this.calculatorWidget.appendChild(this.btnContainer);
        this.parentElement.appendChild(this.calculatorWidget);
    }

    /**
     * 
     * @param  
     */
    this.setDisplay = function(displayElement){
        this.displayContainer.appendChild(displayElement)
    }


    /**
     * 
     * @param {*} NumBtnArray 
     */
    this.setNumberButtons = function(NumBtnArray){
        NumBtnArray.forEach(btn => {
            this.btnContainer.appendChild(btn)
        }); 
    }

    /**
     * 
     * @param {*} opBtnsArray
     */
    this.setOpButtons = function(opBtnsArray){
        opBtnsArray.forEach(btn =>{
            this.btnContainer.appendChild(btn)
        })
    }

     /**
     * 
     * @param {*} fnBtnsArray
     */
     this.setOpButtons = function(fnBtnsArray){
        fnBtnsArray.forEach(btn =>{
            this.btnContainer.appendChild(btn)
        })
    }


    /**
     * 
     * @returns 
     */
    this.getWidget = function(){
        return  this.calculatorWidget;
    }
    /**
     * 
     */
    this.init(id, parentElement, options);
}