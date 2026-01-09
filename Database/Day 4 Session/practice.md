1. create and use database
use companyDB

2. creating collection and adding document
db.users.insertOne({
    name: "Amit Sharma",
    email: "amit@gmail.com",
    age: 27,
    isActive: true
})

3. creating collection
db.createCollection("users");

4. show collections (inside database)
show collections

5. current database
db

6. read database
db.users.find()

7. adding multiple documents
db.users.insertMany([
    {
        name: "Shubham Shejul",
        email: "shejul@gmail.com",
        age: 30,
        isActive: false
    },
    {
        name: "Vedant Kerale",
        email: "vedant@gmail.com",
        age: 22,
        isActive: true
    },
    {
        name: "Saurabh Dombe",
        email: "saurabh@gmail.com",
        age: 99,
        isActive: true
    }
])

8. delete collection
db.users.drop()

9. select first document with isActive is true
db.users.findOne({isActive: true})

-- Starting point
use ecommerceDB

db.products.insertOne({
    name: "iPhone 15",
    category: "Mobile",
    price: 80000,
    stock: 50,
    isActive: true
})

db.products.insertMany([
    {
        name: "iPhone 15",
        category: "Mobile",
        price: 80000,
        stock: 50,
        isActive: true
    },
    {
        name: "Samsung S23",
        category: "Mobile",
        price: 70000,
        stock: 30,
        isActive: true
    },
    {
        name: "MacBook Air",
        category: "Laptop",
        price: 120000,
        stock: 0,
        isActive: false
    },
    {
        name: "Asus Zenbook",
        category: "Laptop",
        price: 125000,
        stock: 0,
        isActive: false
    }
])

-- Select Products

db.products.find()

db.products.findOne({category: "Laptop"})

db.products.find({category: "Laptop"})

db.products.find({ price: { $gt : 70000 }})

db.products.find({ price:{$lte: 70000}})

db.products.find(
    { price: {
        $gte: 60000,
        $lte: 80000,
    }}
)

db.products.find(
    {
        category: { $ne: "Mobile" }
    }
)

db.products.find({
    category: { $in : [ "Laptop", "Mobile" ]}
})

db.products.find({
    $and: [
        {category: "Laptop"},
        {stock: {$gte: 0}}
    ]
})

db.products.find({
    $or: [
        { category: "Mobile" },
        { price: { $gt: 100000 } }
    ]
})

db.products.find({}, {
    name: 1,
    price: 1,
    _id: 0
})

db.products.find().sort( {price: 1 })

db.products.find().sort( {price: -1 })

db.products.find().limit(2)

db.products.find().sort({ price: 1}).skip(2).limit(2)

-- Update One product price
db.products.updateOne({name: "iPhone 15"}, {$set: {price:75000}})

-- Update Many products at once
db.products.updateMany(
    {category: "Laptop"},
    {$set : {price: 50000}}
)


db.products.updateOne(
    {name: "Samsung S23"},
    {$inc: {stock: -1}}
)


-- delete one document

db.products.deleteOne({price: 75000})

db.products.deleteMany({stock: 0})

-- Use Training
use trainingDB


db.employees.insertMany([
  { empId: "E001", name: "Amit Sharma", department: "Engineering", age: 25, salary: 45000, isActive: true, location: "Ahmedabad", joiningDate: new Date("2023-01-10") },
  { empId: "E002", name: "Neha Verma", department: "HR", age: 29, salary: 40000, isActive: true, location: "Delhi", joiningDate: new Date("2023-01-15") },
  { empId: "E003", name: "Rahul Mehta", department: "Management", age: 35, salary: 80000, isActive: true, location: "Mumbai", joiningDate: new Date("2022-12-01") },
  { empId: "E004", name: "Pooja Singh", department: "QA", age: 26, salary: 38000, isActive: false, location: "Jaipur", joiningDate: new Date("2023-02-01") },
  { empId: "E005", name: "Karan Patel", department: "Design", age: 27, salary: 42000, isActive: true, location: "Ahmedabad", joiningDate: new Date("2023-03-05") },

  { empId: "E006", name: "User6", department: "Engineering", age: 24, salary: 46000, isActive: true, location: "Pune", joiningDate: new Date("2023-03-10") },
  { empId: "E007", name: "User7", department: "Engineering", age: 31, salary: 52000, isActive: false, location: "Surat", joiningDate: new Date("2022-11-20") },
  { empId: "E008", name: "User8", department: "HR", age: 28, salary: 41000, isActive: true, location: "Delhi", joiningDate: new Date("2023-04-01") },
  { empId: "E009", name: "User9", department: "QA", age: 25, salary: 39000, isActive: true, location: "Indore", joiningDate: new Date("2023-04-15") },
  { empId: "E010", name: "User10", department: "Management", age: 38, salary: 90000, isActive: true, location: "Chandigarh", joiningDate: new Date("2022-10-10") },

  { empId: "E011", name: "User11", department: "Engineering", age: 22, salary: 35000, isActive: true, location: "Bhopal", joiningDate: new Date("2023-05-01") },
  { empId: "E012", name: "User12", department: "QA", age: 24, salary: 36000, isActive: false, location: "Lucknow", joiningDate: new Date("2023-05-10") },
  { empId: "E013", name: "User13", department: "HR", age: 30, salary: 43000, isActive: true, location: "Delhi", joiningDate: new Date("2023-05-15") },
  { empId: "E014", name: "User14", department: "Engineering", age: 27, salary: 48000, isActive: true, location: "Ahmedabad", joiningDate: new Date("2023-06-01") },
  { empId: "E015", name: "User15", department: "Management", age: 41, salary: 95000, isActive: false, location: "Mumbai", joiningDate: new Date("2022-09-20") },

  { empId: "E016", name: "User16", department: "Design", age: 26, salary: 44000, isActive: true, location: "Pune", joiningDate: new Date("2023-06-15") },
  { empId: "E017", name: "User17", department: "QA", age: 23, salary: 34000, isActive: true, location: "Indore", joiningDate: new Date("2023-07-01") },
  { empId: "E018", name: "User18", department: "Engineering", age: 32, salary: 60000, isActive: true, location: "Surat", joiningDate: new Date("2022-08-01") },
  { empId: "E019", name: "User19", department: "HR", age: 34, salary: 46000, isActive: false, location: "Delhi", joiningDate: new Date("2023-07-15") },
  { empId: "E020", name: "User20", department: "Management", age: 39, salary: 88000, isActive: true, location: "Jaipur", joiningDate: new Date("2022-07-10") },

  { empId: "E021", name: "User21", department: "Engineering", age: 28, salary: 52000, isActive: true, location: "Ahmedabad", joiningDate: new Date("2023-08-01") },
  { empId: "E022", name: "User22", department: "QA", age: 26, salary: 37000, isActive: true, location: "Bhopal", joiningDate: new Date("2023-08-10") },
  { empId: "E023", name: "User23", department: "Design", age: 29, salary: 47000, isActive: true, location: "Pune", joiningDate: new Date("2023-08-20") },
  { empId: "E024", name: "User24", department: "HR", age: 31, salary: 45000, isActive: true, location: "Delhi", joiningDate: new Date("2023-09-01") },
  { empId: "E025", name: "User25", department: "Engineering", age: 34, salary: 65000, isActive: false, location: "Surat", joiningDate: new Date("2022-06-01") },

  { empId: "E026", name: "User26", department: "Management", age: 42, salary: 99000, isActive: true, location: "Mumbai", joiningDate: new Date("2022-05-01") },
  { empId: "E027", name: "User27", department: "QA", age: 24, salary: 36000, isActive: true, location: "Indore", joiningDate: new Date("2023-09-15") },
  { empId: "E028", name: "User28", department: "Engineering", age: 26, salary: 50000, isActive: true, location: "Ahmedabad", joiningDate: new Date("2023-10-01") },
  { empId: "E029", name: "User29", department: "Design", age: 28, salary: 48000, isActive: false, location: "Jaipur", joiningDate: new Date("2023-10-10") },
  { empId: "E030", name: "User30", department: "HR", age: 33, salary: 47000, isActive: true, location: "Delhi", joiningDate: new Date("2023-10-20") },

  { empId: "E031", name: "User31", department: "Engineering", age: 23, salary: 36000, isActive: true, location: "Pune", joiningDate: new Date("2023-11-01") },
  { empId: "E032", name: "User32", department: "QA", age: 27, salary: 38000, isActive: true, location: "Lucknow", joiningDate: new Date("2023-11-05") },
  { empId: "E033", name: "User33", department: "Management", age: 37, salary: 82000, isActive: false, location: "Chandigarh", joiningDate: new Date("2022-04-01") },
  { empId: "E034", name: "User34", department: "Engineering", age: 29, salary: 56000, isActive: true, location: "Ahmedabad", joiningDate: new Date("2023-11-15") },
  { empId: "E035", name: "User35", department: "Design", age: 31, salary: 50000, isActive: true, location: "Pune", joiningDate: new Date("2023-11-20") },

  { empId: "E036", name: "User36", department: "HR", age: 35, salary: 52000, isActive: true, location: "Delhi", joiningDate: new Date("2023-12-01") },
  { empId: "E037", name: "User37", department: "Engineering", age: 33, salary: 70000, isActive: false, location: "Surat", joiningDate: new Date("2022-03-01") },
  { empId: "E038", name: "User38", department: "QA", age: 25, salary: 37000, isActive: true, location: "Indore", joiningDate: new Date("2023-12-10") },
  { empId: "E039", name: "User39", department: "Management", age: 40, salary: 91000, isActive: true, location: "Mumbai", joiningDate: new Date("2022-02-01") },
  { empId: "E040", name: "User40", department: "Engineering", age: 28, salary: 54000, isActive: true, location: "Ahmedabad", joiningDate: new Date("2023-12-15") },

  { empId: "E041", name: "User41", department: "Design", age: 27, salary: 46000, isActive: true, location: "Pune", joiningDate: new Date("2024-01-01") },
  { empId: "E042", name: "User42", department: "QA", age: 24, salary: 35000, isActive: false, location: "Bhopal", joiningDate: new Date("2024-01-05") },
  { empId: "E043", name: "User43", department: "HR", age: 32, salary: 48000, isActive: true, location: "Delhi", joiningDate: new Date("2024-01-10") },
  { empId: "E044", name: "User44", department: "Engineering", age: 30, salary: 62000, isActive: true, location: "Surat", joiningDate: new Date("2024-01-15") },
  { empId: "E045", name: "User45", department: "Management", age: 43, salary: 97000, isActive: false, location: "Mumbai", joiningDate: new Date("2022-01-01") },

  { empId: "E046", name: "User46", department: "Design", age: 28, salary: 49000, isActive: true, location: "Pune", joiningDate: new Date("2024-01-20") },
  { empId: "E047", name: "User47", department: "Engineering", age: 26, salary: 51000, isActive: true, location: "Ahmedabad", joiningDate: new Date("2024-01-25") },
  { empId: "E048", name: "User48", department: "QA", age: 29, salary: 40000, isActive: true, location: "Indore", joiningDate: new Date("2024-01-28") },
  { empId: "E049", name: "User49", department: "HR", age: 36, salary: 55000, isActive: false, location: "Delhi", joiningDate: new Date("2024-02-01") },
  { empId: "E050", name: "User50", department: "Engineering", age: 34, salary: 72000, isActive: true, location: "Mumbai", joiningDate: new Date("2024-02-05") }
])

db.sales.insertMany([
  { saleId: "S001", itemCode: "I001", region: "North", unitsSold: 2, totalAmount: 9000, status: "COMPLETED", saleDate: new Date("2024-02-01") },
  { saleId: "S002", itemCode: "I002", region: "South", unitsSold: 1, totalAmount: 8500, status: "COMPLETED", saleDate: new Date("2024-02-02") },
  { saleId: "S003", itemCode: "I003", region: "East", unitsSold: 3, totalAmount: 3600, status: "CANCELLED", saleDate: new Date("2024-02-03") },
  { saleId: "S004", itemCode: "I004", region: "West", unitsSold: 5, totalAmount: 4500, status: "COMPLETED", saleDate: new Date("2024-02-04") },
  { saleId: "S005", itemCode: "I005", region: "North", unitsSold: 4, totalAmount: 6000, status: "PENDING", saleDate: new Date("2024-02-05") },

  { saleId: "S006", itemCode: "I006", region: "South", unitsSold: 2, totalAmount: 24000, status: "COMPLETED", saleDate: new Date("2024-02-06") },
  { saleId: "S007", itemCode: "I007", region: "East", unitsSold: 1, totalAmount: 9500, status: "COMPLETED", saleDate: new Date("2024-02-07") },
  { saleId: "S008", itemCode: "I008", region: "West", unitsSold: 2, totalAmount: 6400, status: "COMPLETED", saleDate: new Date("2024-02-08") },
  { saleId: "S009", itemCode: "I009", region: "North", unitsSold: 10, totalAmount: 3000, status: "COMPLETED", saleDate: new Date("2024-02-09") },
  { saleId: "S010", itemCode: "I010", region: "South", unitsSold: 1, totalAmount: 28000, status: "CANCELLED", saleDate: new Date("2024-02-10") },

  { saleId: "S011", itemCode: "I011", region: "East", unitsSold: 1, totalAmount: 35000, status: "COMPLETED", saleDate: new Date("2024-02-11") },
  { saleId: "S012", itemCode: "I012", region: "West", unitsSold: 2, totalAmount: 12000, status: "COMPLETED", saleDate: new Date("2024-02-12") },
  { saleId: "S013", itemCode: "I013", region: "North", unitsSold: 3, totalAmount: 7500, status: "COMPLETED", saleDate: new Date("2024-02-13") },
  { saleId: "S014", itemCode: "I014", region: "South", unitsSold: 5, totalAmount: 2000, status: "PENDING", saleDate: new Date("2024-02-14") },
  { saleId: "S015", itemCode: "I015", region: "East", unitsSold: 4, totalAmount: 2800, status: "COMPLETED", saleDate: new Date("2024-02-15") },

  { saleId: "S016", itemCode: "I016", region: "West", unitsSold: 2, totalAmount: 6400, status: "COMPLETED", saleDate: new Date("2024-02-16") },
  { saleId: "S017", itemCode: "I017", region: "North", unitsSold: 3, totalAmount: 8400, status: "COMPLETED", saleDate: new Date("2024-02-17") },
  { saleId: "S018", itemCode: "I018", region: "South", unitsSold: 1, totalAmount: 15000, status: "PENDING", saleDate: new Date("2024-02-18") },
  { saleId: "S019", itemCode: "I019", region: "East", unitsSold: 1, totalAmount: 18000, status: "COMPLETED", saleDate: new Date("2024-02-19") },
  { saleId: "S020", itemCode: "I020", region: "West", unitsSold: 2, totalAmount: 18000, status: "COMPLETED", saleDate: new Date("2024-02-20") },

  { saleId: "S021", itemCode: "I021", region: "North", unitsSold: 1, totalAmount: 11000, status: "COMPLETED", saleDate: new Date("2024-02-21") },
  { saleId: "S022", itemCode: "I022", region: "South", unitsSold: 1, totalAmount: 42000, status: "COMPLETED", saleDate: new Date("2024-02-22") },
  { saleId: "S023", itemCode: "I023", region: "East", unitsSold: 1, totalAmount: 25000, status: "PENDING", saleDate: new Date("2024-02-23") },
  { saleId: "S024", itemCode: "I024", region: "West", unitsSold: 2, totalAmount: 10400, status: "COMPLETED", saleDate: new Date("2024-02-24") },
  { saleId: "S025", itemCode: "I025", region: "North", unitsSold: 1, totalAmount: 8200, status: "COMPLETED", saleDate: new Date("2024-02-25") },

  { saleId: "S026", itemCode: "I026", region: "South", unitsSold: 3, totalAmount: 3300, status: "COMPLETED", saleDate: new Date("2024-02-26") },
  { saleId: "S027", itemCode: "I027", region: "East", unitsSold: 8, totalAmount: 2000, status: "COMPLETED", saleDate: new Date("2024-02-27") },
  { saleId: "S028", itemCode: "I028", region: "West", unitsSold: 5, totalAmount: 4500, status: "PENDING", saleDate: new Date("2024-02-28") },
  { saleId: "S029", itemCode: "I029", region: "North", unitsSold: 2, totalAmount: 13000, status: "COMPLETED", saleDate: new Date("2024-02-29") },
  { saleId: "S030", itemCode: "I030", region: "South", unitsSold: 6, totalAmount: 4800, status: "COMPLETED", saleDate: new Date("2024-03-01") },

  { saleId: "S031", itemCode: "I031", region: "East", unitsSold: 2, totalAmount: 4400, status: "COMPLETED", saleDate: new Date("2024-03-02") },
  { saleId: "S032", itemCode: "I032", region: "West", unitsSold: 1, totalAmount: 55000, status: "COMPLETED", saleDate: new Date("2024-03-03") },
  { saleId: "S033", itemCode: "I033", region: "North", unitsSold: 1, totalAmount: 38000, status: "COMPLETED", saleDate: new Date("2024-03-04") },
  { saleId: "S034", itemCode: "I034", region: "South", unitsSold: 2, totalAmount: 6400, status: "CANCELLED", saleDate: new Date("2024-03-05") },
  { saleId: "S035", itemCode: "I035", region: "East", unitsSold: 1, totalAmount: 7200, status: "COMPLETED", saleDate: new Date("2024-03-06") },

  { saleId: "S036", itemCode: "I036", region: "West", unitsSold: 3, totalAmount: 5400, status: "COMPLETED", saleDate: new Date("2024-03-07") },
  { saleId: "S037", itemCode: "I037", region: "North", unitsSold: 4, totalAmount: 2400, status: "COMPLETED", saleDate: new Date("2024-03-08") },
  { saleId: "S038", itemCode: "I038", region: "South", unitsSold: 2, totalAmount: 4800, status: "PENDING", saleDate: new Date("2024-03-09") },
  { saleId: "S039", itemCode: "I039", region: "East", unitsSold: 3, totalAmount: 3900, status: "COMPLETED", saleDate: new Date("2024-03-10") },
  { saleId: "S040", itemCode: "I040", region: "West", unitsSold: 1, totalAmount: 48000, status: "COMPLETED", saleDate: new Date("2024-03-11") },

  { saleId: "S041", itemCode: "I041", region: "North", unitsSold: 2, totalAmount: 52000, status: "COMPLETED", saleDate: new Date("2024-03-12") },
  { saleId: "S042", itemCode: "I042", region: "South", unitsSold: 1, totalAmount: 15000, status: "COMPLETED", saleDate: new Date("2024-03-13") },
  { saleId: "S043", itemCode: "I043", region: "East", unitsSold: 6, totalAmount: 3000, status: "COMPLETED", saleDate: new Date("2024-03-14") },
  { saleId: "S044", itemCode: "I044", region: "West", unitsSold: 2, totalAmount: 7000, status: "PENDING", saleDate: new Date("2024-03-15") },
  { saleId: "S045", itemCode: "I045", region: "North", unitsSold: 3, totalAmount: 2100, status: "COMPLETED", saleDate: new Date("2024-03-16") },

  { saleId: "S046", itemCode: "I046", region: "South", unitsSold: 1, totalAmount: 9800, status: "COMPLETED", saleDate: new Date("2024-03-17") },
  { saleId: "S047", itemCode: "I047", region: "East", unitsSold: 1, totalAmount: 5200, status: "COMPLETED", saleDate: new Date("2024-03-18") },
  { saleId: "S048", itemCode: "I048", region: "West", unitsSold: 1, totalAmount: 14500, status: "COMPLETED", saleDate: new Date("2024-03-19") },
  { saleId: "S049", itemCode: "I049", region: "North", unitsSold: 1, totalAmount: 22000, status: "PENDING", saleDate: new Date("2024-03-20") },
  { saleId: "S050", itemCode: "I050", region: "South", unitsSold: 1, totalAmount: 65000, status: "COMPLETED", saleDate: new Date("2024-03-21") }
])

db.inventory.insertMany([
  { itemCode: "I001", itemName: "Office Chair", category: "Furniture", price: 4500, quantity: 20, supplier: "UrbanFurn", isAvailable: true, addedOn: new Date("2024-01-01") },
  { itemCode: "I002", itemName: "Desk Table", category: "Furniture", price: 8500, quantity: 10, supplier: "WoodWorks", isAvailable: true, addedOn: new Date("2024-01-02") },
  { itemCode: "I003", itemName: "Laptop Stand", category: "Accessories", price: 1200, quantity: 0, supplier: "TechGear", isAvailable: false, addedOn: new Date("2024-01-03") },
  { itemCode: "I004", itemName: "Wireless Mouse", category: "Electronics", price: 900, quantity: 50, supplier: "LogiTech", isAvailable: true, addedOn: new Date("2024-01-04") },
  { itemCode: "I005", itemName: "Keyboard", category: "Electronics", price: 1500, quantity: 40, supplier: "KeyMaster", isAvailable: true, addedOn: new Date("2024-01-05") },

  { itemCode: "I006", itemName: "Monitor 24inch", category: "Electronics", price: 12000, quantity: 15, supplier: "ViewMax", isAvailable: true, addedOn: new Date("2024-01-06") },
  { itemCode: "I007", itemName: "Printer", category: "Electronics", price: 9500, quantity: 5, supplier: "PrintTech", isAvailable: true, addedOn: new Date("2024-01-07") },
  { itemCode: "I008", itemName: "Whiteboard", category: "Furniture", price: 3200, quantity: 12, supplier: "OfficePro", isAvailable: true, addedOn: new Date("2024-01-08") },
  { itemCode: "I009", itemName: "Marker Set", category: "Accessories", price: 300, quantity: 100, supplier: "WriteWell", isAvailable: true, addedOn: new Date("2024-01-09") },
  { itemCode: "I010", itemName: "Projector", category: "Electronics", price: 28000, quantity: 3, supplier: "BeamPro", isAvailable: true, addedOn: new Date("2024-01-10") },

  { itemCode: "I011", itemName: "CPU Cabinet", category: "Electronics", price: 35000, quantity: 7, supplier: "BuildPC", isAvailable: true, addedOn: new Date("2024-01-11") },
  { itemCode: "I012", itemName: "UPS", category: "Electronics", price: 6000, quantity: 9, supplier: "PowerSafe", isAvailable: true, addedOn: new Date("2024-01-12") },
  { itemCode: "I013", itemName: "Router", category: "Electronics", price: 2500, quantity: 18, supplier: "NetLink", isAvailable: true, addedOn: new Date("2024-01-13") },
  { itemCode: "I014", itemName: "LAN Cable", category: "Accessories", price: 400, quantity: 0, supplier: "CablePro", isAvailable: false, addedOn: new Date("2024-01-14") },
  { itemCode: "I015", itemName: "Extension Board", category: "Accessories", price: 700, quantity: 35, supplier: "PowerLine", isAvailable: true, addedOn: new Date("2024-01-15") },

  { itemCode: "I016", itemName: "Webcam", category: "Electronics", price: 3200, quantity: 14, supplier: "CamTech", isAvailable: true, addedOn: new Date("2024-01-16") },
  { itemCode: "I017", itemName: "Headphones", category: "Electronics", price: 2800, quantity: 22, supplier: "SoundMax", isAvailable: true, addedOn: new Date("2024-01-17") },
  { itemCode: "I018", itemName: "Conference Speaker", category: "Electronics", price: 15000, quantity: 4, supplier: "AudioHub", isAvailable: true, addedOn: new Date("2024-01-18") },
  { itemCode: "I019", itemName: "Coffee Machine", category: "Electronics", price: 18000, quantity: 2, supplier: "CafePro", isAvailable: true, addedOn: new Date("2024-01-19") },
  { itemCode: "I020", itemName: "Water Dispenser", category: "Electronics", price: 9000, quantity: 6, supplier: "AquaPure", isAvailable: true, addedOn: new Date("2024-01-20") },

  { itemCode: "I021", itemName: "Filing Cabinet", category: "Furniture", price: 11000, quantity: 8, supplier: "SteelWorks", isAvailable: true, addedOn: new Date("2024-01-21") },
  { itemCode: "I022", itemName: "Office Sofa", category: "Furniture", price: 42000, quantity: 1, supplier: "ComfortZone", isAvailable: true, addedOn: new Date("2024-01-22") },
  { itemCode: "I023", itemName: "Reception Desk", category: "Furniture", price: 25000, quantity: 2, supplier: "FrontDesk", isAvailable: true, addedOn: new Date("2024-01-23") },
  { itemCode: "I024", itemName: "Paper Shredder", category: "Electronics", price: 5200, quantity: 5, supplier: "SecureDoc", isAvailable: true, addedOn: new Date("2024-01-24") },
  { itemCode: "I025", itemName: "Scanner", category: "Electronics", price: 8200, quantity: 6, supplier: "ScanTech", isAvailable: true, addedOn: new Date("2024-01-25") },

  { itemCode: "I026", itemName: "Desk Lamp", category: "Accessories", price: 1100, quantity: 30, supplier: "BrightLite", isAvailable: true, addedOn: new Date("2024-01-26") },
  { itemCode: "I027", itemName: "Mouse Pad", category: "Accessories", price: 250, quantity: 150, supplier: "SoftMat", isAvailable: true, addedOn: new Date("2024-01-27") },
  { itemCode: "I028", itemName: "Stationery Kit", category: "Accessories", price: 900, quantity: 60, supplier: "OfficeBasics", isAvailable: true, addedOn: new Date("2024-01-28") },
  { itemCode: "I029", itemName: "External Hard Drive", category: "Electronics", price: 6500, quantity: 12, supplier: "DataStore", isAvailable: true, addedOn: new Date("2024-01-29") },
  { itemCode: "I030", itemName: "Pen Drive 64GB", category: "Electronics", price: 800, quantity: 80, supplier: "FlashX", isAvailable: true, addedOn: new Date("2024-01-30") },

  { itemCode: "I031", itemName: "Power Bank", category: "Electronics", price: 2200, quantity: 18, supplier: "ChargePro", isAvailable: true, addedOn: new Date("2024-01-31") },
  { itemCode: "I032", itemName: "Smart TV", category: "Electronics", price: 55000, quantity: 2, supplier: "VisionPlus", isAvailable: true, addedOn: new Date("2024-02-01") },
  { itemCode: "I033", itemName: "AC Unit", category: "Electronics", price: 38000, quantity: 1, supplier: "CoolAir", isAvailable: true, addedOn: new Date("2024-02-02") },
  { itemCode: "I034", itemName: "Heater", category: "Electronics", price: 3200, quantity: 0, supplier: "HeatMax", isAvailable: false, addedOn: new Date("2024-02-03") },
  { itemCode: "I035", itemName: "Vacuum Cleaner", category: "Electronics", price: 7200, quantity: 4, supplier: "CleanTech", isAvailable: true, addedOn: new Date("2024-02-04") },

  { itemCode: "I036", itemName: "Footrest", category: "Furniture", price: 1800, quantity: 10, supplier: "ComfortZone", isAvailable: true, addedOn: new Date("2024-02-05") },
  { itemCode: "I037", itemName: "Cable Organizer", category: "Accessories", price: 600, quantity: 40, supplier: "CablePro", isAvailable: true, addedOn: new Date("2024-02-06") },
  { itemCode: "I038", itemName: "Laptop Bag", category: "Accessories", price: 2400, quantity: 18, supplier: "CarryAll", isAvailable: true, addedOn: new Date("2024-02-07") },
  { itemCode: "I039", itemName: "Surge Protector", category: "Accessories", price: 1300, quantity: 25, supplier: "PowerLine", isAvailable: true, addedOn: new Date("2024-02-08") },
  { itemCode: "I040", itemName: "Standing Desk", category: "Furniture", price: 48000, quantity: 1, supplier: "FlexiDesk", isAvailable: true, addedOn: new Date("2024-02-09") },

  { itemCode: "I041", itemName: "Tablet", category: "Electronics", price: 26000, quantity: 6, supplier: "TabWorld", isAvailable: true, addedOn: new Date("2024-02-10") },
  { itemCode: "I042", itemName: "Smart Watch", category: "Electronics", price: 15000, quantity: 9, supplier: "TimeTech", isAvailable: true, addedOn: new Date("2024-02-11") },
  { itemCode: "I043", itemName: "Mobile Stand", category: "Accessories", price: 500, quantity: 55, supplier: "GripGo", isAvailable: true, addedOn: new Date("2024-02-12") },
  { itemCode: "I044", itemName: "Desk Drawer", category: "Furniture", price: 3500, quantity: 7, supplier: "WoodWorks", isAvailable: true, addedOn: new Date("2024-02-13") },
  { itemCode: "I045", itemName: "Paper Tray", category: "Accessories", price: 700, quantity: 20, supplier: "OfficePro", isAvailable: true, addedOn: new Date("2024-02-14") },

  { itemCode: "I046", itemName: "Barcode Scanner", category: "Electronics", price: 9800, quantity: 3, supplier: "ScanTech", isAvailable: true, addedOn: new Date("2024-02-15") },
  { itemCode: "I047", itemName: "Cash Drawer", category: "Electronics", price: 5200, quantity: 2, supplier: "RetailGear", isAvailable: true, addedOn: new Date("2024-02-16") },
  { itemCode: "I048", itemName: "Label Printer", category: "Electronics", price: 14500, quantity: 1, supplier: "PrintTech", isAvailable: true, addedOn: new Date("2024-02-17") },
  { itemCode: "I049", itemName: "Noise Cancelling Headset", category: "Electronics", price: 22000, quantity: 2, supplier: "SoundMax", isAvailable: true, addedOn: new Date("2024-02-18") },
  { itemCode: "I050", itemName: "Server Rack", category: "Furniture", price: 65000, quantity: 1, supplier: "RackPro", isAvailable: true, addedOn: new Date("2024-02-19") }
])




db.employees.insertOne(  { empId: "E051", name: "Shubham", department: "Engineering", age: 34, salary: 172000, isActive: true, location: "Pune", joiningDate: new Date("2024-02-05") })

-- Assignments

db.employees.find({ department: "Engineering" })

db.employees.find({ isActive: true })

db.employees.find({ age: { $gt: 30}}).sort( { age: 1})

db.employees.find({ location: "Delhi", isActive: true })

db.sales.find({ totalAmount: { $lt: 5000 }})

db.inventory.find({isAvailable: false})

db.inventory.find({ category: "Electronics"}, {
    itemName: 1,
    category: 1,
    price:1
})

db.sales.find({ status: "COMPLETED"})

db.sales.find({ region: "North"})

db.sales.findOne({unitsSold: {$gt: 3}})

db.employees.find({ salary: { $gt: 60000 }})

db.employees.find({
        age: { $gte: 25, $lte: 30},
})

db.employees.find({
    department: { $in : ["HR", "QA"]}
})

db.employees.find({
    isActive: true,
    location: { $in : [ "Mumbai", "Surat"]}
})

db.inventory.find({
    isAvailable: true,
    quantity: { $gt: 20}
}).sort({ quantity: 1})