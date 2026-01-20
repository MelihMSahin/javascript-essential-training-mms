/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

const headphone = {
  name: "wh1000 x6",
  colour: "black",
  isBlueTooth: true,
  current_music: null,
  playMusic: function (musicToPlay) {
    this.current_music = musicToPlay;
  },
};

const headphone_case = {
  headphone: headphone,
  colour: "grey",
  is_open: false,
  toggleLid: function () {
    this.is_open = !this.is_open;
  },
};
