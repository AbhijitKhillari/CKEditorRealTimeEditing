import React, { Component } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from "ckeditor5";

export default class RealTime extends Component {
     
    constructor(props) {
        super(props);
        this.sidebarElementRef = React.createRef();
    }

    render() {
        return (
            <div className="row row-editor">
            <CKEditor
                editor={ClassicEditor}
               data="<p>Hello from CKEditor 5!</p>"

                config={{
                    sidebar: {
                        container: this.sidebarElementRef.current
                    },
                    licenseKey: "o8wHBjPvpzSfAvjEjw5dUM6VLwJOPR9u769AbvhBUXvwnNxGGwDu9ge8",

                }}
            />
            <div ref={this.sidebarElementRef} className="sidebar"></div>
        </div>
        );
    }
}