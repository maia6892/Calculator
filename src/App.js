import "./App.css";
import { OutputBar } from "./components/OutputBar";
import { BtnBar } from "./components/BtnBar";
import { useEffect, useRef, useState } from "react";
import * as math from "mathjs";

function usePrevious(value) {
    const ref = useRef([]);
    useEffect(() => {
        ref.current = value;
    }, [value]);
    return ref.current;
}

function App() {
    const [operation, setOperation] = useState("");
    const [num, setNum] = useState("");
    const [prevNum, setPrevNum] = useState("");
    const [isOperator, setIsOperator] = useState(false);
    const [isEqual, setIsEqual] = useState(false);
    const [result, setResult] = useState(0);
    const [newOperation, setNewOperation] = useState(false);

    const prevOper = usePrevious(operation);

    useEffect(() => {
        setPrevNum(num);
    }, [num]);

    const getOperation = (e) => {
        if (newOperation === true) {
            setOperation("");
            setNewOperation(false);
            setNum("");
            setResult(0);
        }
        while (
            e.target.value !== "+" &&
            e.target.value !== "-" &&
            e.target.value !== "*" &&
            e.target.value !== "/"
        ) {
            setIsOperator(false);
            setIsEqual(false);
            break;
        }

        if (e.target.value === ".") {
            if (!num.includes(".")) {
                if (!num) {
                    setNum((num) => [...num, 0, e.target.value]);
                    setOperation((operation) => [
                        ...operation,
                        0,
                        e.target.value,
                    ]);
                } else {
                    setNum((num) => [...num, e.target.value]);
                    setOperation((operation) => [...operation, e.target.value]);
                }
            }
        } else if (prevNum[0] === "0" && prevNum[1] !== ".") {
            setNum(e.target.value);
            setOperation(e.target.value);
        } else {
            setNum((num) => [...num, e.target.value]);
            setOperation((operation) => [...operation, e.target.value]);
        }

        if (
            e.target.value === "+" ||
            e.target.value === "-" ||
            e.target.value === "*" ||
            e.target.value === "/"
        ) {
            if (isEqual === true) {
                setOperation([result, e.target.value]);
            }
            if (
                (prevOper[prevOper.length - 1] === "+" ||
                    prevOper[prevOper.length - 1] === "-" ||
                    prevOper[prevOper.length - 1] === "*" ||
                    prevOper[prevOper.length - 1] === "/") &&
                e.target.value !== "-"
            ) {
                let replaceOper = prevOper;
                replaceOper.splice([replaceOper.length - 1], 1, e.target.value);
                setOperation(replaceOper);
            }
            setIsOperator(true);
            setResult(e.target.value);
            setNum("");
        }
    };

    const calculate = () => {
        if (newOperation === false) {
            const input = operation.join("");
            const res = math.evaluate(input);
            setResult(res);
            setOperation((operation) => [...operation, "=", res]);
            setNewOperation(true);
            setIsEqual(true);
        } else {
            setResult(result);
            setOperation(operation);
        }
    };

    const clearDisplay = () => {
        setOperation("");
        setResult(0);
        setNum("");
    };

    return (
        <div className="App">
            <h1>HEY! I'm your CALCULATOR!</h1>
            <OutputBar
                operation={operation}
                result={result}
                newOperation={newOperation}
                num={num}
                isOperator={isOperator}
            />
            <BtnBar
                clearDisplay={clearDisplay}
                calculate={calculate}
                getOperation={getOperation}
            />
        </div>
    );
}

export default App;
