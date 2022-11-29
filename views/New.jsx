const React = require("react")

class New extends React.Component {
    render() {
        return (
            <div>
                <form action="/logs" method="POST"></form>
                Title: <input type="text" name="title" /> <br />
                Entry: <input type="text" /> <br />
                Ship Is Broken: <input type="checkbox" />
                <input type="submit" value="Submit" />
            </div>
        )
    }
}