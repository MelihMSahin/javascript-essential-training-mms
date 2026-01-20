/**
 * Practice: Making methods
 *
 * - Create a method for each object property.
 * - The method receives a value to match the property to be changed.
 * - Create a simple function to replace the current property value with the received value.
 * - Test the method by sending new values and checking the properties in the console.
 */

const backpack = {
  name: "Everyday Backpack",
  volume: 30,
  color: "grey",
  pocketNum: 15,
  strapLength: {
    left: 26,
    right: 26,
  },
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
  },
  newStrapLength: function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  },
  setName: function (name) {
    this.name = name;
    console.log("The new name is set to:", this.name);
  },
  setVolume: function (volume) {
    this.volume = volume;
    console.log("The new volume is set to:", this.volume);
  },
  setColour: function (colour) {
    this.color = colour;
    console.log("The new colour is set to:", this.color);
  },
  setPocketNum: function (pocketNum) {
    this.pocketNum = pocketNum;
    console.log("The new pocket count is set to:", this.pocketNum);
  },
  setStrapLengths: function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
    console.log(
      "The new strap lengths are:",
      this.strapLength.left,
      "and",
      this.strapLength.right,
    );
  },
};
