switch(true){
case(stateCap== "NE" && temp<32):
  NSB.MsgBox(`${nameCap}, wear a warm coat, hat, scarf and gloves.`)
  break;
  
  case(userState== "NE" && temp>32 && temp<50):
  NSB.MsgBox(`${nameCap}, wear a warm coat but you won't need a hat, scarf or gloves.`)
  break;
  
case(userState== "FL" && temp>32 && temp<50):
  NSB.MsgBox(`${nameCap}, wear your warmest coat, a warm hat, a scarf, and warm gloves.`)
  break;
  
case(userState== "FL" && temp > 50 && temp<70):
  NSB.MsgBox(`${nameCap}, wear a warm coat, hat and gloves. Maybe a scarf too.`)
  break;
  
default:
 NSB.MsgBox("You did not provide enough information")
 break;
 }