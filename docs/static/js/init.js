import { draw_bar } from './bar.js'
import { getProjectWeight } from './plan.js'

function draw_project_weight() {
  // Get parent uuid
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  var uuid = urlParams.get("uuid")
  var width = urlParams.get("width")
  var height = urlParams.get("height")
  var zero = urlParams.get("zero")
  var index_only = urlParams.get("index_only")

  // Get project weight
  var obj_project_weight = {};
  try {
    obj_project_weight = getProjectWeight(uuid);
  } catch(e) {
    console.log(e);
  }

  // Zero draw
  var zero_draw_flag = false;
  if (zero == "true"){
    zero_draw_flag = true;
  }

  var index_only_flag = false;
  if (index_only == "true"){
    index_only_flag = true;
  }

  var array_weight_colors = ["#e5243b", "#DDA63A", "#4C9F38", "#C5192D", "#FF3A21", "#26BDE2", "#FCC30B", "#A21942", "#FD6925", "#DD1367", "#FD9D24", "#BF8B2E", "#3F7E44", "#0A97D9", "#56C02B", "#00689D", "#19486A", "#0075A1", "#0075A1", "#0075A1", "#0075A1", "#0075A1", "#0075A1", "#0075A1", "#0075A1", "#0075A1", "#0075A1"]
  draw_bar("my_dataviz", obj_project_weight, width, height, array_weight_colors, index_only_flag, zero_draw_flag);
}

// task uuid, zero draw
draw_project_weight();