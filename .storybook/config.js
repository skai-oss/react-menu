import { configure } from "@storybook/react";
import { setOptions } from "@storybook/addon-options";

const req = require.context("../stories", true, /\.stories\.js$/);
import "./app.scss";

setOptions({
  name: "React Menu",
  url: "https://github.com/kenshoo/react-menu",
  goFullScreen: false,
  showLeftPanel: true,
  showDownPanel: true,
  showSearchBox: false,
  downPanelInRight: true,
  sortStoriesByKind: false
});

function loadStories() {
  req.keys().forEach(req);
}

configure(loadStories, module);
