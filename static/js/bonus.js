// Function to handle changes in dropdown selection
function optionChanged(newSample) {
    buildGaugeChart(newSample);
}

// Make Gauge Chart (DOUBLE CHECK THIS!)
// function buildGaugeChart(wfreq) {
    // Retrieve all the data
    // d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {
    //      let metadata = data.metadata;
    //      let resultArray = metadata.filter(result => result.id == sample);
    //      let result = resultArray[0];
         // Make the gauge chart
//          let data = [
//              {
//                  type: "indicator",
//                  mode: "gauge+number",
//                  value: wfreq,
//                  title: { text: "Belly Button Washing Frequency", font: { size: 24 } },
//                  gauge: {
//                      axis: { range: [0, 9], tickwidth: 1, tickcolor: "darkblue" },
//                      bar: { color: "darkblue" },
//                      bgcolor: "white",
//                          borderwidth: 2,
//                          bordercolor: "gray",
//                          steps: [
//                              { range: [0, 1], color: "rgba(255, 255, 255, 0)" },
//                              { range: [1, 2], color: "rgba(232,226,202, .5)" },
//                              { range: [2, 3], color: "rgba(210,206,145, .5)" },
//                              { range: [3, 4], color: "rgba(202,209,95, .5)" },
//                              { range: [4, 5], color: "rgba(170,202,42, .5)" },
//                              { range: [5, 6], color: "rgba(110,154,22, .5)" },
//                              { range: [6, 7], color: "rgba(14,127,0, .5)" },
//                              { range: [7, 8], color: "rgba(10,120,22, .5)" },
//                              { range: [8, 9], color: "rgba(0,105,11, .5)" }
//                          ]
//                      }
//                  }
//              ];
//              let layout = {
//                  width: 500,
//                  height: 400,
//                  margin: { t: 25, r: 25, l: 25, b: 25 },
//                  paper_bgcolor: "lavender",
//                  font: { color: "darkblue", family: "Arial" }
//              };
//              Plotly.newPlot("gauge", data, layout);
//  });
// }

// Make Gauge Chart (DOUBLE CHECK THIS!)
function buildGaugeChart(wfreq, data) {
    // Retrieve all the data
    let metadata = data.metadata;
    let resultArray = metadata.filter(result => result.id == sample);
    let result = resultArray[0];
         // Make the gauge chart
         let data = [
             {
                 type: "indicator",
                 mode: "gauge+number",
                 value: wfreq,
                 title: { text: "Belly Button Washing Frequency", font: { size: 24 } },
                 gauge: {
                     axis: { range: [0, 9], tickwidth: 1, tickcolor: "darkblue" },
                     bar: { color: "darkblue" },
                     bgcolor: "white",
                         borderwidth: 2,
                         bordercolor: "gray",
                         steps: [
                             { range: [0, 1], color: "rgba(255, 255, 255, 0)" },
                             { range: [1, 2], color: "rgba(232,226,202, .5)" },
                             { range: [2, 3], color: "rgba(210,206,145, .5)" },
                             { range: [3, 4], color: "rgba(202,209,95, .5)" },
                             { range: [4, 5], color: "rgba(170,202,42, .5)" },
                             { range: [5, 6], color: "rgba(110,154,22, .5)" },
                             { range: [6, 7], color: "rgba(14,127,0, .5)" },
                             { range: [7, 8], color: "rgba(10,120,22, .5)" },
                             { range: [8, 9], color: "rgba(0,105,11, .5)" }
                         ]
                     }
                 }
             ];
             let layout = {
                 width: 500,
                 height: 400,
                 margin: { t: 25, r: 25, l: 25, b: 25 },
                 paper_bgcolor: "lavender",
                 font: { color: "darkblue", family: "Arial" }
             };
             Plotly.newPlot("gauge", data, layout);
 };

