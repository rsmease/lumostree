import React from 'react';

class TreeNodeIndex extends React.Component {
    constructor() {
        super();
    }

    componentDidMount() {
        this.props.requestAllTreeNodes();
    }

    displayNodes() {
        console.log(this.props.treeNodes)
        if (this.props.treeNodes.length) {
            return this.props.treeNodes.map(treeNode =>
                <div key={treeNode.id}>{treeNode.body}</div>
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