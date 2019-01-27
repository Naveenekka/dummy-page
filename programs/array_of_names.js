var UserToFind = window.prompt('Enter the name of the user you want to find');
var friendList = ["Aditya","Sid","Rakesh","Ashish","Alok","Arjun","Sitanshu"];

for(i=0;i<=friendList.length;i++){

if(friendList[i]==UserToFind){
    alert('user found at position'+(Number(i)+1))
    break;
}
else{
    alert('Oops!! looks like you have entered an invalid name')
    break;
}
}
