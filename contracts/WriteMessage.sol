// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

import "./MessageLib.sol";
import "@solidstate/contracts/access/ownable/SafeOwnable.sol";

contract WriteMessage is SafeOwnable {

    function setMessage(string calldata _msg) external onlyOwner{
        MessageLib.setMessage(_msg);
    }
}