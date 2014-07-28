function InputHint () {
  this.labelText = "";
  this.hintInputElement = $("input[name=q]");
}

InputHint.prototype.init = function() {
  this.labelText = $("label[for=q]").remove().text();
  this.blurInput();
  this.bindEvents();
};

InputHint.prototype.blurInput =  function() {
  if($.trim(this.hintInputElement.val())) {
    return;
  } else {
    this.hintInputElement.val(this.labelText).addClass("hint");
  }
};

InputHint.prototype.focusInput =  function() {
  if (this.hintInputElement.val() != this.labelText) {
    return;
  } else {
    this.hintInputElement.val("").removeClass("hint");
  }  
};

InputHint.prototype.bindEvents = function() {
  var _this = this;
  this.hintInputElement.bind({
    "focus" : function() { _this.focusInput();},
    "blur" : function() { _this.blurInput();}
  });
};

$(document).ready(function() {   
  var inputHint = new InputHint();
  inputHint.init();
});