// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Logic2 {
    uint public count;

    function increaseCount() public {
        count += 2; 
    }

    function getCount() public view returns (uint) {
        return count;
    }

    function resetCount() public {
        count = 0; 
    }
}
