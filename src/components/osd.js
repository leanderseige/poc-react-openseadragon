import React from 'react';
import OpenSeadragon from 'openseadragon';

class OSD extends React.Component {
    constructor(props) {
        console.log("os constructor()");
        super(props);
    }

    componentDidMount() {
      console.log("os componentDidMount()");
      const viewer = new OpenSeadragon({
            id: "openseadragon1",
            showNavigationControl: false,
            tileSources: "https://iiif.ub.uni-leipzig.de/iiif/j2k/0000/0046/0000004604/00000084.jpx/info.json"
        });
    }

    render() {
      console.log("os render()");
      return (
        <div id="openseadragon1" className="Osd" />
      );
    }
}

export default OSD;
