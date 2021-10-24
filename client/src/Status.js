var state = {goto: ""};

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {goto: ""};
    }
    changeQuestion = () => {
        this.setState({goto: "questions"});
    }

    changeAnswer = () => {
    this.setState({color: "answers"});
    }
}