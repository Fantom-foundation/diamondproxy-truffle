// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

import "./MessageLib.sol";

contract ReadMessage {
    function getMessage() external view returns(string memory){
        return MessageLib.getMessage();
    }
}