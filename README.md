HTML-код:
```php
<div class="overlay fade">
	<div class="popup">
		<div class="popup-close">&times;</div>
			...
	</div>
</div>
```
CSS:
```php
.fade {
  -webkit-animation-name: fade;
          animation-name: fade;
  -webkit-animation-duration: 2.5s;
          animation-duration: 2.5s;
  -webkit-animation-name: fade;
  -webkit-animation-duration: 2.5s;
}

@-webkit-keyframes fade {
  from {
    opacity: 0.1;
  }
  to {
    opacity: 1;
  }
}

@keyframes fade {
  from {
    opacity: 0.1;
  }
  to {
    opacity: 1;
  }
}

.more-splash {
  -webkit-animation-name: splash;
          animation-name: splash;
  -webkit-animation-duration: 1.7s;
          animation-duration: 1.7s;
}

@-webkit-keyframes splash {
  from {
    box-shadow: 0 0 10px #c78030;
  }
  to {
    box-shadow: 0 0 60px #c78030;
  }
}

@keyframes splash {
  from {
    box-shadow: 0 0 10px #c78030;
  }
  to {
    box-shadow: 0 0 60px #c78030;
  }
}

.overlay {
  position: fixed;
  display: none;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 3;
}

.overlay .popup {
  position: fixed;
  z-index: 4;
  left: 50%;
  top: 150px;
  width: 752px;
  -webkit-transform: translateX(-50%);
      -ms-transform: translateX(-50%);
          transform: translateX(-50%);
}

.overlay .popup-close {
  position: absolute;
  right: -20px;
  top: -35px;
  cursor: pointer;
  font-size: 35px;
  color: #fff;
  font-weight: 300;
}
