
var IpsumOfLOREMNFT = artifacts.require("IpsumOfLOREMNFT");
var LOREMNFT = artifacts.require("LOREMNFT");
module.exports =  function(deployer) {
  deployer.deploy(IpsumOfLOREMNFT);
  // deployer.deploy(Moonkeeper);
};
