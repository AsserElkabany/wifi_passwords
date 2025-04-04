function xorEncrypt(data, key = "secret") {
    let encrypted = "";
    for (let i = 0; i < data.length; i++) {
        encrypted += String.fromCharCode(data.charCodeAt(i) ^ key.charCodeAt(i % key.length));
    }
    return encrypted;
}

module.exports = xorEncrypt;