


document.addEventListener('DOMContentLoaded', function() {
    // onClick's logic below:
	document.getElementById('viewPass').addEventListener('click', function() {
        viewPassword();
    });
    document.getElementById('toHex').addEventListener('click', function() {
        passTo(MODE.HEX);
    });
	document.getElementById('toBase64').addEventListener('click', function() {
        passTo(MODE.BASE64);
    });
	document.getElementById('toCopy').addEventListener('click', function() {
        ToClipboard();
    });
	document.getElementById('logo').addEventListener('click', function() {
        window.open('https://github.com');
    });
	document.getElementById('password').addEventListener('keydown', function() {
        passTo(MODE.BASE64);
    });
	document.getElementById('password').addEventListener('mousemove', function() {
        passTo(MODE.BASE64);
    });
	
	setInterval( function(){ passTo(MODE.CURR); }, 100 );
	
	isotip.init();
});


