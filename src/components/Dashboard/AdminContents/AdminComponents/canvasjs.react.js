/*
CanvasJS React Charts - https://canvasjs.com/
Copyright 2023 fenopix

--------------------- License Information --------------------
CanvasJS is a commercial product which requires purchase of license. Without a commercial license you can use it for evaluation purposes for upto 30 days. Please refer to the following link for further details.
https://canvasjs.com/license/

*/

var React = require("react");
var CanvasJS = require("./canvasjs.min");
CanvasJS = CanvasJS.Chart ? CanvasJS : window.CanvasJS;

class CanvasJSChart extends React.Component {
  static _cjsContainerId = 0;
  constructor(props) {
    super(props);
    this.optionAnswers = props.optionAnswers ? props.optionAnswers : {};
    this.containerProps = props.containerProps
      ? { ...props.containerProps }
      : { width: "100%", position: "relative" };
    this.containerProps.height =
      props.containerProps && props.containerProps.height
        ? props.containerProps.height
        : this.optionAnswers.height
        ? this.optionAnswers.height + "px"
        : "400px";
    this.chartContainerId =
      "canvasjs-react-chart-container-" + CanvasJSChart._cjsContainerId++;
  }
  componentDidMount() {
    //Create Chart and Render
    this.chart = new CanvasJS.Chart(this.chartContainerId, this.optionAnswers);
    this.chart.render();

    if (this.props.onRef) this.props.onRef(this.chart);
  }
  shouldComponentUpdate(nextProps, nextState) {
    //Check if Chart-optionAnswers has changed and determine if component has to be updated
    return !(nextProps.optionAnswers === this.optionAnswers);
  }
  componentDidUpdate() {
    //Update Chart optionAnswers & Render
    this.chart.optionAnswers = this.props.optionAnswers;
    this.chart.render();
  }
  componentWillUnmount() {
    //Destroy chart and remove reference
    if (this.chart) this.chart.destroy();

    if (this.props.onRef) this.props.onRef(undefined);
  }
  render() {
    //return React.createElement('div', { id: this.chartContainerId, style: this.containerProps });
    return <div id={this.chartContainerId} style={this.containerProps} />;
  }
}

var CanvasJSReact = {
  CanvasJSChart: CanvasJSChart,
  CanvasJS: CanvasJS,
};

export default CanvasJSReact;
