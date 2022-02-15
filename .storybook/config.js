import { configure } from "@storybook/react";
import { setOptions } from "@storybook/addon-options";

const req = require.context("../stories", true, /\.stories\.js$/);
import "./app.scss";

setOptions({
  name: "React Menu",
  url: "https://github.com/skai-oss/react-menu",
  goFullScreen: false,
  showLeftPanel: true,
  showDownPanel: true,
  showSearchBox: false,
  downPanelInRight: false,
  sortStoriesByKind: false
});

function loadStories() {
  req.keys().forEach(req);
}

configure(loadStories, module);
