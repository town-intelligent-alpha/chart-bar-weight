export function getProjectWeight(uuid) {
  var projectWeight = {};
  var dataJSON = {};
  dataJSON.uuid = uuid;

  $.ajax({
    url: HOST_URL_TPLANET_DAEMON + "/projects/weight",
    type: "POST",
    async: false,
    crossDomain: true,
    data: dataJSON,
    success: function(returnData) {
       const obj = JSON.parse(returnData);
       projectWeight = obj;
    },
    error: function(xhr, ajaxOptions, thrownError){
      console.log(thrownError);
    }
  });

  return projectWeight;
}
