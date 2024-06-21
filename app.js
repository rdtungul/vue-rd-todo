Vue.createApp({
  data() {
    return {
      goals: [],
      enteredValue: "",
    };
  },
  methods: {
    addGoal() {
      // console.log(this.enteredValue);
      if (this.enteredValue != "") {
        this.goals.push(this.enteredValue);
        this.enteredValue = "";
      } else {
        alert("Please enter a goal.");
      }
    },
    clearGoal(index) {
      this.goals.splice(index, 1);
    },
    clearAllGoals() {
      this.goals = [];
    },
  },
}).mount("#app");

// const buttonEl = document.querySelector("button");
// const inputEl = document.querySelector("input");
// const listEl = document.querySelector("ul");

// function addGoal(e) {
//   e.preventDefault();
//   if (inputEl.value !== "") {
//     const enteredValue = inputEl.value;
//     const listItemEl = document.createElement("li");
//     listItemEl.textContent = enteredValue;
//     listEl.appendChild(listItemEl);
//   } else {
//     alert("Please enter a goal first!");
//   }
// }

// buttonEl.addEventListener("click", addGoal);
