import { readFileSync, writeFileSync } from "fs";

//  path to the data(proverbs.json) file
const filePath = "./proverbs.json";

// Read from file
const readData = () => JSON.parse(readFileSync(filePath));

// Write to file
const writeData = (data) => writeFileSync(filePath, JSON.stringify(data));

// GET all proverbs
export const getAll = async (req, res) => {
  const data = await readData();
  if(data){
    res.status(200).json(data) 
  }
  else{
    res.status(404).json({message: "Data Not Found!"})
  }
};

// GET one proverb by ID
export const getById = async (req, res) => {
  const data = await readData();

   //Get id from request body
   const { id } = req.params;
  const proverb = data.find(p => p.id == id);
  if (!proverb) {
    res.status(404).json({message: "Proverb not found"});
  } else {
    res.json(proverb);
  }
};

// CREATE a new proverb
export const create = async (req, res) => {
  const data = await readData();
  const newProverb = {
    id: toString(), // simple unique ID
    ...req.body,
  };
  if(newProverb){
    data.push(newProverb);
    writeData(data);
    res.status(201).json(newProverb);
  }
  else{ 
    res.status(404).json({message: "The proverb is not found"})
  }
  
};

// UPDATE a proverb
export const update = async (req, res) => {
  const data = await readData();
  const { id } = req.params;
  const index = data.findIndex(p => p.id == id);
  if (index === -1) {
     res.status(404).json({message: "Proverb not found"});

  } else {
    data[index] = { ...data[index], ...req.body };
    writeData(data);
    res.json(data[index]);
  }
};

// DELETE a proverb
export const remove = async (req, res) => {
  const data = await readData();
  const { id } = req.params;
  const filtered = data.filter(id);
  if (filtered.length === data.length) {
     res.status(404).json({message: "Proverb not found"});
  } else {
    writeData(filtered);
    res.json({message: "Proverb deleted"});
  }
};
