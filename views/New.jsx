const React = require("react")

class New extends React.Component {
    render() {
        return (
            <div>
                <form action="/" method="POST">
                    Title: <input type="text" name="title" /> <br />
                    Entry: <input type="text" name="entry" /> <br />
                    Ship Is Broken: <input type="checkbox" name="shipIsBroken" value="true"/>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

module.exports = New