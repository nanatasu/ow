window.addEventListener("load", function() {
  const trg = document.querySelectorAll(".collapse");
alert("hoge");
  for(let i=0; i<trg.length; i++){
    trg[i].addEventListener("click", function() {
      var tgt = document.getElementById(this.dataset.target);
      tgt.classList.toggle("is-collapsed");
      this.firstElementChild.className == "fa fa-caret-down" ? this.firstElementChild.className = "fa fa-caret-up" : this.firstElementChild.className = "fa fa-caret-down";
    }, false);
  }
}, false);
