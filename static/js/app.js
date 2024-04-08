// Function to handle changes in dropdown selection
function optionChanged(newSample) {
  console.log("New sample selected:", newSample);
  buildCharts(newSample);
  buildMetadata(newSample);
}
// Fetch the JSON data and console log it
function buildMetadata(sample){
    d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {
      let metadata = data.metadata;
      let resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
      let result = resultArray[0];
      let PANEL = d3.select("#sample-metadata");
      // Clear existing metadata
      PANEL.html("");
      // Insert each key-value pair into the metadata panel
      console.log(result)
      for (key in result){
        console.log(key)
          PANEL.append("h6").text(${key.toUpperCase()}: ${result[key]});
      };
      // Populate dropdown menu
      let select = d3.select("#selDataset");
      metadata.forEach((sample) => {
          select.append("option").text(sample.id).property("value", sample.id);
      });
    });
}
// Function to build a Bar Chart
function buildBarChart(sample) {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {
    let samples = data.samples;
    let resultArray = samples.filter(result => result.id == sample);
    let result = resultArray[0];
    let otu_ids = result.otu_ids;
    let otu_labels = result.otu_labels;
    let sample_values = result.sample_values;
    // Log the data to the console
    console.log(otu_ids, otu_labels, sample_values);
    let yticks = otu_ids.slice(0, 10).map(otuID => OTU ${otuID}).reverse();
    let xticks = sample_values.slice(0,10).reverse();
    let labels = otu_labels.slice(0,10).reverse();
    let barData = [{
      y: yticks,
      x: xticks,
      text: labels,
      type: "bar",
      orientation: "h",
    }];
    let barLayout = {
      title: "Top 10 Sampled Bacteria Cultures",
      margin: { t: 30, l: 150 }
    };
    Plotly.newPlot("bar", barData, barLayout);
  });
}
// Function to build a Bubble Chart
function buildBubbleChart(sample) {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {
    let samples = data.samples;
    let resultArray = samples.filter(result => result.id == sample);
    let result = resultArray[0];
    let otu_ids = result.otu_ids;
    let otu_labels = result.otu_labels;
    let sample_values = result.sample_values;
    // Log the data to the console
    console.log(otu_ids, otu_labels, sample_values);
    // Make the bubble chart
    let bubbleLayout = {
        title: "Sampled Bacteria Cultures",
        margin: { t: 0 },
        hovermode: "closest",
        xaxis: { title: "OTU ID" },
        margin: { t: 30}
      };
      let bubbleData = [
        {
          x: otu_ids,
          y: sample_values,
          text: otu_labels,
          mode: "markers",
          marker: {
            size: sample_values,
            color: otu_ids,
            colorscale: "Earth"
          }
        }
      ];
      Plotly.newPlot("bubble", bubbleData, bubbleLayout);
  });
}
  
// Initialize function
function init() {
  // Initialization code
  // Populate dropdown menu and add event listener for the dropdown menu change
  let select = d3.select("#selDataset");
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {
    let metadata = data.metadata;
    metadata.forEach((sample) => {
      select.append("option").text(sample.id).property("value", sample.id);
    });
    // Add event listener for the dropdown menu change
    select.on("change", function() {
      let newSample = d3.select(this).property("value");
      optionChanged(newSample);
    });
  });
}

// Function to handle changes in dropdown selection
function optionChanged(newSample) {
  console.log("New sample selected:", newSample);
  buildCharts(newSample);
  buildMetadata(newSample);
}
// Fetch the JSON data and console log it
function buildMetadata(sample){
    d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {
      let metadata = data.metadata;
      let resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
      let result = resultArray[0];
      let PANEL = d3.select("#sample-metadata");
      // Clear existing metadata
      PANEL.html("");
      // Insert each key-value pair into the metadata panel
      console.log(result)
      for (key in result){
        console.log(key)
          PANEL.append("h6").text(${key.toUpperCase()}: ${result[key]});
      };
      // Populate dropdown menu
      let select = d3.select("#selDataset");
      metadata.forEach((sample) => {
          select.append("option").text(sample.id).property("value", sample.id);
      });
    });
}
// Function to build a Bar Chart
function buildBarChart(sample) {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {
    let samples = data.samples;
    let resultArray = samples.filter(result => result.id == sample);
    let result = resultArray[0];
    let otu_ids = result.otu_ids;
    let otu_labels = result.otu_labels;
    let sample_values = result.sample_values;
    // Log the data to the console
    console.log(otu_ids, otu_labels, sample_values);
    let yticks = otu_ids.slice(0, 10).map(otuID => OTU ${otuID}).reverse();
    let xticks = sample_values.slice(0,10).reverse();
    let labels = otu_labels.slice(0,10).reverse();
    let barData = [{
      y: yticks,
      x: xticks,
      text: labels,
      type: "bar",
      orientation: "h",
    }];
    let barLayout = {
      title: "Top 10 Sampled Bacteria Cultures",
      margin: { t: 30, l: 150 }
    };
    Plotly.newPlot("bar", barData, barLayout);
  });
}
// Function to build a Bubble Chart
function buildBubbleChart(sample) {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {
    let samples = data.samples;
    let resultArray = samples.filter(result => result.id == sample);
    let result = resultArray[0];
    let otu_ids = result.otu_ids;
    let otu_labels = result.otu_labels;
    let sample_values = result.sample_values;
    // Log the data to the console
    console.log(otu_ids, otu_labels, sample_values);
    // Make the bubble chart
    let bubbleLayout = {
        title: "Sampled Bacteria Cultures",
        margin: { t: 0 },
        hovermode: "closest",
        xaxis: { title: "OTU ID" },
        margin: { t: 30}
      };
      let bubbleData = [
        {
          x: otu_ids,
          y: sample_values,
          text: otu_labels,
          mode: "markers",
          marker: {
            size: sample_values,
            color: otu_ids,
            colorscale: "Earth"
          }
        }
      ];
      Plotly.newPlot("bubble", bubbleData, bubbleLayout);
  });
}
// Initialize function
function init() {
  // Initialization code
  // Populate dropdown menu and add event listener for the dropdown menu change
  let select = d3.select("#selDataset");
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {
    let metadata = data.metadata;
    metadata.forEach((sample) => {
      select.append("option").text(sample.id).property("value", sample.id);
    });
    // Add event listener for the dropdown menu change
    select.on("change", function() {
      let newSample = d3.select(this).property("value");
      optionChanged(newSample);
    });
  });
}
// Function that updates dashboard when sample is changed
function optionChanged(value) {
  // Log the new value
  console.log(value);
  // Call all functions
  buildMetadata(value);
  buildBarChart(value);
  buildBubbleChart(value);
  // buildGaugeChart(value); // Uncomment this if you have defined buildGaugeChart function
}
// Call the init function to initialize the dashboard
init();