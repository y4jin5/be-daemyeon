var age=Number(prompt("나이를 입력하세요","20"));
var place=prompt("사시는 곳을 입력하세요","김포");

if(age>=20 && place=="김포"){
    document.write("우수고객");
}else{
    document.write("비고객");
}