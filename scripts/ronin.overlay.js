function Overlay(element)
{
  Module.call(this);
  
  this.element = element;
  
  // Module
  
  this.passive = function(cmd)
  {
    this.clear();
    
    if(!cmd.position()){ return; }
    
    if(cmd.rect()){
      this.draw_rect(cmd.position(),cmd.rect());
    }
    else if(cmd.position().x > 0 && cmd.position().y > 0){
      this.draw_pointer(cmd.position());
    }
    else if(cmd.position().x > 0 ){
      this.draw_vertical_line(cmd.position());
    }
    else if(cmd.position().y > 0 ){
      this.draw_horizontal_line(cmd.position());
    }
  }
  
  this.active = function(cmd)
  {
    
  }
  
  this.draw_rect = function(position,rect)
  {
    this.context().beginPath();
    
    this.context().moveTo(position.x,position.y);
    this.context().lineTo(position.x + rect.width,position.y);
    this.context().lineTo(position.x + rect.width,position.y + rect.height);
    this.context().lineTo(position.x,position.y + rect.height);
    this.context().lineTo(position.x,position.y);
    
    this.context().lineCap="round";
    this.context().lineWidth = 1;
    this.context().strokeStyle = "#ff0000";
    this.context().stroke();
    this.context().closePath();
  }
  
  this.draw_pointer = function(position)
  {
    this.context().beginPath();
    
    this.context().moveTo(position.x,position.y);
    this.context().lineTo(position.x + 10,position.y);
    this.context().lineTo(position.x,position.y + 10);
    this.context().lineTo(position.x,position.y);
    
    this.context().lineCap="round";
    this.context().lineWidth = 1;
    this.context().strokeStyle = "#ff0000";
    this.context().stroke();
    this.context().closePath();
  }
  
  this.draw_vertical_line = function(position)
  {
    this.context().beginPath();
    
    this.context().moveTo(position.x,0);
    this.context().lineTo(position.x,this.element.height);
    
    this.context().lineCap="round";
    this.context().lineWidth = 1;
    this.context().strokeStyle = "#ff0000";
    this.context().stroke();
    this.context().closePath();
  }
  
  this.draw_horizontal_line = function(position)
  {
    this.context().beginPath();
    
    this.context().moveTo(position.x,0);
    this.context().lineTo(position.x,this.element.height);
    
    this.context().lineCap="round";
    this.context().lineWidth = 1;
    this.context().strokeStyle = "#ff0000";
    this.context().stroke();
    this.context().closePath();
  }
  
  this.resize = function(rect)
  {
    this.element.setAttribute('width',rect.width+"px");
    this.element.setAttribute('height',rect.height+"px");
  }
  
  this.show_guide = function(position,rect)
  {
    this.clear();
    this.context().beginPath();
    
    this.context().moveTo(0,0);
    this.context().lineTo(rect.width,0);
    this.context().lineTo(rect.width,rect.height);
    this.context().lineTo(0,rect.height);
    this.context().lineTo(0,0);
    
    this.context().lineCap="round";
    this.context().lineWidth = 1;
    this.context().strokeStyle = "#ff0000";
    this.context().stroke();
    this.context().closePath();
  }
  
  this.context = function()
  {
    return this.element.getContext('2d');
  }
  
  this.clear = function()
  {
    this.context().clearRect(0, 0, canvas.width, canvas.height);
  }
}