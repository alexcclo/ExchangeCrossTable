const url = "http://mmp-core-backend-dev.azurewebsites.net/common/exchangeRate"

var cross1 = document.getElementById("cross1");
var cross2 = document.getElementById("cross2");
var cross3 = document.getElementById("cross3");
var cross4 = document.getElementById("cross4");
var cross5 = document.getElementById("cross5");
var cross6 = document.getElementById("cross6");
var cross7 = document.getElementById("cross7");

var a2 = document.getElementById("ida2");
var a3 = document.getElementById("ida3");
var a4 = document.getElementById("ida4");
var a5 = document.getElementById("ida5");
var a6 = document.getElementById("ida6");
var a7 = document.getElementById("ida7");


var b1 = document.getElementById("idb1");
var b3 = document.getElementById("idb3");
var b4 = document.getElementById("idb4");
var b5 = document.getElementById("idb5");
var b6 = document.getElementById("idb6");
var b7 = document.getElementById("idb7");

var c1 = document.getElementById("idc1");
var c2 = document.getElementById("idc2");
var c4 = document.getElementById("idc4");
var c5 = document.getElementById("idc5");
var c6 = document.getElementById("idc6");
var c7 = document.getElementById("idc7");

var d1 = document.getElementById("idd1");
var d2 = document.getElementById("idd2");
var d3 = document.getElementById("idd3");
var d5 = document.getElementById("idd5");
var d6 = document.getElementById("idd6");
var d7 = document.getElementById("idd7");

var e1 = document.getElementById("ide1");
var e2 = document.getElementById("ide2");
var e3 = document.getElementById("ide3");
var e4 = document.getElementById("ide4");
var e6 = document.getElementById("ide6");
var e7 = document.getElementById("ide7");

var f1 = document.getElementById("idf1");
var f2 = document.getElementById("idf2");
var f3 = document.getElementById("idf3");
var f4 = document.getElementById("idf4");
var f5 = document.getElementById("idf5");
var f7 = document.getElementById("idf7");


var g1 = document.getElementById("idg1");
var g2 = document.getElementById("idg2");
var g3 = document.getElementById("idg3");
var g4 = document.getElementById("idg4");
var g5 = document.getElementById("idg5");
var g6 = document.getElementById("idg6");



var value = 1;

cross1.innerHTML = value.toFixed(5);
cross2.innerHTML = value.toFixed(5);
cross3.innerHTML = value.toFixed(5);
cross4.innerHTML = value.toFixed(5);
cross5.innerHTML = value.toFixed(5);
cross6.innerHTML = value.toFixed(5);
cross7.innerHTML = value.toFixed(5);

fetch(url, {method: 'GET'})
    .then(response => response.json()) 
    .then(function(myJson) {
        var indata = (myJson.result.data);
        for(var i=0;i<indata.length;i++){
            // console.log(i)
            if(indata[i].currency_from == "USD")
            {
                if(indata[i].currency_to == "EUR")
                    a2.innerHTML = indata[i].rate.toFixed(5);
                else if(indata[i].currency_to == "NTD")
                    a3.innerHTML = indata[i].rate.toFixed(4);
                else if(indata[i].currency_to == "RMB")
                    a4.innerHTML = indata[i].rate.toFixed(5);
                else if(indata[i].currency_to == "INR")
                    a5.innerHTML = indata[i].rate.toFixed(4);
                else if(indata[i].currency_to == "MYR")
                    a6.innerHTML = indata[i].rate.toFixed(5);
                else if(indata[i].currency_to == "JPY")
                    a7.innerHTML = indata[i].rate.toFixed(3);
            }
            else if(indata[i].currency_from == "EUR")
            {
                if(indata[i].currency_to == "USD")
                    b1.innerHTML = indata[i].rate.toFixed(5);
                else if(indata[i].currency_to == "NTD")
                    b3.innerHTML = indata[i].rate.toFixed(4);
                else if(indata[i].currency_to == "RMB")
                    b4.innerHTML = indata[i].rate.toFixed(5);
                else if(indata[i].currency_to == "INR")
                    b5.innerHTML = indata[i].rate.toFixed(4);
                else if(indata[i].currency_to == "MYR")
                    b6.innerHTML = indata[i].rate.toFixed(5);
                else if(indata[i].currency_to == "JPY")
                    b7.innerHTML = indata[i].rate.toFixed(5);
            }
            else if(indata[i].currency_from == "NTD")
            {
                if(indata[i].currency_to == "USD")
                    c1.innerHTML = indata[i].rate.toFixed(5);
                else if(indata[i].currency_to == "EUR")
                    c2.innerHTML = indata[i].rate.toFixed(5);
                else if(indata[i].currency_to == "RMB")
                    c4.innerHTML = indata[i].rate.toFixed(5);
                else if(indata[i].currency_to == "INR")
                    c5.innerHTML = indata[i].rate.toFixed(5);
                else if(indata[i].currency_to == "MYR")
                    c6.innerHTML = indata[i].rate.toFixed(5);
                else if(indata[i].currency_to == "JPY")
                    c7.innerHTML = indata[i].rate.toFixed(5);
            }
            else if(indata[i].currency_from == "RMB")
            {
                if(indata[i].currency_to == "USD")
                    d1.innerHTML = indata[i].rate.toFixed(5);
                else if(indata[i].currency_to == "EUR")
                    d2.innerHTML = indata[i].rate.toFixed(5);
                else if(indata[i].currency_to == "NTD")
                    d3.innerHTML = indata[i].rate.toFixed(5);
                else if(indata[i].currency_to == "INR")
                    d5.innerHTML = indata[i].rate.toFixed(5);
                else if(indata[i].currency_to == "MYR")
                    d6.innerHTML = indata[i].rate.toFixed(5);
                else if(indata[i].currency_to == "JPY")
                    d7.innerHTML = indata[i].rate.toFixed(4);
            }
            else if(indata[i].currency_from == "INR")
            {
                if(indata[i].currency_to == "USD")
                    e1.innerHTML = indata[i].rate.toFixed(5);
                else if(indata[i].currency_to == "EUR")
                    e2.innerHTML = indata[i].rate.toFixed(5);
                else if(indata[i].currency_to == "NTD")
                    e3.innerHTML = indata[i].rate.toFixed(5);
                else if(indata[i].currency_to == "RMB")
                    e4.innerHTML = indata[i].rate.toFixed(5);
                else if(indata[i].currency_to == "MYR")
                    e6.innerHTML = indata[i].rate.toFixed(5);
                else if(indata[i].currency_to == "JPY")
                    e7.innerHTML = indata[i].rate.toFixed(5);
            }
            else if(indata[i].currency_from == "MYR")
            {
                if(indata[i].currency_to == "USD")
                    f1.innerHTML = indata[i].rate.toFixed(5);
                else if(indata[i].currency_to == "EUR")
                    f2.innerHTML = indata[i].rate.toFixed(5);
                else if(indata[i].currency_to == "NTD")
                    f3.innerHTML = indata[i].rate.toFixed(5);
                else if(indata[i].currency_to == "RMB")
                    f4.innerHTML = indata[i].rate.toFixed(5);
                else if(indata[i].currency_to == "INR")
                    f5.innerHTML = indata[i].rate.toFixed(5);
                else if(indata[i].currency_to == "JPY")
                    f7.innerHTML = indata[i].rate.toFixed(5);
            }
            else if(indata[i].currency_from == "JPY")
            {
                if(indata[i].currency_to == "USD")
                    g1.innerHTML = indata[i].rate.toFixed(5);
                else if(indata[i].currency_to == "EUR")
                    g2.innerHTML = indata[i].rate.toFixed(5);
                else if(indata[i].currency_to == "NTD")
                    g3.innerHTML = indata[i].rate.toFixed(5);
                else if(indata[i].currency_to == "RMB")
                    g4.innerHTML = indata[i].rate.toFixed(5);
                else if(indata[i].currency_to == "INR")
                    g5.innerHTML = indata[i].rate.toFixed(5);
                else if(indata[i].currency_to == "MYR")
                    g6.innerHTML = indata[i].rate.toFixed(5);
            }
        }
      })

      var months = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
      var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      var d = new Date();
      var day = days[d.getDay()];
      var hr = d.getHours();
      var min = d.getMinutes();
      if (min < 10) {
          min = "0" + min;
      }
      var ampm = "am";
      if( hr > 12 ) {
          hr -= 12;
          ampm = "pm";
      }
      var date = d.getDate();
      var month = months[d.getMonth()];
      var year = d.getFullYear();
      var x = document.getElementById("time");
      // x.innerHTML = day + " " + hr + ":" + min + ampm + " " + date + " " + month + " " + year;
      x.innerHTML = year + "-" + month + "-" + date + " " + hr + ":" + min + " UTC"