// String
var plain_text = "MySecretMessage";

// Getting a Character
console.log(plain_text.charAt(0));

// String Function we will use
plain_text.charAt(0);
plain_text.charCodeAt(0);
String.fromCharCode(65);
plain_text.substr(0, 2);
plain_text.substr(2)


// Printing Character codes for 0 - 127
for(var i = 0; i < 128; i++) {
    console.log(i+" => "+String.fromCharCode(i));
}


// Incrementing a character

// Convert Character to charcode > Increment > Convert Back to Character
plain_text.charAt(0);

var charCode = plain_text.charCodeAt(0);
charCode = charCode + 1;

console.log(String.fromCharCode(charCode));

for(var i = 0; i < plain_text.length; i++ ){
    var char_code = plain_text.charCodeAt(i);
    char_code = char_code + 1;
    
    var new_char = String.fromCharCode(char_code);

    plain_text = plain_text.substr(0, i) + new_char + plain_text.substr(i+1);
}

console.log(plain_text);


// Encrypting Using Key

var key = "12454333";


function encrypt(key , message) {
    var key_length = key.length;

    for(var i = 0; i < message.length; i++ ){
        var char_code = message.charCodeAt(i);

        var increment = parseInt( key.charAt( i % key_length ) );

        char_code = char_code + increment;
        
        var new_char = String.fromCharCode(char_code);
    
        message = message.substr(0, i) + new_char + message.substr(i+1);
    }

    return message;

}

function decrypt(key, encrypted_message) {
    
    var key_length = key.length;

    for(var i = 0; i < encrypted_message.length; i++ ){
        var char_code = encrypted_message.charCodeAt(i);

        var decrement = parseInt( key.charAt( i % key_length ) );

        char_code = char_code - decrement;
        
        var new_char = String.fromCharCode(char_code);
    
        encrypted_message = encrypted_message.substr(0, i) + new_char + encrypted_message.substr(i+1);
    }

    return encrypted_message;
}


var encrypted_text = encrypt(key, plain_text)

var decrypted_text = decrypt(key, encrypted_text);