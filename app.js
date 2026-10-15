document.getElementById("Btn1").addEventListener("click", function () {
  currentStep = story[currentStep].btn1.step;
  LoadScene();
});
document.getElementById("Btn2").addEventListener("click", function () {
  currentStep = story[currentStep].btn2.step;
  LoadScene();
});

let story = {
  step1: {
    img: "https://tse2.mm.bing.net/th/id/OIP.i2RRjPTrzJz5Uwqxt_yzMwHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    text: "You wake up in the Basement after fleeing through the trapdoor under your rug. The floor is dark, damp, and echoes with creepy sounds. You see a glowing Treasure Room door to the left and a shadowy hallway leading forward.",
    btn1: { text: "Enter the Treasure Room", step: "step2" },
    btn2: { text: "Explore the Hallway", step: "step3" },
  },
  step2: {
    img: "https://tse2.mm.bing.net/th/id/OIP.i2RRjPTrzJz5Uwqxt_yzMwHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    text: "Inside the Treasure Room sits a pedestal with 'Spoon Bender' floating above it. Your tears turn purple and start homing in on targets! Armed and ready, you head down to the boss room.",
    btn1: { text: "Face Monstro in the Boss Room", step: "step4" },
    btn2: { text: "Look for Secret Rooms first", step: "step3" },
  },
  step3: {
    img: "https://tse2.mm.bing.net/th/id/OIP.i2RRjPTrzJz5Uwqxt_yzMwHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    text: "You stumble blindly into an uncleared room full of Flies and Spiders without any upgrades. You try to attack with normal tears, but you get overwhelmed!",
    btn1: { text: "Try to retreat", step: "step_death_basement" },
    btn2: { text: "Fight to the end", step: "step_death_basement" },
  },
  step4: {
    img: "https://tse2.mm.bing.net/th/id/OIP.i2RRjPTrzJz5Uwqxt_yzMwHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    text: "Monstro hops around wildly! Thanks to your homing tears, you wear him down quickly. He bursts into pickups, leaving behind a Health Up item and opening the trapdoor to the Caves.",
    btn1: { text: "Take the item and enter the Caves", step: "step5" },
    btn2: { text: "Take the Devil Deal that opened!", step: "step6" },
  },
  step5: {
    img: "https://tse2.mm.bing.net/th/id/OIP.i2RRjPTrzJz5Uwqxt_yzMwHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    text: "In the Caves, you find a Shop. The Shopkeeper sits frozen in the corner. There's a Soul Heart for 5 coins and a mystery pill on the floor.",
    btn1: { text: "Buy the Soul Heart", step: "step7" },
    btn2: { text: "Gulp down the Mystery Pill", step: "step8" },
  },
  step6: {
    img: "https://tse2.mm.bing.net/th/id/OIP.i2RRjPTrzJz5Uwqxt_yzMwHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    text: "You trade 2 red heart containers to Satan for 'Brimstone'! You now charge and fire a powerful blood beam, but your health is dangerously low (1 heart left).",
    btn1: { text: "Descend into the Caves carefully", step: "step7" },
    btn2: {
      text: "Rush recklessly through the Caves",
      step: "step_death_caves",
    },
  },
  step7: {
    img: "https://tse2.mm.bing.net/th/id/OIP.i2RRjPTrzJz5Uwqxt_yzMwHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    text: "You make it through the Depths to Mom's lair. Her massive foot crashes down from the ceiling, and walls sprout flesh tentacles! How do you attack?",
    btn1: { text: "Aim for Mom's Foot when it lands", step: "step9" },
    btn2: { text: "Focus on the doors when her eye peeks out", step: "step9" },
  },
  step8: {
    img: "https://tse2.mm.bing.net/th/id/OIP.i2RRjPTrzJz5Uwqxt_yzMwHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    text: "'TEARS DOWN!' The pill ruins your firing speed! Slowed and vulnerable, you stumble into the next room full of Boom Flies.",
    btn1: { text: "Try to dodge the explosions", step: "step_death_caves" },
  },
  step9: {
    img: "https://tse2.mm.bing.net/th/id/OIP.i2RRjPTrzJz5Uwqxt_yzMwHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    text: "Mom's leg crashes down one last time and explodes! A beam of light shines down to the Cathedral, while a blood-red hole opens up to the Womb.",
    btn1: { text: "Step into the Beam of Light", step: "step10" },
    btn2: { text: "Jump into the Womb Hole", step: "step11" },
  },
  step10: {
    img: "https://tse2.mm.bing.net/th/id/OIP.i2RRjPTrzJz5Uwqxt_yzMwHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    text: "You ascend to the Cathedral and step into the radiant room of Isaac. He floats up, unleashing holy beams across the room!",
    btn1: { text: "Dodge pattern and fire back", step: "step_win_cathedral" },
    btn2: {
      text: "Panic and run into the holy light",
      step: "step_death_cathedral",
    },
  },
  step11: {
    img: "https://tse2.mm.bing.net/th/id/OIP.i2RRjPTrzJz5Uwqxt_yzMwHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    text: "You drop down into the throbbing heart of the Womb to face It Lives. Heartbeats ring out loud as laser-firing eyes surround you.",
    btn1: {
      text: "Unleash all your firepower on the Heart",
      step: "step_win_womb",
    },
    btn2: {
      text: "Focus entirely on dodging projectiles",
      step: "step_death_womb",
    },
  },

  // --- ENDINGS / DEATH STEPS ---
  step_death_basement: {
    img: "https://i0.wp.com/pressxordie.com/wp-content/uploads/Death-basement-11.png",
    text: "DIED IN THE BASEMENT! Isaac was consumed by spiders. DEAR DIARY: Today I died...",
  },
  step_death_caves: {
    img: "https://i0.wp.com/pressxordie.com/wp-content/uploads/Death-basement-11.png",
    text: "DIED IN THE CAVES! A stray explosion cut your run short. Skill issue!",
  },
  step_death_cathedral: {
    img: "https://i0.wp.com/pressxordie.com/wp-content/uploads/Death-basement-11.png",
    text: "DIED IN THE CATHEDRAL! Isaac's holy beams disintegrated you right near the end.",
  },
  step_death_womb: {
    img: "https://i0.wp.com/pressxordie.com/wp-content/uploads/Death-basement-11.png",
    text: "DIED IN THE WOMB! You were crushed by It Lives' blood lasers.",
  },
  step_win_cathedral: {
    img: "https://tse2.mm.bing.net/th/id/OIP.i2RRjPTrzJz5Uwqxt_yzMwHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    text: "VICTORY! You defeated Isaac and opened the chest to unlock Eden! Final Score: 18,450.",
  },
  step_win_womb: {
    img: "https://tse2.mm.bing.net/th/id/OIP.i2RRjPTrzJz5Uwqxt_yzMwHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    text: "VICTORY! You defeated It Lives and unlocked the Polaroid! Final Score: 15,200.",
  },
};

const storyImage = document.getElementById("TheImage");
const storyText = document.getElementById("StoryText");
const storybtn1 = document.getElementById("Btn1");
const storybtn2 = document.getElementById("Btn2");
//let's use a currentStep variable to track where we are.
let currentStep = "step1";
LoadScene();
function LoadScene() {
  storybtn1.classList.add("hidden");
  storybtn2.classList.add("hidden");
  // storybtn1.disabled = true;
  // storybtn2.disabled = true;
  storyImage.src = story[currentStep].img;
  storyText.innerHTML = "";

  let text = story[currentStep].text;
  let i = 0;

  function typeWriter() {
    if (i < text.length) {
      storyText.innerHTML += text.charAt(i);
      i++;
      setTimeout(typeWriter, 1);
      if (i == text.length) {
        storybtn1.classList.remove("hidden");
        storybtn2.classList.remove("hidden");
        storybtn1.disabled = false;
        storybtn2.disabled = false;
      }
    }
  }

  typeWriter();

  if (story[currentStep].btn1 == undefined) {
    document.getElementById("ButtonDiv").classList.add("hidden");
  } else {
    document.getElementById("ButtonDiv").classList.remove("hidden");
    storybtn1.innerHTML = story[currentStep].btn1.text;
    storybtn2.innerHTML = story[currentStep].btn2.text;
  }
}
