function increment(str) {
    if (str.length < 1) return str;
    var lastSymbCode = str.charCodeAt(str.length-1);
    var inheritedStrStart = str.substring(0, str.length-1);
    var newStr = "";
    if ((lastSymbCode >= 48 && lastSymbCode <= 56) || (lastSymbCode >= 65 && lastSymbCode <= 89)) /* general case, symbols 0..8 or A..Y  */ {
        newStr = inheritedStrStart + String.fromCharCode(lastSymbCode + 1);
    } else if (lastSymbCode == 57) /* symbol "9"  */ {
        newStr = inheritedStrStart + "A";
    } else if (lastSymbCode == 90) /* symbol "Z"  */ {
        newStr = increment(inheritedStrStart) + "0";
    } else /* Other symbols — just consider them separators and increment a leading part of the string */ {
        newStr = increment(inheritedStrStart) + String.fromCharCode(lastSymbCode);
    }
    console.log("Old str: " + str + " → New str: " + newStr);
    return newStr;
}

// Using to bruteforce promos like "8YE7-49S8-E0G" in Postman
var cert = pm.collectionVariables.get("promo");
var newCert = increment(cert);
pm.collectionVariables.set("promo", newCert);
