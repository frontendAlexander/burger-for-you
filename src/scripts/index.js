import '../styles/scss/index.scss';
window.load = function(){
    const addEvent = function(object, type, callback){
    	if(object == null || typeof(object)=='undefined') return;
    	if(object.addEventListener){
    		object.addEventListener(type, callback, false)
    	} else if(object.attachEvent){
    		object.attachEvent("on"+type, callback)
    	} else {
    		object["on"+type] = callback;
    	}
    }
    
    addEvent(window, "resize", switchClass);
    
}();

function switchClass(media_size) {
	console.log(media_size);
	if(media_size2  < 700) {
    	console.log("<")
    }
    else{
        console.log(">")
    }
    */
}