// var myAge=25;
// if(myAge>=20){
//     document.write("당신은 성인 입니다.")
// }

// var testNum=prompt("시험점수를 입력하세요");
// if(testNum>=70){
//     document.write("합격입니다.");
// }else{
//     document.write("불합격입니다.");
// }

var korNum=Number(prompt("국어점수는?","0"));
var engNum=Number(prompt("영어점수는?","0"));
var matNum=Number(prompt("수학점수는?","0"));
var hisNum=Number(prompt("국사점수는?","0"));
var avg=(korNum+engNum+matNum)/3;

if(avg>=90){
    document.write("A학점");
}else if(avg>=80){
    document.write("B학점");
}
else if(avg>=70){
    document.write("C학점");
}
else if(avg>=60){
    document.write("D학점");
}else{
    document.write("F학점");
}