var korNum=Number(prompt("국어점수는?","0"));
var engNum=Number(prompt("영어점수는?","0"));
var matNum=Number(prompt("수학점수는?","0"));
var avg=(korNum+engNum+matNum)/3;
var result=avg>=70 && korNum>=60 && matNum>=60 && engNum>=60;
document.write(result);

if(100>=avg>=70){
    document.write("통과");
}else{
    document.write("비통과")
}