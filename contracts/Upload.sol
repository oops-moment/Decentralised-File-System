// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

contract Upload {
  
  struct Access{
     address user; 
     bool access; //true or false
  }
  mapping(address=>string[]) value;
  mapping(address=>mapping(address=>bool)) ownership;        // 2d array 
  mapping(address=>Access[]) accessList;                      // address of peopl who have access
  mapping(address=>mapping(address=>bool)) previousData;     // all people who have address in past

  function add(address _user,string memory url) external {            // adds images into the value
      value[_user].push(url);
  }
  function allow(address user) external {//def                     // allows the user
      ownership[msg.sender][user]=true; 
      if(previousData[msg.sender][user]){
         for(uint i=0;i<accessList[msg.sender].length;i++){
             if(accessList[msg.sender][i].user==user){
                  accessList[msg.sender][i].access=true; 
             }
         }
      }else{
          accessList[msg.sender].push(Access(user,true));  
          previousData[msg.sender][user]=true;  
      }
    
  }
  function disallow(address user) public{                   // takes the access away
      ownership[msg.sender][user]=false;
      for(uint i=0;i<accessList[msg.sender].length;i++){
          if(accessList[msg.sender][i].user==user){ 
              accessList[msg.sender][i].access=false;  
          }
      }
  }

  function display(address _user) external view returns(string[] memory){                      //shows images
      require(_user==msg.sender || ownership[_user][msg.sender],"You don't have access");
      return value[_user];
  }

  function shareAccess() public view returns(Access[] memory){
      return accessList[msg.sender];
  }
}
