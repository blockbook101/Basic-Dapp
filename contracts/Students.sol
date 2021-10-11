// SPDX-License-Identifier: MIT

pragma solidity >=0.4.17 <=0.8.9;

contract Students{
    
    struct Student{
        int studentId;
        string studentName;
        string courseName;
    }

    event StudentAdded(int id,string name,string courseName);

    mapping(int => Student) StudentMapping;

    function addStudent(int id,string memory name,string memory courseName) public {

        StudentMapping[id] =  Student(id,name,courseName);

        emit StudentAdded(id, name, courseName);
  
    }

    function getStudent(int id) public view returns(string memory,string memory){
        return (StudentMapping[id].studentName,StudentMapping[id].courseName);
    }

}

