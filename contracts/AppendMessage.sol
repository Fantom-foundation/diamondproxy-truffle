// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

import "./MessageLib.sol";

contract AppendMessage{

    function addMessage(string calldata _msg) external {
        MessageLib.addMessage(_msg);
    }
}