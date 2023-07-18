/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
const NFTs = []


// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (_name, _class, _age, _school, _board, _marks, _grade) {
    const NFT = {
        "name": _name,
        "class": _class,
        "age": _age,
        "school" : _school,
        "board" : _board,
        "marks" : _marks,
        "grade" : _grade
    };
    NFTs.push(NFT);
    console.log("Name of Minted NFT is : "+_name);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    for(let i=0; i <NFTs.length; i++){
        console.log("\nID: \t\t"+ (i+1));
        console.log("Name: \t\t"+ NFTs[i].name);
        console.log("Class: \t\t"+ NFTs[i].class);
        console.log("Age: \t\t"+ NFTs[i].age);
        console.log("School: \t"+ NFTs[i].school);
        console.log("Board: \t\t"+ NFTs[i].board);
        console.log("Marks: \t\t"+ NFTs[i].marks);
        console.log("Grade: \t\t"+ NFTs[i].grade);
        

    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("\nTotal No. of NFT is: "+ NFTs.length);
}

// call your functions below this line
mintNFT("Gaurav", "Engineering", 19, "CU", "CBSE", 75, "B+");
mintNFT("Shalini", 1, 8, "Sri Aurobindo Academy", "CBSE", 96, "A+");
mintNFT("Pragati", 12, 17, "JLN College", "BSEB", 80, "B");
mintNFT("Aparna", "Nursery", 4, "Sone Rising School", "CBSE", 75, "B+");
mintNFT("Raja", "B.Com", 19, "Sharda Birla Universirty", "CBSE", 65, "C+");



listNFTs();
getTotalSupply();
