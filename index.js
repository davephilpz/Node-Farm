const fs = require("fs"); //file sync to read files
const http = require("http");

// const textIn = fs.readFileSync("txt/input.txt", "utf-8");
//if you do not specify second argument you get a buffer.
//this is also the synchronus file read command and the async should be used to make code better.

// console.log(textIn);
// const textOut = `this is what we know about the avocado ${textIn}.\nCreated on ${Date.now()}`;

// fs.writeFileSync("./txt/output.txt", textOut);
// console.log(`file written`);

fs.readFile("txt/start.txt", "utf-8", (err, data1) => {
  if (err) return console.log(`Error!`);

  fs.readFile(`txt/${data1}.txt`, "utf-8", (err, data2) => {
    console.log(data2);
    fs.readFile("txt/append.txt", "utf-8", (err, data3) => {
      console.log(data3);

      fs.writeFile("txt/final.txt", `${data2}\n${data3}`, "utf-8", (err) => {
        console.log(`Your file has been written.`);
      });
    });
  });
});
console.log("Reading file");
