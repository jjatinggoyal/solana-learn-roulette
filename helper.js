function totalAmtToBePaid(amountStaked) {
  if (amountStaked > 2 || amountStaked <= 0) {
    console.log("You don't have sufficient balance. Please enter a valid bidding amount");
    return -1;
  }
  return amountStaked;
}

function getReturnAmount(amountStaked, ratioStaking) {
  const actualAmt = amountStaked * ratioStaking;
  if (actualAmt > 2) {
    return '2 SOL. This is because of airdrop limit';
  }
  return actualAmt;
}

module.exports = { totalAmtToBePaid, getReturnAmount };