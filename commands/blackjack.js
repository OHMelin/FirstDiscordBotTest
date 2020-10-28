const Discord = require('discord.js');
const bot = new Discord.Client();
const botconfig = require("../botconfig.json")



module.exports.run = async (bot, message, args) => {

    var number1 = Math.floor(Math.random() * 10) + 1;
    var number2 = Math.floor(Math.random() * 10) + 1;
    var number3 = Math.floor(Math.random() * 10) + 1;
    var number4 = Math.floor(Math.random() * 10) + 1;
    var number5 = Math.floor(Math.random() * 10) + 1;
    let total = 0 + number1;

    var a1 = "You got number: ";
    var a2 = "\nNew total: ";
    var a3 = "\n**Use __h__ to hit or __s__ to stand**";
    var ended = "You ended up with: ";
    var noOption = "That's not an option buddy";
    var tooLong = "You took too long to respond";
    var lost = "You lost with a total of: ";
    
    //First number
    message.channel.send(a1 + number1 + a2 + total + a3);

    //Second number
    message.channel.awaitMessages(m => m.author.id == message.author.id,
      {max: 1, time: 10000}).then(collected => {
              if (collected.first().content === "h") {
                      let total = 0 + number1 + number2;
                      if (total > 21) {
                        message.channel.send(lost + total)
                      }
                      else {
                        message.channel.send(a1 + number2 + a2 + total + a3);
                      }

    //Third number
    message.channel.awaitMessages(m => m.author.id == message.author.id,
      {max: 1, time: 10000}).then(collected => {
              if (collected.first().content === "h") {
                      let total = 0 + number1 + number2 + number3;
                      if (total > 21) {
                        message.channel.send(lost + total)
                      }
                      else {
                        message.channel.send(a1 + number3 + a2 + total + a3);
                      }   
    
    //Fourth number
    message.channel.awaitMessages(m => m.author.id == message.author.id,
      {max: 1, time: 10000}).then(collected => {
              if (collected.first().content === "h") {
                      let total = 0 + number1 + number2 + number3 + number4;
                      if (total > 21) {
                        message.channel.send(lost + total)
                      }
                      else {
                        message.channel.send(a1 + number4 + a2 + total + a3);
                      }   
               
    //Fifth number
    message.channel.awaitMessages(m => m.author.id == message.author.id,
      {max: 1, time: 10000}).then(collected => {
              if (collected.first().content === "h") {
                      let total = 0 + number1 + number2 + number3 + number4 + number5;
                      if (total > 21) {
                        message.channel.send(lost + total)
                      }
                      else {
                        message.channel.send(a1 + number5 + a2 + total + a3);
                      }

              }
              else if (collected.first().content === "s") {
                      message.channel.send(ended + total); 
              }
              else {
                      message.channel.send(noOption)
              }}
              ).catch(() => {
                      message.channel.send(tooLong);
              });
              }
              else if (collected.first().content === "s") {
                      message.channel.send(ended + total); 
              }
              else {
                      message.channel.send(noOption)
              }}
              ).catch(() => {
                      message.channel.send(tooLong);
              });
              }
              else if (collected.first().content === "s") {
                      message.channel.send(ended + total); 
              }
              else {
                      message.channel.send(noOption)
              }}
              ).catch(() => {
                      message.channel.send(tooLong);
              });
              }
              else if (collected.first().content === "s") {
                      message.channel.send(ended + total); 
              }
              else {
                      message.channel.send(noOption)
              }}
              ).catch(() => {
                      message.channel.send(tooLong);
              });
}

module.exports.config = {
    name: "bj",
    aliases: [],
}