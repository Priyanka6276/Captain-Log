const React = require("react")

class Edit extends React.Component {
    render() {
        return(
            <div>
                <h2>Edit Page</h2>
                <form action={`/${this.props.log._id}?_method=PUT`} method="POST">
                    Title: <input type="text" name="title" defaultValue={this.props.log.title}/> <br />
                    Entry: <input type="text" name="entry" defaultValue={this.props.log.entry}/> <br />
                    Ship Is Broken: {this.props.log.shipIsBroken} <input type="checkbox" name="shipIsBroken" value="true" defaultChecked /> <br />
                    <input type="submit" value={`Edit ${this.props.log.title}`} />
                </form>
            </div>
        )
    }
}

module.exports = Edit