// const fs = require("fs");
// const csv = require("csv-parser");

// const questions = [];

// fs.createReadStream("HR_Round_Dataset.csv")
//   .pipe(csv())
//   .on("data", (row) => {
//     const question = {
//       id: parseInt(row[""]), // Assuming the first column is the ID
//       question: row["Questions"],
//       website: row["Website"],
//       company: row["Comapny"],
//       level: row["Level"],
//       category: row["Category (9)"],
//       isResponseGenerated: row["is Response Generated"] === "1",
//       numberOfResponsesScraped: row["number of Responses Scraped"]
//         ? parseInt(row["number of Responses Scraped"])
//         : 0,
//     };
//     questions.push(question);
//   })
//   .on("end", () => {
//     const db = { questions: questions };
//     fs.writeFile("db.json", JSON.stringify(db, null, 2), (err) => {
//       if (err) throw err;
//       console.log("db.json file has been created with all 202 questions.");
//     });
//   });
const fs = require("fs");
const csv = require("csv-parser");

const questions = [];

fs.createReadStream("HR_Round_Dataset.csv")
  .pipe(csv())
  .on("data", (row) => {
    const question = {
      id: parseInt(row["index"]) || questions.length + 1, // Assuming the first column is the ID
      text: row["Questions"],
      website: row["Website"] || "", // Default to empty string if not provided
      company: row["Comapny"] || "General", // Default to "General" if not provided
      level: row["Level"] || "Unknown", // Default to "Unknown" if not provided
      category: row["Category (9)"] || "General", // Default to "General" if not provided
      isResponseGenerated: row["is Response Generated"] === "1",
      numberOfResponsesScraped: row["number of Responses Scraped"]
        ? parseInt(row["number of Responses Scraped"])
        : 0,
    };
    questions.push(question);
  })
  .on("end", () => {
    const db = { questions: questions };
    fs.writeFile("db.json", JSON.stringify(db, null, 2), (err) => {
      if (err) throw err;
      console.log("db.json file has been created with all questions.");
    });
  });
