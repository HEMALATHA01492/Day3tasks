//compare Two JSON have same properties without order



let detail1=
{            "name":"HEMA",
             "gender":"female",
             "age":"25",
             "mobile":"9842390980",
             
}
let detail2={ "name":"HEMA",
               "mobile":"9842390980",
               "gender":"female",
               "age":"25",
             
          
}
let flag=true
for(let e in detail1)
{ 
    if(detail1[e]!==detail2[e])
{
    flag=false;
    break;
    
}
}
flag?console.log("Equal"):console.log("Not Equal")


