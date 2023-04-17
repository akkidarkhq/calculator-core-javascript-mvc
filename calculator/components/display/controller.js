function Display(id, options){
    
    this.init =  function(id, options){
        this.model = new DisplayModel(id, options);
        this.view =  new DisplayView(id, options); 
        this.id = id;
        this.options = options; 
        this.widgetElement = this.view.getWidget()
    }

    /**
     * 
     * @returns widget 
     */
    this.getWidget = function(){
        return this.widgetElement
    }

    /**
     * @returns display value
     */
    this.getDisplayValue = function(){
     return document.getElementById('display1').value 
    }


    /**
     * @update display value
     */

    
   this.setDisplay = function(val){
     document.getElementById('display1').value = val;
   } 
    
    this.init(id,options)
}