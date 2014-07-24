function InputHint (getElements) {
  this.labelText = getElements.labelText;
  this.hintInputElement = getElements.hintInputElement;
}

InputHint.prototype.blurInput =  function() {
  if(this.hintInputElement.val()) {
    return;
  } else {
    this.hintInputElement.val(this.labelText);
    this.hintInputElement.addClass("hint");
  }
};

InputHint.prototype.focusInput =  function() {
  if (this.hintInputElement.val() != this.labelText) {
    return;
  } else {
    this.hintInputElement.val("");
    this.hintInputElement.removeClass("hint");
  }  
};

InputHint.prototype.removeLabel = function() {
  $("label[for=q]").remove();
};

InputHint.prototype.bindEvents = function() {
  this.removeLabel();
  this.blurInput();
  var _this = this;
  this.hintInputElement.bind({
    "focus" : function() { _this.focusInput();},
    "blur" : function() { _this.blurInput();}
  });
};

$(document).ready(function() {
  var elements = {
    "labelText" : $("label[for=q]").text(),
    "hintInputElement" : $("input[name=q]")
  }    
  var inputHint = new InputHint(elements);
  inputHint.bindEvents();
});



