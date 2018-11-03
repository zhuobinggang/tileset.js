(function webpackUniversalModuleDefinition(root, factory) {
    if(typeof exports === 'object' && typeof module === 'object')
        module.exports = factory();
    else if(typeof define === 'function' && define.amd)
        define(factory);
    else if(typeof exports === 'object')
        exports["TileSet"] = factory();
    else
        root["TileSet"] = factory();
})(this, function() {
    class TileSet{
        constructor(src,width,height){
            this.src = src
            this.width = width
            this.height = height
        }
        getImg(x,y){
            const left = (1-x) * this.width
            const top = (1-y) * this.height
            return '<div style="display: inline-block; overflow: hidden; width: '+this.width+'px; height: '+this.height+'px"><img style="position:relative; left: '+left+'px; top: '+top+'px;" src="'+this.src+'" /></div>';
        }
        appendTo(id, x, y){
            document.getElementById(id).innerHTML += this.getImg(x,y)
        }
    }
    return TileSet
})