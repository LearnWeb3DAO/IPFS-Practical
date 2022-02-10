var fs = require("fs");

for (let i = 1; i <= 10; i++) {
  var dictstring = JSON.stringify({
    name: i.toString(),
    description: "NFT Collection for LearnWeb3 Students",
    image:
      "ipfs://QmQBHarz2WFczTjz5GnhjHrbUPDnB48W5BM2v2h6HbE1rZ/" +
      i.toString() +
      ".png",
  });

  fs.writeFile(i + ".json", dictstring, function (err, result) {
    if (err) console.log("error", err);
  });
}
