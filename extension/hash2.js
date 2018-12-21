var MODE = {
	HEX: 1,
	BASE64: 2,
	CURR: -1
};



function passTo(mode) {
	
	if( $('#password').val().length==0 )
		return;
	
	var utf8_pass = new TextDecoder("utf-8").decode(
						new Uint8Array(
							new TextEncoder("utf-8").encode( $('#password').val()
							)
						)
					);
	
	var RMD160 = new Hashes.RMD160();
	RMD160.setUTF8(true);
	
	switch(mode) {
		case MODE.HEX:
			MODE.CURR = MODE.HEX;
			$('#hash').val( RMD160.hex(utf8_pass) );
			break;
		case MODE.BASE64:
			MODE.CURR = MODE.BASE64;
			$('#hash').val( RMD160.b64(utf8_pass) );
			break;
		default:
			break;
	}
}



function ToClipboard() {
  var copyText = document.getElementById('hash');
  copyText.select();
  document.execCommand("copy");
}



function viewPassword() {

	if( $('#password').attr('type')=='password' ) {
		$('#password').prop('type', 'text');
		$('#password').addClass("red");
	}
	else {
		$('#password').prop('type', 'password');
		$('#password').removeClass("red");
	}
	
}