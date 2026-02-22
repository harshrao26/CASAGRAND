const xlsx = require("xlsx");

const workbook = xlsx.readFile("Project Details.xlsx");
const sheet_name = workbook.SheetNames[0];
const worksheet = workbook.Sheets[sheet_name];
// Read as raw json arrays
const data = xlsx.utils.sheet_to_json(worksheet, { header: 1 });

const parsedRows = data
  .filter((row) => row && row.length > 0 && row[0])
  .map((row) => {
    let lastVal = "";
    const newRow = [];
    for (let i = 0; i <= 10; i++) {
      if (row[i] !== undefined && row[i] !== null && row[i] !== "") {
        lastVal = row[i];
      }
      newRow.push(lastVal);
    }
    return newRow;
  });

parsedRows.forEach((r) => console.log(r[0] + " | " + r.slice(1).join(" | ")));
