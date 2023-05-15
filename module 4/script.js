var names=new Array();
names[0]="Jyothi";
names[1]="John";
names[2]="jen";
names[3]="jyo";
names[4]="Jyothisri";
names[5]="Paul";
names[6]="Sai";
names[7]="Srinivas";
names[8]="Satish";
names[9]="Puji";

for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
		console.log("Goodbye "+names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}