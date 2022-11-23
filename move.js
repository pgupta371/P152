 AFRAME.registerComponent("move", {
    
schema:{
    moveY:{type:"number",default:1},
},

tick:function(){
    var pos =this.el.getAttribute("position")
    this.data.moveY= this.data.moveY+0.01
pos.y=this.data.moveY

this.el.setAttribute("position",{
    x:pos.x,
    y:pos.y,
    z:pos.z
})

}


 })

 AFRAME.registerComponent("camerazoom",{
    schema:{
        movez:{type:"number",default:10},
    },
    
    tick:function(){
        var pos =this.el.getAttribute("position")
        this.data.movez= this.data.movez+0.01
    pos.z=this.data.movez
    
    this.el.setAttribute("position",{
        x:pos.x,
        y:pos.y,
        z:pos.z
    })
    
    }
 })