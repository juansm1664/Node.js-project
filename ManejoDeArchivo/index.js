const fs = require("fs/promises");

async function main() {
  try {
    const data = await fs.readFile("index.txt", "utf-8");
    console.log("File content: ", data);
  } catch (error) {
    console.error("Error reanding file ", error);
  }

  try {
    await fs.writeFile("index.txt", "hello word!", "utf-8");
    console.log("File created successfully");
  } catch (error) {
    console.log("Error creating file: ", error);
  }

  try {
    await fs.copyFile("index.txt", "index-copy.txt");
    console.log("file copied successfully");
  } catch (error) {
    console.error("Error copyng file", error);
  }

  try {
    await fs.rename("index-copy.txt", "index-renamed.txt");
    console.log("File renamed successfuly");
  } catch (error) {
    console.log("Error renaming file ", error);
  }

  try {
    await fs.unlink("index-renamed.txt");
    console.log("File delete successfuly");
  } catch (error) {
    console.log("Error deleting file ", error);
  }
}
main();
