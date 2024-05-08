import "./BtnBar.css";

export const BtnBar = (props) => {
    return (
        <div className="btnBar">
            <button id="clear" onClick={props.clearDisplay}>
                AC
            </button>
            <button id="divide" value="/" onClick={props.getOperation}>
                /
            </button>
            <button id="multiply" value="*" onClick={props.getOperation}>
                *
            </button>
            <button id="seven" value="7" onClick={props.getOperation}>
                7
            </button>
            <button id="eight" value="8" onClick={props.getOperation}>
                8
            </button>
            <button id="nine" value="9" onClick={props.getOperation}>
                9
            </button>
            <button id="subtract" value="-" onClick={props.getOperation}>
                -
            </button>
            <button id="four" value="4" onClick={props.getOperation}>
                4
            </button>
            <button id="five" value="5" onClick={props.getOperation}>
                5
            </button>
            <button id="six" value="6" onClick={props.getOperation}>
                6
            </button>
            <button id="add" value="+" onClick={props.getOperation}>
                +
            </button>
            <button id="one" value="1" onClick={props.getOperation}>
                1
            </button>
            <button id="two" value="2" onClick={props.getOperation}>
                2
            </button>
            <button id="three" value="3" onClick={props.getOperation}>
                3
            </button>
            <button id="zero" value="0" onClick={props.getOperation}>
                0
            </button>
            <button id="decimal" value="." onClick={props.getOperation}>
                .
            </button>
            <button id="equals" value="=" onClick={props.calculate}>
                =
            </button>
        </div>
    );
};
