import React from "react";
<link
  rel="stylesheet"
  href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
  integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
  crossorigin="anonymous"
/>;
<meta
  name="viewport"
  content="width=device-width, initial-scale=1, shrink-to-fit=no"
/>;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: null,
    };
  }

  componentDidMount() {
    fetch("api")
      .then((res) => res.json())
      .then((data) => this.setState({ username: data.username }));
    fetch("api/text")
      .then((res) => res.json())
      .then((data) => this.setState({ textname: data.textname }));
    fetch("api/writer")
      .then((res) => res.json())
      .then((data) => this.setState({ writername: data.writername }));
    fetch("api/datetime")
      .then((res) => res.json())
      .then((data) => this.setState({ datetime: data.datetime }));
  }

  render() {
    const { username } = this.state;
    const { textname } = this.state;
    const { writername } = this.state;
    const { datetime } = this.state;

    return (
      <div class="container">
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
          integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
          crossorigin="anonymous"
        />
        ;
        <div className="App">
          <ul>
            <div class="table-responsive-sm">
              <table class="table table-hover">
                <thead>
                  <tr>
                    <th>번호</th>
                    <th>제목</th>
                    <th>작성자</th>
                    <th>작성일</th>
                    <th class="d-print-none">
                      <a class="btn btn-sm btn-success" href="/create">
                        Add
                      </a>
                    </th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td> {username ? `${username}` : "not"}</td>
                    <td> {textname ? `${textname}` : "not"}</td>
                    <td> {writername ? `${writername}` : "not"}</td>
                    <td> {datetime ? `${datetime}` : "not"}</td>

                    <td class="d-print-none">
                      <a
                        class="btn btn-sm btn-warning"
                        href="/edit/<%= book.Book_ID %>"
                      >
                        Edit
                      </a>
                      <a
                        class="btn btn-sm btn-danger"
                        href="/delete/<%= book.Book_ID %>"
                      >
                        Delete
                      </a>
                      <a class="btn btn-sm" href="/more/<%= book.Book_ID %>">
                        More
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
