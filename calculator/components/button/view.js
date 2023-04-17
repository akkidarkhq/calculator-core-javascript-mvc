 function ButtonView (id, options){
    this.init = function(id, options){
        this.id = id;
        this.options = options;
        this.widgetElement = null; 
        this._setWidget() 
    }
/**
 * @returns
 *  
 */
    this._setWidget = function(){
        this.widgetElement = document.createElement('button');
        this.widgetElement.innerHTML = this.options.title;
        this.widgetElement.setAttribute('id', this.id);
        this.widgetElement.setAttribute('value', this.options.value);
        this.widgetElement.style.width = this.options.width;
        this.widgetElement.style.height = this.options.height;
        this.widgetElement.setAttribute('class', this.options.className); 
    }
    /***
     * 
     */
    this.getWidget = function(){ 
        return this.widgetElement;
    }
    
    /**
     * 
     */
    this.destroy = function(){

    }
   
    this.init(id, options);
}
