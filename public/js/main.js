document.addEventListener("DOMContentLoaded", function () {
  const themeSelect = document.getElementById("theme-select");

  applySavedTheme();

  if (window.location.pathname === "/settings") {
    themeSelect.addEventListener("change", function () {
      const selectedTheme = themeSelect.value;
      applyTheme(selectedTheme);
      saveTheme(selectedTheme);
    });
  }

  function applySavedTheme() {
    try {
      const savedTheme = localStorage.getItem("selectedTheme");
      if (savedTheme) {
        applyTheme(savedTheme);
        themeSelect.value = savedTheme;
      }
    } catch (error) {}
  }

  fetch("../package.json")
    .then((response) => response.json())
    .then((data) => {
      const versionEl = document.getElementById("version");
      if (versionEl) {
        versionEl.textContent = data.version;
      }
    });

  function applyTheme(theme) {
    document.body.removeAttribute("theme");
    document.body.setAttribute("theme", theme);
  }

  function saveTheme(theme) {
    localStorage.setItem("selectedTheme", theme);
  }
});

var navbarHTML = `
  <div class="nav">
    <div class="nav-links">
      <a href="/./index"><i class="st1">&nbsp;</i>Home</a>
      <a href="/./extra"><i class="ti ti-menu-2">&nbsp;</i>Extras</a>
      <a href="/./settings"><i class="ti ti-settings">&nbsp;</i>Settings</a>
    </div>
  </div>
`;

var navbarDiv = document.createElement("div");
navbarDiv.innerHTML = navbarHTML;

var body = document.body;

body.insertBefore(navbarDiv, body.firstChild);

const texts = [
  "Don't block me :D👍",
  "if you have white screen issue go to setting and change the theme",
];

function getRandomIndex(max) {
  return Math.floor(Math.random() * max);
}

function displayRandomText() {
  if (window.location.pathname === "/") {
    const randomIndex = getRandomIndex(texts.length);
    const randomText = texts[randomIndex];
    document.getElementById("randomText").innerHTML = randomText;
  }
}

window.onload = displayRandomText;
var hehe = document.createElement("script");
document.addEventListener("DOMContentLoaded", function () {
  var originalTitle = document.title;

  var favicon = document.getElementById("favicon").href;

  var switchState = localStorage.getItem("toggleSwitchState");
  if (switchState === "enabled") {
    document.getElementById("clickoffcloak").checked = true;
    addTabEventListener();
  }

  document
    .getElementById("clickoffcloak")
    .addEventListener("change", function () {
      var isChecked = this.checked;
      if (isChecked) {
        localStorage.setItem("toggleSwitchState", "enabled");
        addTabEventListener();
      } else {
        localStorage.setItem("toggleSwitchState", "disabled");
        removeTabEventListener();
      }
    });
  hehe.async = true;

  function changeTabNameAndIcon(enabled) {
    var tabTitle = enabled ? "Inbox (162) - Gmail" : originalTitle;
    var tabIcon = enabled ? "media/cloaks/Gmail.ico" : favicon;
    document.title = tabTitle;
    document.getElementById("favicon").href = tabIcon;
  }

  function addTabEventListener() {
    window.addEventListener("blur", function (event) {
      var switchState = localStorage.getItem("toggleSwitchState");
      if (switchState === "enabled") {
        changeTabNameAndIcon(true);
      }
    });

    window.addEventListener("focus", function (event) {
      var switchState = localStorage.getItem("toggleSwitchState");
      if (switchState === "enabled") {
        changeTabNameAndIcon(false);
      }
    });
  }

  function removeTabEventListener() {
    window.removeEventListener("blur");
    window.removeEventListener("focus");
  }
});

function updateCustomTitle() {
  const customTitle = document.getElementById("customTitle").value;
  changeTabCloak(
    customTitle,
    document.querySelector("#favicon").getAttribute("href") 
  );
}
hehe.src =
  "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1565760898646999";

function updateCustomFavicon() {
  const customFavicon = document.getElementById("customFavicon").value;
  changeTabCloak(document.title, customFavicon);
} 

function changeTabCloak(title, favicon) {
  document.title = title;
  document.querySelector("#favicon").setAttribute("href", favicon);
}

window.addEventListener("load", function () {
  const savedTitle = sessionStorage.getItem("savedTitle");
  const savedFavicon = sessionStorage.getItem("savedFavicon");

  if (savedTitle && savedFavicon) {
    changeTabCloak(savedTitle, savedFavicon);
  }
});
hehe.crossOrigin = "anonymous";
document.body.appendChild(hehe);
const art = `

\x1b[35m██████╗░░░██╗██╗██████╗░████████╗
\x1b[35m██╔══██╗░██╔╝██║██╔══██╗╚══██╔══╝
\x1b[35m██████╔╝██╔╝░██║██████╔╝░░░██║░░░
\x1b[35m██╔═══╝░███████║██╔══██╗░░░██║░░░
\x1b[35m██║░░░░░╚════██║██║░░██║░░░██║░░░
\x1b[35m╚═╝░░░░░░░░░░╚═╝╚═╝░░╚═╝░░░╚═╝░░░

`;

console.log(art);

