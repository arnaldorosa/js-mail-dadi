const emailList = ["erfgt@ygu7.com", "yuik@iret.it", "oputer@uhtgy.au", "buio@buoi.com", "juio@derf.it"];
const userEmail = prompt("Inserire l'email");
let statusCheck = false;

for (let counter = 0; counter < emailList.length; counter++) {
    if (userEmail === emailList[counter]) {
        statusCheck = true;
        break;
    }
}

if (statusCheck) {
    console.log("Puoi andare avanti");
} else {
    console.log("Non puoi andare avanti");
}