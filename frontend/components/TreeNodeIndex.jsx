import React from 'react';

class TreeNodeIndex extends React.Component {
    constructor() {
        super();
    }

    componentDidMount() {
        this.props.requestAllTreeNodes();
    }

    displayNodes() {
        if (this.props.treeNodes) {
            Object.keys(this.props.treeNodes).map(treeNodeKey =>
                <div>{this.props.treeNodes[treeNodeKey].body}</div>
            );
        } else {
            return <div></div>;
        }
    }

    render() {
        return (
            <section>
                <h1>My Files</h1>
                {this.displayNodes()}
            </section>
        );
    }
}

export default TreeNodeIndex;