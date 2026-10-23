// folder/src/script.js

const menuBtn = document.getElementById("mobileMenuBtn");
const mobileMenu = document.getElementById("mobileMenu");
const main = document.querySelector("main");
const wrapper = document.querySelector(".wrapper");
const footer = document.querySelector("footer");

let bar = menuBtn.innerHTML;
main.style.visibility = "visible";

menuBtn.addEventListener("click", () => {
  if (menuBtn.innerHTML === bar) {
    menuBtn.innerHTML = "X";
    footer.style.visibility = "hidden";
    mobileMenu.style.visibility = "visible";
    main.style.visibility = "hidden";
    document.body.style.overflowY = "hidden";

    mobileMenu.classList.add("ham");
  } else {
    menuBtn.innerHTML = bar;

    document.body.style.overflowY = "";

    main.style.visibility = "visible";
    mobileMenu.classList.remove("ham");
    footer.style.visibility = "visible";
  }
});

mobileMenu.addEventListener("click", () => {
  mobileMenu.classList.remove("ham");
  main.style.visibility = "visible";
  menuBtn.innerHTML = bar;
  footer.style.visibility = "visible";
  document.body.style.overflowY = "";
});

// DYNAMIC CONTENT LOADER FROM THE NETWORK
let college = document.getElementById("college");
let course = document.getElementById("course");
let session = document.getElementById("session");
let semester = document.getElementById("semester");
let level = document.getElementById("level");
let structuralData = null;

const url = "/data-config.json";

const data = fetch(url);
data
  .then((response) => {
    if (!response.ok) {
      throw new Error("Couldn't load dataConfig.json file");
    } else {
      return response.json();
    }
  })
  .then((value) => {
    structuralData = value;
    college.innerHTML =
      "<option>--Choose College--</option>" +
      value.colleges
        .map((col) => {
          return `<option value="${col.id}">${col.name}</option>`;
        })
        .join(" ");

    session.innerHTML =
      "<option>--All Sessions--</option>" +
      structuralData.sessions
        .map((sess) => {
          return `<option>${sess}</option>`;
        })
        .join(" ");

    semester.innerHTML = structuralData.semester
      .map((sems) => {
        return `<option>${sems}</option>`;
      })
      .join(" ");

    level.innerHTML =
      "<option>--All Levels--</option>" +
      structuralData.level
        .map((level) => {
          return `<option>${level}</option>`;
        })
        .join(" ");

    //handles the courses
    college.addEventListener("change", () => {
      let colId = college.value;
      // console.log(colId);
      
      if (colId === "--Choose College--") {
        course.classList.add("disabled");
        course.disabled = true;
      } else {
        course.classList.remove("disabled");
        course.disabled = false;
      }

      let dynamicCourse = structuralData.colleges;

      let result = dynamicCourse.find((id) => id.id === colId);
      let finalResult = result.courses;
      course.innerHTML = "";
      course.innerHTML =
        course.innerHTML +
        finalResult.map((element) => {
          return `<option value="${element.id}">${element.name}</option>`;

          // console.log(element.name);
        }).join(" ");

      // dynamicCourse.find((id) => {
      //   if (id.id === colId) {
      //     console.log(id.courses);
      //     return `<option value="${id.id}">${id.courses}</option>`;
      //   }
      // });
    });
  });
