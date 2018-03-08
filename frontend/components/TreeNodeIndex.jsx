import React from 'react';

class TreeNodeIndex extends React.Component {
    constructor() {
        super(props);
    }

    componentDidMount() {
        this.props.requestAllTreeNodes();
    }

    displayNodes() {
        if (this.props.treeNodes) {
            this.props.treeNodes.map(treeNode =>
                <div>{treeNode.body}</div>
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