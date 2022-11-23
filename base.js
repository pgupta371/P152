// Registering component in box-component.js
AFRAME.registerComponent("move-box-on-click", {
    schema: {
      movex: { type: "number", default: 1 },
    },
  
    tick: function () {


      window.addEventListener("click",(e)=>{


        this.data.movex = this.data.movex + 0.01;

      })
  
  
      var pos = this.el.getAttribute("position");
  
      pos.x = this.data.movex;
  
      this.el.setAttribute("position", {x: pos.x, y: pos.y, z: pos.z});
    }
  });