function invertedPyramid(n){

    for(let i=n;i>=1;i--){
      let str="";
      
      for(let j=1;j<=n-i;j++){
        str += " ";
      }
      for(let k=1;k<=(2*i)-1;k++){
        str += "*"
      }
      console.log(str)
    }

}

invertedPyramid(5)