// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Logic1 {
    uint public count;

    function increaseCount() public {
        count += 1;
    }

    function getCount() public view returns (uint) {
        return count;
    }
}
