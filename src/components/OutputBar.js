export const OutputBar = (props) => {
    return (
        <div className="output">
            <div className="operation">{props.operation}</div>
            <div id="display">
                {props.newOperation
                    ? props.result
                    : props.isOperator
                    ? props.result
                    : props.num}
            </div>
        </div>
    );
};
