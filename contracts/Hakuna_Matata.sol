// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract StringStorageContract {
    // Define a struct to hold 8 strings
    struct StringData {
        string string1;
        string string2;
        string string3;
        string string4;
        string string5;
        string string6;
        string string7;
        string string8;
    }

    // Declare a state variable of type StringData
    StringData private stringData;

    // Function to set the values of the struct
    function setStrings(
        string memory _string1,
        string memory _string2,
        string memory _string3,
        string memory _string4,
        string memory _string5,
        string memory _string6,
        string memory _string7,
        string memory _string8
    ) public {
        stringData = StringData({
            string1: _string1,
            string2: _string2,
            string3: _string3,
            string4: _string4,
            string5: _string5,
            string6: _string6,
            string7: _string7,
            string8: _string8
        });
    }

    // Function to retrieve the values of the struct
    function getStrings() public view returns (StringData memory) {
        return stringData;
    }
}
