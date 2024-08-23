
const Data = {
    "name": "Mohamed Aslam",
    "age": 20,
    "city": "Madurai"
};

console.log("Original Object Properties:");
for (const key in Data) {
    console.log(`${key}: ${Data[key]}`);
}


const keys = Object.keys(Data);
if (keys.length >= 2) {
    const secondProperty = keys[1];
    delete Data[secondProperty];
    console.log(`Deleted second property "${secondProperty}".`);
} else {
    console.log("Object doesn't have a second property to delete.");
}