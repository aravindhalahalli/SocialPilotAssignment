import React from "react";

class UploadCSV extends React.Component {
  CSVToArray = (strData, strDelimiter) => {
    strDelimiter = strDelimiter || ",";
    var objPattern = new RegExp(
      "(\\" +
        strDelimiter +
        "|\\r?\\n|\\r|^)" +
        // Quoted fields.
        '(?:"([^"]*(?:""[^"]*)*)"|' +
        // Standard fields.
        '([^"\\' +
        strDelimiter +
        "\\r\\n]*))",
      "gi"
    );

    var arrData = [[]];
    var arrMatches = null;
    while ((arrMatches = objPattern.exec(strData))) {
      var strMatchedDelimiter = arrMatches[1];
      if (strMatchedDelimiter.length && strMatchedDelimiter !== strDelimiter) {
        arrData.push([]);
      }
      if (arrMatches[2]) {
        var strMatchedValue = arrMatches[2].replace(new RegExp('""', "g"), '"');
      } else {
        strMatchedValue = arrMatches[3];
      }
      arrData[arrData.length - 1].push(strMatchedValue);
    }
    return arrData;
  };

  handlefile = (e) => {
    let context = this;
    console.log(typeof e.target.value);
    const reader = new FileReader();
    const input = e.target;
    let data;

    reader.onload = function () {
      var text = reader.result;
      data = context.CSVToArray(text, ",");
      console.table(data);
      // console.log(
      //   `CSV Data inclcudes from sample csv file data are: ${data.forEach(
      //     (ele) => {
      //       console.log(ele);
      //     }
      //   )}`
      // );
    };
    reader.readAsText(input.files[0]);
  };

  render() {
    return (
      <div>
        <label htmlFor="upload-btn" className="Upload">
          Upload CSV
        </label>
        <input
          id="upload-btn"
          style={{ display: "none" }}
          type="file"
          className="Upload"
          onChange={this.handlefile}
        />
      </div>
    );
  }
}

export default UploadCSV;
