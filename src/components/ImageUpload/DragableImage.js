import React from "react";

import { AnchorButton, Intent } from "@blueprintjs/core";
import _ from "lodash";
import { Icon } from "react-icons-kit";
import { remove } from "react-icons-kit/fa/remove";
import "./style.css";

export default class DraggableUploader extends React.Component {
  //state for Image upload
  constructor(props) {
    super(props);
    this.state = {
      loadedFiles: [],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  //back
  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  //onfile loading
  onFileLoad(e) {
    // const file = e.currentTarget.files[0];
    const file = e.currentTarget.files[0] || e.dataTransfer.files[0]
    let fileReader = new FileReader();

    fileReader.onload = () => {
      const file = {
        data: fileReader.result,
        isUploading: false,
      };
      this.addLoadedFile(file);
    };

    fileReader.onabort = () => {
      alert("Reading Aborted");
    };

    fileReader.onerror = () => {
      alert("Reading ERROR!");
    };

    fileReader.readAsDataURL(file);
  }

  //adding file
  addLoadedFile(file) {
    this.setState((prevState) => ({
      loadedFiles: [...prevState.loadedFiles, file],
    }));
  }

  //remove file
  removeLoadedFile(file) {
    this.setState((prevState) => {
      let loadedFiles = prevState.loadedFiles;
      let newLoadedFiles = _.filter(loadedFiles, (ldFile) => {
        return ldFile !== file;
      });
      return { loadedFiles: newLoadedFiles };
    });
  }
  
  //handle submit and upload
  handleSubmit(){
    if(this.state.loadedFiles.length < 1){
      alert("Please Upload images")
      return
    }
    alert(
      "Thanks for filling the property form and Please see the console for the Form Data and Image with Base64 Data"
    );
    console.log(
      `The form Data: ${this.props.address},${this.props.bedroom},${this.props.bathroom},${this.props.description}.}`
    );
    console.log(`Uploaded image: ${this.state.loadedFiles[0].data}`);
    setInterval(() => {
      window.location.reload();
    }, 10000);
  }

  render() {
    const { loadedFiles } = this.state;
    return (
      <div
        className="inner-container"
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div className="sub-header">Upload an property Images</div>
        <div className="draggable-container">
          <input
            type="file"
            id="file-browser-input"
            name="file-browser-input"
            ref={(input) => (this.fileInput = input)}
            onDragOver={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}
            onDrop={this.onFileLoad.bind(this)}
            onChange={this.onFileLoad.bind(this)}
          />
          <div className="files-preview-container ip-scrollbar">
            {loadedFiles.map((file, idx) => {
              return (
                <div className="file" key={idx}>
                  <img src={file.data} alt="img" />
                  <div className="container">
                    {/* <span className="progress-bar">{file.isUploading}</span> */}
                    <span
                      className="remove-btn"
                      onClick={() => this.removeLoadedFile(file)}
                    >
                      <Icon icon={remove} size={19} />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="helper-text">Drag and Drop Images Here</div>
          <div className="file-browser-container">
            <AnchorButton
              text="Browse"
              intent={Intent.PRIMARY}
              minimal={true}
              onClick={() => this.fileInput.click()}
            />
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <button className="Back" onClick={this.back}>
            Back
          </button>
          <button
            className="Next"
            onClick={this.handleSubmit}
          >
            Submit and Upload
          </button>
        </div>
      </div>
    );
  }
}